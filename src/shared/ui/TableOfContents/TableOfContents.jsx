import { useState, useEffect } from 'react'

const TableOfContents = ({ sections, className = '' }) => {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

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

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((_, index) => {
        const sectionId = generateSectionId(sections[index].title, index)
        return document.getElementById(sectionId)
      }).filter(Boolean)

      const scrollPosition = window.scrollY + 100 // Offset for header

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  // Toggle TOC visibility on mobile
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  if (!sections || sections.length === 0) {
    return null
  }

  return (
    <>
      {/* Mobile TOC Toggle Button */}
      <button
        onClick={toggleVisibility}
        className="2xl:hidden fixed top-20 right-4 z-50 bg-gray-800/90 backdrop-blur-sm text-green-400 p-2.5 rounded-full border border-gray-600 hover:bg-gray-700 transition-all duration-200 shadow-lg hover:scale-105"
        aria-label="Toggle Table of Contents"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* TOC Container */}
      <div className={`
        fixed top-24 right-6 z-40 w-80 max-h-[calc(100vh-8rem)] overflow-y-auto
        bg-gray-800/95 backdrop-blur-sm border border-gray-600 rounded-lg shadow-xl
        transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 2xl:translate-x-0 2xl:opacity-100'}
        hidden 2xl:block
        ${className}
      `}>
        {/* TOC Header */}
        <div className="sticky top-0 bg-gray-800 border-b border-gray-600 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
              Table of Contents
            </h3>
            <button
              onClick={toggleVisibility}
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
              aria-label="Close Table of Contents"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* TOC Content */}
        <div className="p-4">
          <nav>
            <ul className="space-y-2">
              {sections.map((section, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(index)}
                    className={`
                      w-full text-left p-3 rounded-lg transition-all duration-200
                      border-l-4 hover:bg-gray-700 group
                      ${activeSection === index 
                        ? 'bg-gray-700 border-green-400 text-green-400' 
                        : 'border-transparent text-gray-300 hover:text-white hover:border-gray-500'
                      }
                    `}
                  >
                    <div className="flex items-start space-x-3">
                      <span className={`
                        flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                        ${activeSection === index 
                          ? 'bg-green-400 text-black' 
                          : 'bg-gray-600 text-gray-300 group-hover:bg-gray-500'
                        }
                      `}>
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`
                          text-sm font-medium leading-tight
                          ${activeSection === index ? 'text-green-400' : 'text-gray-300 group-hover:text-white'}
                        `}>
                          {section.title}
                        </p>
                        {section.content && (
                          <p className="text-xs text-gray-400 mt-1 overflow-hidden" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical'
                          }}>
                            {section.content.substring(0, 80)}...
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Progress Indicator */}
        <div className="sticky bottom-0 bg-gray-800 border-t border-gray-600 p-4">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Progress</span>
            <span>{activeSection + 1} of {sections.length}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-green-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Mobile TOC - Bottom Sheet */}
      <div className={`
        2xl:hidden fixed bottom-0 left-0 right-0 z-40 max-h-[70vh] overflow-y-auto
        bg-gray-800/95 backdrop-blur-sm border-t border-gray-600 rounded-t-xl shadow-2xl
        transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : 'translate-y-full'}
      `}>
        {/* Mobile TOC Header */}
        <div className="sticky top-0 bg-gray-800/95 backdrop-blur-sm border-b border-gray-600 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
              Table of Contents
            </h3>
            <button
              onClick={toggleVisibility}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close Table of Contents"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile TOC Content */}
        <div className="p-4">
          <nav>
            <ul className="space-y-3">
              {sections.map((section, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      scrollToSection(index)
                      setIsVisible(false) // Close mobile TOC after selection
                    }}
                    className={`
                      w-full text-left p-4 rounded-lg transition-all duration-200
                      border-l-4 hover:bg-gray-700 group
                      ${activeSection === index
                        ? 'bg-gray-700 border-green-400 text-green-400'
                        : 'border-transparent text-gray-300 hover:text-white hover:border-gray-500'
                      }
                    `}
                  >
                    <div className="flex items-start space-x-3">
                      <span className={`
                        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                        ${activeSection === index
                          ? 'bg-green-400 text-black'
                          : 'bg-gray-600 text-gray-300 group-hover:bg-gray-500'
                        }
                      `}>
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`
                          text-base font-medium leading-tight
                          ${activeSection === index ? 'text-green-400' : 'text-gray-300 group-hover:text-white'}
                        `}>
                          {section.title}
                        </p>
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
