

const CourseOverview = () => {
  const features = [
    { icon: '🐧', text: 'Everything you need to be productive with Linux' },
    { icon: '🚀', text: 'Essential Linux concepts explained in 100 seconds' },
    { icon: '📂', text: 'File system navigation, permissions, and management' },
    { icon: '👨‍💻', text: 'System administration basics and user management' },
    { icon: '📜', text: 'Build complex scripts with Bash' },
    { icon: '🖥️', text: 'Understand process management and system monitoring' },
    { icon: '🔥', text: 'Firewalls and network configuration' },
    { icon: '🤔', text: 'How to choose a VPS provider' },
    { icon: '⚙️', text: 'Automate services with systemd' },
    { icon: '🌟', text: 'Deploy your own web server Nginx' },
    { icon: '🧊', text: 'Mount block storage for self-hosted databases' },
    { icon: '🔐', text: 'Linux security fundamentals' },
  ]

  return (
    <section id="overview" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">What will I learn?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master Linux system administration through hands-on practice and real-world scenarios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-400 transition-colors">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">{feature.icon}</span>
                <p className="text-gray-300">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">🛠️ What will I build?</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            You will set up and configure a <span className="text-green-400 font-semibold">Complete Linux Server Environment</span> for
            a self-hosted web application inspired by real-world scenarios - you can use the project code on GitHub or bring your own application.
            The primary goal is to leverage Linux's powerful command-line interface to teach you a variety of system administration and automation tasks.
            By the end of the course, you will be a <span className="text-green-400 font-semibold">certified Linux giga chad!</span>
          </p>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-400 to-green-300 rounded-lg p-8 text-black">
            <h3 className="text-2xl font-bold mb-4">💻 Try it out!</h3>
            <p className="text-lg mb-6">
              Access our virtual Linux environment and give it a test drive before you enroll.
              It includes a fully functional Linux system where you can practice commands, write scripts, and more.
            </p>
            <button className="bg-black text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Launch Demo Environment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseOverview
