import { useState, useEffect, useRef } from 'react'

const TableOfContents = ({ sections, className = '', debug = false }) => {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [shouldHide, setShouldHide] = useState(false)
  const [hasScroll, setHasScroll] = useState(false)
  const tocContentRef = useRef(null)
  const mobileTocContentRef = useRef(null)

  // Debug logging
  useEffect(() => {
    if (debug) {
      console.log('TOC Debug:', {
        activeSection,
        totalSections: sections?.length,
        isVisible,
        shouldHide,
        tocContentRef: !!tocContentRef.current,
        mobileTocContentRef: !!mobileTocContentRef.current
      })
    }
  }, [activeSection, isVisible, shouldHide, sections, debug])

  // Check if TOC content is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (tocContentRef.current) {
        const isScrollable = tocContentRef.current.scrollHeight > tocContentRef.current.clientHeight
        setHasScroll(isScrollable)
      }
    }

    checkScrollable()
    window.addEventListener('resize', checkScrollable)

    return () => window.removeEventListener('resize', checkScrollable)
  }, [sections])

  // Generate section IDs for navigation
  const generateSectionId = (title, index) => {
    return `section-${index}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  }

  // Scroll to section smoothly
  const scrollToSection = (index) => {
    const sectionId = generateSectionId(sections[index].title, index)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
      setActiveSection(index)
    }
  }

  // Track active section and footer visibility
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Get all section elements
          const sectionElements = sections.map((_, index) => {
            const sectionId = generateSectionId(sections[index].title, index)
            return document.getElementById(sectionId)
          }).filter(Boolean)

          if (sectionElements.length === 0) {
            ticking = false
            return
          }

          const scrollPosition = window.scrollY
          const windowHeight = window.innerHeight
          const viewportCenter = scrollPosition + windowHeight / 3 // Use 1/3 of viewport for better UX

          // Find the section that's currently in view
          let currentSection = 0

          for (let i = 0; i < sectionElements.length; i++) {
            const element = sectionElements[i]
            const rect = element.getBoundingClientRect()
            const elementTop = scrollPosition + rect.top
            const elementBottom = elementTop + rect.height

            // Check if section is in the viewport
            if (elementTop <= viewportCenter && elementBottom > scrollPosition) {
              currentSection = i
            }
          }

          // Only update if section changed
          setActiveSection(prev => prev !== currentSection ? currentSection : prev)

          // Check if footer is visible
          const footer = document.querySelector('footer')
          if (footer) {
            const footerRect = footer.getBoundingClientRect()
            // Hide TOC when footer is approaching (200px buffer)
            setShouldHide(footerRect.top < windowHeight - 200)
          }

          ticking = false
        })
        ticking = true
      }
    }

    // Throttled scroll handler
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  // Toggle TOC visibility on mobile
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  // Auto-scroll TOC to show active section
  useEffect(() => {
    const scrollToActiveSection = (containerRef) => {
      if (!containerRef?.current) return

      const container = containerRef.current
      const activeButton = container.querySelector(`[data-section-index="${activeSection}"]`)

      if (!activeButton) return

      // Get the button's position relative to its scrollable container
      const buttonRect = activeButton.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      // Calculate the button's position relative to the container's scroll area
      // offsetTop gives us the position relative to the offsetParent
      const relativeTop = activeButton.offsetTop
      const buttonHeight = activeButton.offsetHeight
      const containerHeight = container.clientHeight
      const currentScroll = container.scrollTop

      // Add padding to ensure button is not at the very edge
      const padding = 20

      // Check if button is already fully visible with padding
      const isFullyVisible = (
        relativeTop >= currentScroll + padding &&
        relativeTop + buttonHeight <= currentScroll + containerHeight - padding
      )

      if (!isFullyVisible) {
        // Calculate scroll position to center the button
        const targetScroll = relativeTop - (containerHeight / 2) + (buttonHeight / 2)

        // Ensure we don't scroll past boundaries
        const maxScroll = container.scrollHeight - containerHeight
        const finalScroll = Math.max(0, Math.min(targetScroll, maxScroll))

        container.scrollTo({
          top: finalScroll,
          behavior: 'smooth'
        })
      }
    }

    // Use requestAnimationFrame for better performance
    const rafId = requestAnimationFrame(() => {
      // Scroll desktop TOC
      scrollToActiveSection(tocContentRef)

      // Scroll mobile TOC only if visible
      if (isVisible) {
        scrollToActiveSection(mobileTocContentRef)
      }
    })

    return () => cancelAnimationFrame(rafId)
  }, [activeSection, isVisible])

  if (!sections || sections.length === 0) {
    return null
  }

  return (
    <>
      {/* Modern Mobile TOC Button */}
      <button
        onClick={toggleVisibility}
        className="2xl:hidden fixed top-20 right-4 z-50 group"
        aria-label="Toggle Table of Contents"
      >
        <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 p-3 rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-400/20">
          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </button>

      {/* Sticky TOC that hides near footer */}
      <div className={`
        fixed top-24 right-6 z-40 w-80 max-h-[calc(100vh-150px)]
        bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl
        border border-gray-700/50 rounded-2xl shadow-2xl
        transition-all duration-500 ease-out overflow-hidden flex flex-col
        ${shouldHide ? 'translate-x-full opacity-0' :
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 2xl:translate-x-0 2xl:opacity-100'}
        hidden 2xl:block
        ${className}
      `}>
        {/* Simple Header */}
        <div className="flex-shrink-0 p-6 border-b border-gray-700/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              Contents
            </h3>
            <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
              {sections.length} sections
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Progress</span>
              <span>{activeSection + 1} / {sections.length}</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500 ease-out shadow-sm"
                style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-hidden min-h-0 relative">
          <div
            ref={tocContentRef}
            className="h-full p-6 pr-4 overflow-y-auto scroll-smooth overscroll-contain toc-scrollbar"
            style={{
              WebkitOverflowScrolling: 'touch',
              maxHeight: 'calc(100vh - 300px)' // Ensure proper height constraint
            }}
          >
            <nav>
              <ul className="space-y-3 pb-4">
              {sections.map((section, index) => (
                <li key={index}>
                  <button
                    data-section-index={index}
                    onClick={() => scrollToSection(index)}
                    className={`
                      w-full text-left p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden
                      ${activeSection === index
                        ? 'bg-gradient-to-r from-green-400/20 to-emerald-500/20 border border-green-400/30 shadow-lg shadow-green-400/10'
                        : 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600/50 hover:shadow-lg'
                      }
                    `}
                  >
                    {/* Active indicator line */}
                    {activeSection === index && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-500 rounded-r-full" />
                    )}

                    <div className="flex items-center space-x-4">
                      {/* Modern number badge */}
                      <div className={`
                        relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300
                        ${activeSection === index
                          ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-black shadow-lg shadow-green-400/25'
                          : 'bg-gray-700/80 text-gray-300 group-hover:bg-gray-600/80 group-hover:text-white'
                        }
                      `}>
                        {index + 1}
                        {activeSection === index && (
                          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl animate-pulse opacity-30" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className={`
                          text-sm font-semibold leading-tight transition-colors duration-300
                          ${activeSection === index
                            ? 'text-white'
                            : 'text-gray-300 group-hover:text-white'
                          }
                        `}>
                          {section.title}
                        </p>
                        {activeSection === index && (
                          <p className="text-xs text-green-400/80 mt-1 font-medium">
                            Currently reading
                          </p>
                        )}
                      </div>

                      {/* Arrow indicator */}
                      <div className={`
                        flex-shrink-0 transition-all duration-300
                        ${activeSection === index
                          ? 'text-green-400 transform translate-x-1'
                          : 'text-gray-500 group-hover:text-gray-300 group-hover:transform group-hover:translate-x-1'
                        }
                      `}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Scroll Indicator */}
        {hasScroll && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900/95 to-transparent pointer-events-none flex items-end justify-center pb-2">
            <div className="text-xs text-gray-400 animate-bounce">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        )}
      </div>
      </div>

      {/* Modern Mobile TOC - Bottom Sheet */}
      <div className={`
        2xl:hidden fixed bottom-0 left-0 right-0 z-40 max-h-[70vh] flex flex-col
        bg-gradient-to-t from-gray-900/98 to-gray-800/98 backdrop-blur-xl
        border-t border-gray-700/50 shadow-2xl rounded-t-3xl
        transition-all duration-500 ease-out
        ${shouldHide ? 'translate-y-full' : isVisible ? 'translate-y-0' : 'translate-y-full'}
      `}>
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-gray-600 rounded-full"></div>
        </div>

        {/* Modern Mobile TOC Header */}
        <div className="flex-shrink-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-b border-gray-700/30 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              Contents
            </h3>
            <button
              onClick={toggleVisibility}
              className="text-gray-400 hover:text-white transition-all duration-200 p-2 rounded-xl hover:bg-gray-700/50"
              aria-label="Close Table of Contents"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Progress Bar */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Progress</span>
              <span>{activeSection + 1} / {sections.length}</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500 ease-out shadow-sm"
                style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Mobile Scrollable Content */}
        <div ref={mobileTocContentRef} className="flex-1 p-6 pr-4 overflow-y-auto min-h-0 toc-scrollbar">
          <nav>
            <ul className="space-y-3 pb-4">
              {sections.map((section, index) => (
                <li key={index}>
                  <button
                    data-section-index={index}
                    onClick={() => {
                      scrollToSection(index)
                      setIsVisible(false) // Close mobile TOC after selection
                    }}
                    className={`
                      w-full text-left p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden
                      ${activeSection === index
                        ? 'bg-gradient-to-r from-green-400/20 to-emerald-500/20 border border-green-400/30 shadow-lg shadow-green-400/10'
                        : 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600/50 hover:shadow-lg'
                      }
                    `}
                  >
                    {/* Active indicator line */}
                    {activeSection === index && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-500 rounded-r-full" />
                    )}

                    <div className="flex items-center space-x-4">
                      {/* Modern number badge */}
                      <div className={`
                        relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300
                        ${activeSection === index
                          ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-black shadow-lg shadow-green-400/25'
                          : 'bg-gray-700/80 text-gray-300 group-hover:bg-gray-600/80 group-hover:text-white'
                        }
                      `}>
                        {index + 1}
                        {activeSection === index && (
                          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl animate-pulse opacity-30" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className={`
                          text-base font-semibold leading-tight transition-colors duration-300
                          ${activeSection === index
                            ? 'text-white'
                            : 'text-gray-300 group-hover:text-white'
                          }
                        `}>
                          {section.title}
                        </p>
                        {activeSection === index && (
                          <p className="text-xs text-green-400/80 mt-1 font-medium">
                            Currently reading
                          </p>
                        )}
                      </div>

                      {/* Arrow indicator */}
                      <div className={`
                        flex-shrink-0 transition-all duration-300
                        ${activeSection === index
                          ? 'text-green-400 transform translate-x-1'
                          : 'text-gray-500 group-hover:text-gray-300 group-hover:transform group-hover:translate-x-1'
                        }
                      `}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isVisible && (
        <div
          className="2xl:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleVisibility}
        />
      )}
    </>
  )
}

export default TableOfContents
