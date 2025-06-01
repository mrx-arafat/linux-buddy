export const chapter1 = {
  id: '01',
  icon: '🐧',
  title: 'START USING LINUX',
  description: 'How to get started with Linux',
  slug: 'start-using-linux',
  content: {
    overview: 'Welcome to the exciting world of Linux! This first chapter is your launchpad. We\'ll cover the absolute fundamentals, from understanding what Linux is to getting it running and typing your very first commands. Don\'t worry if you\'re new to this – we\'ll guide you every step of the way.',
    sections: [
      {
        title: 'What is Linux?',
        content: 'At its core, Linux is an operating system kernel. The kernel is the central part of an operating system; it manages the computer\'s hardware and allows software to run. Think of it as the engine of your car. However, when people talk about "Linux," they usually refer to a Linux distribution (or "distro"). A Linux distribution takes the Linux kernel and bundles it with other software – like system utilities, desktop environments, and applications – to create a complete, usable operating system.',
        codeExample: `# Check your Linux distribution
cat /etc/os-release

# Check kernel version
uname -r

# Display system information
uname -a

# Check current user
whoami

# Show current directory
pwd`
      },
      {
        title: 'Why Use Linux?',
        content: 'People choose Linux for multiple reasons: Cost-Effective (it\'s free), Security (robust permission model), Stability & Reliability (ideal for servers), Flexibility & Customization (tailor to your needs), Learning & Development (excellent platform), Reviving Old Hardware (lightweight distributions), and Strong Community Support.',
        codeExample: `# System information commands
uptime                 # System uptime and load
free -h               # Memory usage (human readable)
df -h                 # Disk usage (human readable)
lscpu                 # CPU information
uname -a              # Complete system information`
      },
      {
        title: 'Ways to Get Started with Linux',
        content: 'There are several ways to start using Linux: Virtual Machine (safe for beginners), Dual Booting (full performance), Windows Subsystem for Linux (WSL), Live USB/CD (try without installing), and Cloud Servers (VPS for server experience).',
        codeExample: `# For Ubuntu/Debian systems - First commands after installation
sudo apt update       # Update package lists
sudo apt upgrade      # Upgrade installed packages
sudo apt autoremove   # Remove unnecessary packages

# For Fedora/RHEL systems
sudo dnf update       # Update all packages

# Basic navigation
ls                    # List files
ls -la               # Detailed list with hidden files
cd /home             # Change directory
cd ~                 # Go to home directory
cd ..                # Go up one directory`
      },
      {
        title: 'Your First Commands',
        content: 'Once you have Linux running, try these essential commands to get familiar with the system. The terminal is a powerful tool that you\'ll use frequently in Linux.',
        codeExample: `# File operations
touch newfile.txt     # Create empty file
mkdir newfolder       # Create directory
cp file1.txt file2.txt # Copy file
mv oldname.txt newname.txt # Rename/move file
rm filename.txt       # Delete file (be careful!)

# Getting help
man ls               # Manual page for 'ls' command
ls --help            # Quick help for 'ls' command
which ls             # Show location of 'ls' command

# System monitoring
ps aux               # Show running processes
top                  # Real-time process viewer
htop                 # Enhanced process viewer (if installed)`
      }
    ]
  }
}
