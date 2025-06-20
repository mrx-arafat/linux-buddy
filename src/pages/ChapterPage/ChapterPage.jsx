import { useParams, Link } from 'react-router-dom'
import { getChapterBySlug, getNextChapter, getPreviousChapter } from '../../shared/data/all-chapters'
import CodeBlock from '../../shared/ui/CodeBlock/CodeBlock'

const ChapterPage = () => {
  const { slug } = useParams()
  const chapter = getChapterBySlug(slug)

  // Get next and previous chapters for navigation
  const nextChapter = chapter ? getNextChapter(chapter.id) : null
  const previousChapter = chapter ? getPreviousChapter(chapter.id) : null

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
    <div className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Chapters
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-6xl">{chapter.icon}</span>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {chapter.id}
                </span>
                <span className="text-green-400 font-bold text-sm uppercase tracking-wider">
                  {chapter.title}
                </span>
              </div>
              <p className="text-gray-300 text-lg">{chapter.description}</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{chapter.content.overview}</p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {chapter.content.sections.map((section, index) => (
            <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{section.content}</p>
                
                {section.codeExample && (
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Code Example:</h4>
                    <CodeBlock code={section.codeExample} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12">
          {/* Chapter Navigation */}
          <div className="flex justify-between items-center mb-8">
            {previousChapter ? (
              <Link
                to={`/chapter/${previousChapter.slug}`}
                className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="text-left">
                  <div className="text-sm text-gray-300">Previous</div>
                  <div className="text-green-400">{previousChapter.id} {previousChapter.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextChapter ? (
              <Link
                to={`/chapter/${nextChapter.slug}`}
                className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-300">Next</div>
                  <div className="text-green-400">{nextChapter.id} {nextChapter.title}</div>
                </div>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div></div>
            )}
          </div>

          {/* Back to All Chapters */}
          <div className="text-center">
            <Link
              to="/"
              className="bg-green-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-300 transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              View All Chapters
            </Link>
            <p className="text-gray-400 mt-4">
              Enjoying LinuxBuddy? Share it with fellow Linux enthusiasts! 🐧
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChapterPage
