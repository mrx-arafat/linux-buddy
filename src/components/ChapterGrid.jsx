

const ChapterGrid = () => {
  const chapters = [
    { id: '01', icon: '🐧', title: 'START USING LINUX', description: 'How to get started with Linux' },
    { id: '02', icon: '💿', title: '10 LINUX DISTROS', description: 'Ten awesome Linux distros explained' },
    { id: '03', icon: '🤘', title: 'LINUX 101', description: '101 words you must know in the Linux/GNU ecosystem' },
    { id: '04', icon: '💪', title: '10 ESSENTIAL COMMANDS', description: 'Ten Linux commands and tricks you absolutely must know' },
    { id: '05', icon: '🗃️', title: 'THE FILE SYSTEM', description: 'Every Linux directory explained' },
    { id: '06', icon: '🗺️', title: 'WTF IS $PATH', description: 'What is the PATH environment variable?' },
    { id: '07', icon: '🔐', title: 'FILE PERMISSIONS', description: 'How read, write, execute permissions work' },
    { id: '08', icon: '🦸', title: 'SUDO', description: 'Run commands with elevated privileges with sudo' },
    { id: '09', icon: '🐚', title: 'BASH SHELL', description: 'Write your first bash shell script' },
    { id: '10', icon: '🎨', title: 'BASH CONFIG', description: 'How to make your Linux terminal look cool' },
    { id: '11', icon: '📃', title: 'TEXT EDITORS', description: 'How to use terminal text editors like Nano and Vim' },
    { id: '12', icon: '🔎', title: 'GREP && SED', description: 'Advanced text searching and manipulation techniques' },
    { id: '13', icon: '🪫', title: 'PROCESS MANAGEMENT', description: 'Use tools like htop to manage Linux processes' },
    { id: '14', icon: '⏰', title: 'CRON JOBS', description: 'Run background processes on a schedule with Cron' },
    { id: '15', icon: '🪄', title: 'TAR & GZIP', description: 'File compression and directory archiving magic' },
    { id: '16', icon: '📦', title: 'PACKAGE MANAGERS', description: 'How to install packages from source' },
    { id: '17', icon: '⌨️', title: 'CHOOSING A VPS', description: 'How to choose a Virtual Private Server' },
    { id: '18', icon: '🗝️', title: 'SSH', description: 'Connect to a remote server securely with SSH' },
    { id: '19', icon: '🖥️', title: 'BUILD AN APP', description: 'Build a fullstack webapp for VPS deployment' },
    { id: '20', icon: '🔥', title: 'FIREWALL', description: 'How to open ports on your Firewall with ufw' },
    { id: '21', icon: '🍴', title: 'CODE TRANSFER', description: 'How to upload code to a VPS' },
    { id: '22', icon: '🛡️', title: 'SSL', description: 'How to setup a free SSL certificate' },
    { id: '23', icon: '🚅', title: 'NGINX', description: 'How to configure Nginx on your VPS' },
    { id: '24', icon: '🍱', title: 'ENV VARS', description: 'The many ways to configure Environment Variables in Linux' },
    { id: '25', icon: '🤖', title: 'SYSTEMD', description: 'Automatically start and heal processes with systemd' },
    { id: '26', icon: '💽', title: 'MOUNT A VOLUME', description: 'How to attach block storage to your VPS' },
    { id: '27', icon: '🚀', title: 'FINAL CHECKLIST', description: 'Checklist of considerations for VPS deployment' },
    { id: '28', icon: '🎊', title: 'LINUX HISTORY', description: 'The weird history of Linux' },
    { id: '29', icon: '🍟', title: 'LINUX IN 100 SECONDS', description: 'A refresher summary of key Linux concepts' },
    { id: '30', icon: '🐳', title: 'DOCKER 101', description: 'Learn how to use Docker to build microservices' },
    { id: '31', icon: '🔪', title: 'ANSIBLE', description: 'Learn how to automatic server tasks with Ansible' },
    { id: '32', icon: '🔨', title: 'SST', description: 'Infrastructure as Code for AWS' },
    { id: '33', icon: '🎸', title: 'NEOVIM', description: 'Level up for terminal editing skills' },
    { id: '34', icon: '😎', title: 'COOLIFY', description: 'Manage multiple apps on your VPS' },
  ]

  return (
    <section id="chapters" className="py-20 bg-terminal-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Course Chapters</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            34 comprehensive chapters covering everything from Linux basics to advanced system administration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chapters.map((chapter, index) => (
            <div 
              key={chapter.id} 
              className="bg-terminal-dark rounded-lg p-6 border border-gray-700 hover:border-linux-green transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {chapter.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-linux-green font-bold text-sm">{chapter.id}</span>
                    <span className="text-linux-green font-bold text-xs uppercase tracking-wider">
                      {chapter.title}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-terminal-dark rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Course Information</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-2">🟦</div>
                <h4 className="text-linux-green font-semibold mb-2">Difficulty Level</h4>
                <p className="text-gray-300">Beginner to Intermediate</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📅</div>
                <h4 className="text-linux-green font-semibold mb-2">Last Updated</h4>
                <p className="text-gray-300">July 1st, 2024 - Ubuntu 24.04 LTS</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="text-linux-green font-semibold mb-2">Format</h4>
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
