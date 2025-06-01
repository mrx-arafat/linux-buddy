export const chapter2 = {
  id: '02',
  icon: '💿',
  title: '10 LINUX DISTROS',
  description: 'Ten awesome Linux distros explained',
  slug: '10-linux-distros',
  content: {
    overview: 'The beauty of Linux lies in its diversity. With hundreds of distributions available, each serves different needs and preferences. This chapter explores the 10 most important Linux distributions you should know about, their strengths, ideal use cases, and what makes each unique. Whether you\'re a complete beginner or looking to switch distros, this guide will help you make an informed choice.',
    sections: [
      {
        title: 'Ubuntu - The Gateway to Linux',
        content: 'Ubuntu is the most popular Linux distribution and the perfect starting point for beginners. Developed by Canonical, it focuses on ease of use, excellent hardware support, and a massive community. Ubuntu releases new versions every 6 months, with Long Term Support (LTS) versions every 2 years that receive 5 years of support. It\'s based on Debian and uses the GNOME desktop environment by default.',
        codeExample: `# Ubuntu package management with APT
sudo apt update                    # Update package lists
sudo apt upgrade                   # Upgrade installed packages
sudo apt install firefox          # Install Firefox browser
sudo apt install code            # Install VS Code
sudo apt remove package-name      # Remove a package
sudo apt autoremove              # Remove unnecessary packages

# Ubuntu version and system info
lsb_release -a                   # Ubuntu version details
hostnamectl                      # System hostname and OS info
cat /etc/os-release             # Detailed OS information

# Ubuntu-specific commands
ubuntu-drivers devices          # Check available drivers
snap list                      # List installed snap packages
snap install discord          # Install Discord via snap`
      },
      {
        title: 'Linux Mint - Windows Users\' Best Friend',
        content: 'Linux Mint is designed to be familiar and comfortable for users coming from Windows. Based on Ubuntu, it provides a more traditional desktop experience with the Cinnamon desktop environment. Mint includes multimedia codecs out of the box, making it immediately useful for playing videos and music. It\'s known for its stability, elegance, and user-friendly approach.',
        codeExample: `# Linux Mint uses the same APT package manager as Ubuntu
sudo apt update && sudo apt upgrade

# Mint-specific tools
mintupdate                      # Update Manager GUI
mintwelcome                     # Welcome screen
mintinstall                     # Software Manager
mintsources                     # Software Sources

# Multimedia support (pre-installed in Mint)
sudo apt install ubuntu-restricted-extras  # Additional codecs
sudo apt install vlc                       # VLC media player
sudo apt install gimp                      # Image editor

# Check Mint version
cat /etc/linuxmint/info
mint-info                       # Mint system information`
      },
      {
        title: 'Debian - The Universal Operating System',
        content: 'Debian is one of the oldest and most respected Linux distributions, known for its stability and commitment to free software. It\'s the foundation for many other distributions, including Ubuntu. Debian has three main branches: Stable (rock-solid but older software), Testing (newer packages), and Unstable (bleeding edge). It\'s perfect for servers and users who prioritize stability over the latest features.',
        codeExample: `# Debian package management
sudo apt update
sudo apt install package-name
sudo apt-get install package-name    # Alternative syntax

# Debian-specific commands
sudo dpkg -i package.deb             # Install .deb package
dpkg -l                              # List installed packages
dpkg -L package-name                 # List files in package

# Check Debian version
cat /etc/debian_version
lsb_release -a

# Debian repository management
sudo nano /etc/apt/sources.list     # Edit package sources
sudo apt update                     # Refresh after changes

# System maintenance
sudo apt autoremove                 # Remove orphaned packages
sudo apt autoclean                  # Clean package cache`
      },
      {
        title: 'Fedora - Cutting-Edge Innovation',
        content: 'Fedora is sponsored by Red Hat and serves as a testing ground for technologies that eventually make their way into Red Hat Enterprise Linux. It features the latest software, cutting-edge technologies, and focuses on innovation. Fedora releases new versions every 6 months and uses the DNF package manager. It\'s perfect for developers and users who want the latest features.',
        codeExample: `# Fedora package management with DNF
sudo dnf update                      # Update all packages
sudo dnf install firefox            # Install Firefox
sudo dnf install code              # Install VS Code
sudo dnf remove package-name        # Remove package
sudo dnf autoremove                # Remove orphaned packages

# Fedora-specific commands
sudo dnf grouplist                  # List package groups
sudo dnf groupinstall "Development Tools"  # Install development tools
sudo dnf history                    # View transaction history
sudo dnf history undo last          # Undo last transaction

# System information
hostnamectl                         # System info
cat /etc/fedora-release            # Fedora version
rpm -qa                            # List all installed RPM packages

# Enable additional repositories
sudo dnf install fedora-workstation-repositories
sudo dnf config-manager --enable google-chrome`
      },
      {
        title: 'Arch Linux - The DIY Distribution',
        content: 'Arch Linux follows the KISS (Keep It Simple, Stupid) principle and is designed for users who want complete control over their system. It uses a rolling release model, meaning you get the latest software as soon as it\'s available. Arch requires manual installation and configuration, making it perfect for learning how Linux works under the hood. The Arch Wiki is considered one of the best Linux documentation resources.',
        codeExample: `# Arch Linux package management with pacman
sudo pacman -Syu                    # Update system (Sync, refresh, update)
sudo pacman -S firefox             # Install Firefox
sudo pacman -S code                # Install VS Code
sudo pacman -R package-name        # Remove package
sudo pacman -Rs package-name       # Remove package and dependencies

# AUR (Arch User Repository) with yay helper
yay -S discord                     # Install Discord from AUR
yay -Syu                          # Update system including AUR packages

# System information
cat /etc/arch-release              # Arch version
uname -r                          # Kernel version
pacman -Q                         # List installed packages
pacman -Qe                        # List explicitly installed packages

# Arch-specific commands
sudo pacman -Sc                   # Clean package cache
sudo pacman -Qtdq | sudo pacman -Rs -  # Remove orphaned packages
sudo reflector --save /etc/pacman.d/mirrorlist --sort rate  # Update mirrors`
      }
    ]
  }
}
