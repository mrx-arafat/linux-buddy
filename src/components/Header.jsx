
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-green-400 text-2xl font-bold">🐧</span>
            <h1 className="text-xl font-bold text-white">LinuxBuddy</h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a href="#overview" className="text-gray-300 hover:text-green-400 transition-colors">
              Overview
            </a>
            <a href="#chapters" className="text-gray-300 hover:text-green-400 transition-colors">
              Chapters
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-green-400 transition-colors">
              Pricing
            </a>
            <a href="#demo" className="text-gray-300 hover:text-green-400 transition-colors">
              Try Demo
            </a>
          </nav>
          <button className="bg-green-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-300 transition-colors">
            Get Free Access
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
