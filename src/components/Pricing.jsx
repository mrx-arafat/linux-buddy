

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Get Started Today</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LinuxBuddy is completely FREE! Get instant access to all 34 chapters and start your Linux journey today.
            No hidden costs, no subscriptions - just pure learning value!
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {/* Free Course Option */}
          <div className="bg-gray-800 rounded-lg p-8 border-2 border-green-400 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              FREE!
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🐧</div>
              <h3 className="text-2xl font-bold text-white mb-4">LinuxBuddy Complete Course</h3>
              <div className="mb-4">
                <div className="text-2xl text-gray-400 line-through mb-1">$20 Value</div>
                <div className="text-5xl font-bold text-green-400 mb-2">FREE</div>
              </div>
              <p className="text-gray-300 mb-6">Complete access to all content - No strings attached!</p>
              
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  Complete Linux course access
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  34 comprehensive chapters
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  Hands-on VPS deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  Lifetime access - Forever!
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  Virtual Linux environment
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-3">✓</span>
                  No hidden costs or subscriptions
                </li>
              </ul>

              <button className="w-full bg-green-400 text-black py-4 rounded-lg text-lg font-semibold hover:bg-green-300 transition-colors">
                🚀 Get FREE Access Now
              </button>
            </div>
          </div>


        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">🤔 Is LinuxBuddy Right for Me?</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              LinuxBuddy is perfect for <span className="text-green-400 font-semibold">beginner to intermediate level 🟦</span> learners who
              want to master Linux without any financial commitment. The content is fast-paced, hands-on, and completely FREE -
              making it accessible to everyone who wants to learn Linux system administration!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
