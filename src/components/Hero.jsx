

const Hero = () => {
  const handleStartLearning = (e) => {
    e.preventDefault()
    const chaptersSection = document.getElementById('chapters')
    if (chaptersSection) {
      chaptersSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <span className="text-6xl">🐧</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-green-400">Linux</span>
            <span className="text-white">Buddy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Your friendly companion to mastering Linux! Learn system administration, VPS deployment,
            and become a Linux expert - completely FREE!
          </p>

          <div className="mb-8">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-lg font-semibold mb-4">
              <span className="mr-2">🔥</span>
              <span className="line-through text-red-200 mr-2">$20 Value</span>
              <span>FREE Forever!</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/#chapters"
              onClick={handleStartLearning}
              className="bg-green-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-300 transition-colors inline-block cursor-pointer"
            >
              🚀 Start Learning FREE
            </a>
            <a
              href="/#demo"
              className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 hover:text-black transition-colors inline-block"
            >
              📺 Watch Demo
            </a>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-gray-400 text-sm">terminal</span>
            </div>
            <div className="text-left font-mono text-sm">
              <div className="text-green-400">$ whoami</div>
              <div className="text-white">future-linux-admin</div>
              <div className="text-green-400">$ sudo systemctl status nginx</div>
              <div className="text-green-300">● nginx.service - A high performance web server</div>
              <div className="text-green-300">   Active: active (running)</div>
              <div className="text-green-400 animate-pulse">$ _</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
