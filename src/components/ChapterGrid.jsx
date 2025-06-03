
import { Link } from 'react-router-dom'
import { allChapters } from '../shared/data/all-chapters'

const ChapterGrid = () => {

  return (
    <section id="chapters" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Course Chapters</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            34 comprehensive chapters covering everything from Linux basics to advanced system administration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allChapters.map((chapter, index) => (
            <Link
              key={chapter.id}
              to={`/chapter/${chapter.slug}`}
              className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group block"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {chapter.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-green-400 font-bold text-sm">{chapter.id}</span>
                    <span className="text-green-400 font-bold text-xs uppercase tracking-wider">
                      {chapter.title}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Course Information</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-2">🟦</div>
                <h4 className="text-green-400 font-semibold mb-2">Difficulty Level</h4>
                <p className="text-gray-300">Beginner to Intermediate</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📅</div>
                <h4 className="text-green-400 font-semibold mb-2">Last Updated</h4>
                <p className="text-gray-300">July 1st, 2024 - Ubuntu 24.04 LTS</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="text-green-400 font-semibold mb-2">Format</h4>
                <p className="text-gray-300">Fast-paced and hands-on</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChapterGrid
