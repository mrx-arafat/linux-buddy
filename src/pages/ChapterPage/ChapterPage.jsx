import { useParams, Link, useNavigate } from 'react-router-dom'
import { getChapterBySlug, getNextChapter, getPreviousChapter } from '../../shared/data/all-chapters'
import CodeBlock from '../../shared/ui/CodeBlock/CodeBlock'
import TableOfContents from '../../shared/ui/TableOfContents/TableOfContents'

const ChapterPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const chapter = getChapterBySlug(slug)

  // Handle navigation to chapters section
  const handleBackToChapters = (e) => {
    e.preventDefault()
    navigate('/')
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const chaptersSection = document.getElementById('chapters')
      if (chaptersSection) {
        chaptersSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  // Get next and previous chapters for navigation
  const nextChapter = chapter ? getNextChapter(chapter.id) : null
  const previousChapter = chapter ? getPreviousChapter(chapter.id) : null

  // Generate section ID for navigation
  const generateSectionId = (title, index) => {
    return `section-${index}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  }

  // Parse markdown-style text
  const parseMarkdownText = (text) => {
    if (!text) return text

    // Split text into parts and process each part
    const parts = text.split(/(\*\*[^*]+\*\*)/g)

    return parts.map((part, index) => {
      // Bold text (**text**)
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2)
        return (
          <strong key={index} className="text-white font-bold">
            {boldText}
          </strong>
        )
      }
      return part
    })
  }

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Chapter Not Found</h1>
          <p className="text-gray-300 mb-8">The chapter you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gray-900 min-h-screen">
      {/* Table of Contents */}
      {chapter && chapter.content.sections && (
        <TableOfContents sections={chapter.content.sections} />
      )}

      <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:pr-96 2xl:pl-12">
        {/* Header */}
        <div className="mb-16">
          <a
            href="/#chapters"
            onClick={handleBackToChapters}
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-all duration-200 mb-8 group cursor-pointer"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Chapters
          </a>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-7xl sm:text-8xl">{chapter.icon}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-green-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                    Chapter {chapter.id}
                  </span>
                  <span className="text-green-400 font-bold text-lg uppercase tracking-wider">
                    {chapter.title}
                  </span>
                </div>
                <p className="text-gray-300 text-xl leading-relaxed">{chapter.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-800/80 rounded-2xl p-8 border border-gray-700 mb-12 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="bg-green-400/10 p-3 rounded-xl mr-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Overview</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-300 text-lg leading-relaxed">{parseMarkdownText(chapter.content.overview)}</div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {chapter.content.sections.map((section, index) => {
            const sectionId = generateSectionId(section.title, index)
            return (
              <section
                key={index}
                id={sectionId}
                className="bg-gradient-to-br from-gray-800 to-gray-800/80 rounded-2xl border border-gray-700 overflow-hidden scroll-mt-24 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-10">
                  {/* Section Header with Anchor Link */}
                  <div className="flex items-start justify-between mb-8 group">
                    <h3 className="text-2xl font-bold text-white flex items-center leading-tight">
                      <span className="bg-green-400 text-black px-4 py-2 rounded-full text-base font-bold mr-5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="flex-1">{section.title}</span>
                    </h3>
                    <a
                      href={`#${sectionId}`}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-gray-400 hover:text-green-400 p-3 rounded-xl hover:bg-gray-700/50 hover:scale-105"
                      title="Link to this section"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </a>
                  </div>

                  <div className="max-w-none mb-8">
                    <div className="text-gray-300 leading-relaxed text-lg font-light">
                      {parseMarkdownText(section.content)}
                    </div>
                  </div>

                  {section.codeExample && (
                    <div className="border-t border-gray-700 pt-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-green-400/10 p-3 rounded-xl mr-4">
                          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-green-400">Code Example</h4>
                      </div>
                      <CodeBlock code={section.codeExample} language="bash" />
                    </div>
                  )}
                </div>
              </section>
            )
          })}
        </div>

        {/* Navigation */}
        <div className="mt-20">
          {/* Chapter Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {previousChapter ? (
              <Link
                to={`/chapter/${previousChapter.slug}`}
                className="group bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 rounded-2xl font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border border-gray-600 hover:border-gray-500 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-green-400 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <div className="text-left">
                    <div className="text-sm text-gray-400 mb-1">Previous Chapter</div>
                    <div className="text-green-400 text-lg">{previousChapter.id} • {previousChapter.title}</div>
                  </div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextChapter ? (
              <Link
                to={`/chapter/${nextChapter.slug}`}
                className="group bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 rounded-2xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 border border-gray-600 hover:border-gray-500 shadow-lg hover:shadow-xl md:ml-auto"
              >
                <div className="flex items-center justify-end">
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Next Chapter</div>
                    <div className="text-green-400 text-lg">{nextChapter.id} • {nextChapter.title}</div>
                  </div>
                  <svg className="w-6 h-6 ml-3 text-green-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
          </div>

          {/* Back to All Chapters */}
          <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <a
              href="/#chapters"
              onClick={handleBackToChapters}
              className="bg-gradient-to-r from-green-400 to-green-500 text-black px-10 py-4 rounded-xl font-bold hover:from-green-300 hover:to-green-400 transition-all duration-300 inline-flex items-center text-lg shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              View All Chapters
            </a>
            <p className="text-gray-400 mt-6 text-lg">
              Enjoying LinuxBuddy? Share it with fellow Linux enthusiasts! 🐧
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChapterPage
