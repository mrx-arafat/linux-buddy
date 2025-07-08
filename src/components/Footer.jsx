

const Footer = () => {
  const handleGetFreeAccess = (e) => {
    e.preventDefault()
    const chaptersSection = document.getElementById('chapters')
    if (chaptersSection) {
      chaptersSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-5xl">🐧</span>
              <h3 className="text-4xl font-bold">
                <span className="text-green-400">Linux</span>
                <span className="text-white">Buddy</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Learn Linux system administration through hands-on practice.
              34 comprehensive chapters covering everything from basics to advanced topics.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/mrx-arafat/linux-buddy"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub Repository"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com/easinxarafat"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Twitter Profile"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
              </a>
              <a
                href="https://profile.arafatops.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Developer Portfolio"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="text-green-400 mr-2">▸</span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#overview" className="text-gray-400 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block">
                  Course Overview
                </a>
              </li>
              <li>
                <a href="#chapters" className="text-gray-400 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block">
                  All Chapters
                </a>
              </li>
              <li>
                <a href="/#chapters" onClick={handleGetFreeAccess} className="text-gray-400 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block cursor-pointer">
                  Get Free Access
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block">
                  Try Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Developer */}
          <div className="min-w-0">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="text-green-400 mr-2">▸</span>
              Developer
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/mrx-arafat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mrx-arafat/linux-buddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block"
                >
                  Source Code
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/easinxarafat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://profile.arafatops.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-all duration-200 hover:translate-x-1 block"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          {/* Developer Credit Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} LinuxBuddy. Built with <span className="text-red-500">❤️</span> for the Linux community
              </p>
            </div>

            {/* Developer Credit */}
            <div className="flex flex-col items-center">
              <a
                href="https://profile.arafatops.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2"
              >
                <span className="text-gray-400 text-sm">Project by</span>
                <div className="relative">
                  <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent group-hover:from-green-300 group-hover:to-blue-400 transition-all duration-300">
                    Easin Arafat
                  </span>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </a>
              <div className="flex items-center space-x-4 mt-2">
                <a
                  href="https://github.com/mrx-arafat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-green-400 transition-colors"
                >
                  @mrx-arafat
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://twitter.com/easinxarafat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-green-400 transition-colors"
                >
                  @easinxarafat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
