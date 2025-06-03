export const chapter16 = {
  id: '16',
  icon: '📦',
  title: 'PACKAGE MANAGERS',
  description: 'Installing software with package managers',
  slug: 'package-managers',
  content: {
    overview: 'Welcome to PACKAGE MANAGERS - your gateway to the Linux software universe! 📦 If you\'ve ever wondered how to install software on Linux without downloading sketchy .exe files from random websites, package managers are your answer. They\'re like app stores, but for grown-ups who use terminals. Package managers handle dependencies, security updates, and software removal with the elegance of a Swiss watch and the reliability of a German car. Whether you\'re on Ubuntu with APT, CentOS with YUM, or Arch with Pacman, understanding package managers transforms you from someone who struggles to install software into someone who can deploy entire development environments with a few commands. We\'re going to turn you into a package management wizard! 🚀',
    sections: [
      {
        title: '1. APT - The Debian/Ubuntu Powerhouse 🎯',
        content: 'APT (Advanced Package Tool) is the package manager that powers Debian, Ubuntu, and their derivatives. It\'s like having a personal software concierge who knows where to find everything, handles all the paperwork, and makes sure nothing breaks. APT manages .deb packages and automatically resolves dependencies, making software installation as easy as ordering from a menu.',
        codeExample: `# === APT BASICS ===
echo "🎯 APT - The Debian/Ubuntu Powerhouse"

# Update package lists
sudo apt update                      # "Refresh package database"
sudo apt list --upgradable          # "Show available updates"

# Install packages
sudo apt install firefox            # "Install Firefox browser"
sudo apt install vim git curl       # "Install multiple packages"
sudo apt install -y htop            # "Install without confirmation prompt"

# Remove packages
sudo apt remove firefox             # "Remove package (keep config files)"
sudo apt purge firefox              # "Remove package and config files"
sudo apt autoremove                 # "Remove orphaned dependencies"

# === APT SEARCH AND INFO ===
echo "🔍 APT Search and Information:"

# Search for packages
apt search firefox                  # "Search for Firefox packages"
apt search "web browser"            # "Search with description"
apt list firefox*                   # "List packages matching pattern"

# Get package information
apt show firefox                    # "Show detailed package info"
apt depends firefox                 # "Show package dependencies"
apt rdepends firefox                # "Show reverse dependencies"

# === APT UPGRADE SYSTEM ===
echo "⬆️ APT System Upgrades:"

# Upgrade packages
sudo apt upgrade                    # "Upgrade installed packages"
sudo apt full-upgrade               # "Upgrade with dependency changes"
sudo apt dist-upgrade               # "Distribution upgrade (older syntax)"

# Upgrade specific package
sudo apt install --only-upgrade firefox # "Upgrade only Firefox"

# === APT PACKAGE SOURCES ===
echo "📡 APT Package Sources:"

# View sources
cat /etc/apt/sources.list           # "Main sources file"
ls /etc/apt/sources.list.d/         # "Additional source files"

# Add PPA (Personal Package Archive)
sudo add-apt-repository ppa:user/repo-name
sudo apt update

# Remove PPA
sudo add-apt-repository --remove ppa:user/repo-name

# === APT CACHE MANAGEMENT ===
echo "💾 APT Cache Management:"

# Clean package cache
sudo apt clean                      # "Remove all cached packages"
sudo apt autoclean                  # "Remove outdated cached packages"

# Show cache statistics
apt-cache stats                     # "Show cache statistics"
du -sh /var/cache/apt/archives/     # "Show cache size"

# === APT ADVANCED FEATURES ===
echo "🚀 APT Advanced Features:"

# Hold packages (prevent upgrades)
sudo apt-mark hold firefox          # "Hold Firefox at current version"
sudo apt-mark unhold firefox        # "Allow Firefox upgrades again"
apt-mark showhold                   # "Show held packages"

# Download packages without installing
apt download firefox                # "Download .deb file"
sudo apt install --download-only firefox # "Download to cache"

# Simulate operations
apt list --upgradable               # "Show what would be upgraded"
sudo apt upgrade --dry-run          # "Simulate upgrade"

# === APT TROUBLESHOOTING ===
echo "🔧 APT Troubleshooting:"

# Fix broken packages
sudo apt --fix-broken install       # "Fix dependency issues"
sudo dpkg --configure -a            # "Configure unconfigured packages"

# Reconfigure packages
sudo dpkg-reconfigure package-name  # "Reconfigure package"

# Check package integrity
sudo apt check                      # "Check for broken dependencies"

# === DPKG INTEGRATION ===
echo "📦 DPKG Integration:"

# Install local .deb files
sudo dpkg -i package.deb            # "Install local .deb file"
sudo apt install -f                 # "Fix dependencies after dpkg"

# Query installed packages
dpkg -l                             # "List all installed packages"
dpkg -l | grep firefox             # "Find Firefox packages"
dpkg -s firefox                    # "Show package status"

# === THE APT CHEAT SHEET ===
echo "🎯 APT Quick Reference:"
echo "sudo apt update             = Update package lists"
echo "sudo apt install package    = Install package"
echo "sudo apt remove package     = Remove package"
echo "sudo apt upgrade            = Upgrade all packages"
echo "apt search keyword          = Search packages"
echo "apt show package            = Show package info"
echo "sudo apt autoremove         = Remove orphaned packages"`
      },
      {
        title: '2. YUM/DNF - The Red Hat Family Manager 🔴',
        content: 'YUM (Yellowdog Updater Modified) and its successor DNF (Dandified YUM) are the package managers for Red Hat, CentOS, Fedora, and related distributions. Think of YUM/DNF as the enterprise-grade package manager - robust, reliable, and designed for serious business. DNF is the modern evolution that\'s faster and more memory-efficient than YUM.',
        codeExample: `# === YUM/DNF BASICS ===
echo "🔴 YUM/DNF - The Red Hat Family Manager"

# Note: Use 'yum' on older systems, 'dnf' on newer ones
# Commands are mostly interchangeable

# Update package database
sudo yum check-update               # "Check for available updates"
sudo dnf check-update               # "DNF version"

# Install packages
sudo yum install firefox            # "Install Firefox"
sudo dnf install firefox            # "DNF version"
sudo yum install -y vim git         # "Install without confirmation"

# Remove packages
sudo yum remove firefox             # "Remove package"
sudo dnf remove firefox             # "DNF version"
sudo yum autoremove                 # "Remove orphaned dependencies"

# === YUM/DNF SEARCH AND INFO ===
echo "🔍 YUM/DNF Search and Information:"

# Search packages
yum search firefox                  # "Search for packages"
dnf search firefox                  # "DNF version"
yum list available | grep firefox   # "List available packages"

# Package information
yum info firefox                    # "Show package details"
dnf info firefox                    # "DNF version"
yum deplist firefox                 # "Show dependencies"

# === YUM/DNF SYSTEM UPDATES ===
echo "⬆️ YUM/DNF System Updates:"

# Update system
sudo yum update                     # "Update all packages"
sudo dnf update                     # "DNF version"
sudo yum upgrade                    # "Alternative update command"

# Update specific package
sudo yum update firefox             # "Update only Firefox"
sudo dnf upgrade firefox            # "DNF version"

# === YUM/DNF REPOSITORIES ===
echo "📡 YUM/DNF Repositories:"

# List repositories
yum repolist                        # "List enabled repositories"
dnf repolist                        # "DNF version"
yum repolist all                    # "List all repositories"

# Enable/disable repositories
sudo yum-config-manager --enable repo-name
sudo dnf config-manager --set-enabled repo-name

# Add repository
sudo yum-config-manager --add-repo http://example.com/repo
sudo dnf config-manager --add-repo http://example.com/repo

# === EPEL REPOSITORY ===
echo "🌟 EPEL Repository (Extra Packages):"

# Install EPEL on CentOS/RHEL
sudo yum install epel-release        # "Install EPEL repository"
sudo dnf install epel-release        # "DNF version"

# Install from EPEL
sudo yum install htop                # "Install htop from EPEL"

# === YUM/DNF GROUPS ===
echo "👥 YUM/DNF Package Groups:"

# List package groups
yum grouplist                       # "List available groups"
dnf grouplist                       # "DNF version"

# Install package group
sudo yum groupinstall "Development Tools"
sudo dnf groupinstall "Development Tools"

# Remove package group
sudo yum groupremove "Development Tools"

# === YUM/DNF HISTORY ===
echo "📚 YUM/DNF Transaction History:"

# View history
yum history                         # "Show transaction history"
dnf history                         # "DNF version"

# Undo transaction
sudo yum history undo 5             # "Undo transaction #5"
sudo dnf history undo 5             # "DNF version"

# === YUM/DNF CACHE MANAGEMENT ===
echo "💾 YUM/DNF Cache Management:"

# Clean cache
sudo yum clean all                  # "Clean all cache"
sudo dnf clean all                  # "DNF version"
sudo yum makecache                  # "Rebuild cache"

# === RPM INTEGRATION ===
echo "📦 RPM Integration:"

# Install local RPM files
sudo rpm -ivh package.rpm           # "Install RPM package"
sudo yum localinstall package.rpm   # "Install with dependency resolution"
sudo dnf localinstall package.rpm   # "DNF version"

# Query RPM packages
rpm -qa                             # "List all installed packages"
rpm -qa | grep firefox             # "Find Firefox packages"
rpm -qi firefox                    # "Show package info"

# === THE YUM/DNF CHEAT SHEET ===
echo "🔴 YUM/DNF Quick Reference:"
echo "sudo yum/dnf install package  = Install package"
echo "sudo yum/dnf remove package   = Remove package"
echo "sudo yum/dnf update           = Update all packages"
echo "yum/dnf search keyword        = Search packages"
echo "yum/dnf info package          = Show package info"
echo "yum/dnf grouplist             = List package groups"
echo "yum/dnf history               = Show transaction history"`
      },
      {
        title: '3. Pacman - The Arch Linux Speed Demon ⚡',
        content: 'Pacman is the package manager for Arch Linux and its derivatives like Manjaro. It\'s known for being incredibly fast, efficient, and having a syntax that\'s both powerful and memorable. Think of Pacman as the sports car of package managers - lean, fast, and designed for enthusiasts who want cutting-edge software. The name comes from "package manager," but the Pac-Man game references are totally intentional.',
        codeExample: `# === PACMAN BASICS ===
echo "⚡ Pacman - The Arch Linux Speed Demon"

# Update system
sudo pacman -Syu                    # "Sync, refresh, and upgrade system"
sudo pacman -Sy                     # "Sync package database only"

# Install packages
sudo pacman -S firefox              # "Install Firefox"
sudo pacman -S vim git curl         # "Install multiple packages"
sudo pacman -S --noconfirm htop     # "Install without confirmation"

# Remove packages
sudo pacman -R firefox              # "Remove package (keep dependencies)"
sudo pacman -Rs firefox             # "Remove package and unused dependencies"
sudo pacman -Rns firefox            # "Remove package, dependencies, and config files"

# === PACMAN SEARCH AND INFO ===
echo "🔍 Pacman Search and Information:"

# Search packages
pacman -Ss firefox                  # "Search for packages"
pacman -Ss "web browser"            # "Search in descriptions"
pacman -Qs firefox                  # "Search installed packages"

# Package information
pacman -Si firefox                  # "Show package info (repository)"
pacman -Qi firefox                  # "Show installed package info"
pacman -Ql firefox                  # "List files installed by package"

# === PACMAN QUERIES ===
echo "❓ Pacman Package Queries:"

# List packages
pacman -Q                           # "List all installed packages"
pacman -Qe                          # "List explicitly installed packages"
pacman -Qd                          # "List dependencies"
pacman -Qt                          # "List orphaned packages"

# Find package owning file
pacman -Qo /usr/bin/firefox         # "Which package owns this file"
pacman -F firefox                   # "Search files in packages"

# === PACMAN MAINTENANCE ===
echo "🧹 Pacman System Maintenance:"

# Clean package cache
sudo pacman -Sc                     # "Clean package cache (keep current versions)"
sudo pacman -Scc                    # "Clean all package cache"

# Remove orphaned packages
sudo pacman -Rs \\$(pacman -Qtdq)     # "Remove all orphaned packages"

# Check for broken dependencies
pacman -Dk                          # "Check dependencies"

# === AUR (ARCH USER REPOSITORY) ===
echo "🌟 AUR - Arch User Repository:"

# Install AUR helper (yay)
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si

# Use AUR helper
yay -S package-name                 # "Install from AUR"
yay -Syu                           # "Update system including AUR packages"
yay -Ss package-name               # "Search AUR and official repos"

# Manual AUR installation
git clone https://aur.archlinux.org/package-name.git
cd package-name
makepkg -si

# === PACMAN CONFIGURATION ===
echo "⚙️ Pacman Configuration:"

# Main config file
sudo nano /etc/pacman.conf

# Enable multilib (32-bit packages on 64-bit system)
echo "Uncomment [multilib] section in /etc/pacman.conf"

# Add custom repositories
echo "Add custom repo to /etc/pacman.conf:"
echo "[custom-repo]"
echo "Server = http://example.com/repo"

# === PACMAN HOOKS ===
echo "🪝 Pacman Hooks:"

# Example hook to update desktop database
cat << 'EOF' > /etc/pacman.d/hooks/update-desktop-database.hook
[Trigger]
Type = File
Operation = Install
Operation = Upgrade
Operation = Remove
Target = usr/share/applications/*.desktop

[Action]
Description = Updating desktop file MIME type cache...
When = PostTransaction
Exec = /usr/bin/update-desktop-database
EOF

# === THE PACMAN CHEAT SHEET ===
echo "⚡ Pacman Quick Reference:"
echo "sudo pacman -Syu            = Update entire system"
echo "sudo pacman -S package      = Install package"
echo "sudo pacman -Rs package     = Remove package + dependencies"
echo "pacman -Ss keyword          = Search packages"
echo "pacman -Si package          = Show package info"
echo "pacman -Q                   = List installed packages"
echo "sudo pacman -Sc             = Clean package cache"`
      },
      {
        title: '4. Alternative Package Managers - The Specialists 🛠️',
        content: 'Beyond the big three, Linux has specialized package managers for different use cases. From language-specific managers like pip and npm to universal managers like Snap and Flatpak, these tools extend your software management capabilities. Understanding these alternatives gives you access to software that might not be available in traditional repositories.',
        codeExample: `# === SNAP PACKAGES ===
echo "🛠️ Alternative Package Managers - The Specialists"

# Snap (Universal packages)
echo "📦 Snap - Universal Packages:"

# Install snapd
sudo apt install snapd              # "Ubuntu/Debian"
sudo yum install snapd              # "CentOS/RHEL"
sudo pacman -S snapd                # "Arch Linux"

# Snap commands
sudo snap install firefox          # "Install Firefox snap"
sudo snap install code --classic   # "Install with classic confinement"
snap list                          # "List installed snaps"
sudo snap remove firefox           # "Remove snap"
sudo snap refresh                  # "Update all snaps"

# === FLATPAK PACKAGES ===
echo "📱 Flatpak - Sandboxed Applications:"

# Install Flatpak
sudo apt install flatpak           # "Ubuntu/Debian"
sudo yum install flatpak            # "CentOS/RHEL"
sudo pacman -S flatpak              # "Arch Linux"

# Add Flathub repository
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Flatpak commands
flatpak install flathub org.mozilla.firefox # "Install Firefox"
flatpak list                        # "List installed applications"
flatpak run org.mozilla.firefox     # "Run application"
flatpak uninstall org.mozilla.firefox # "Remove application"
flatpak update                      # "Update all applications"

# === APPIMAGE ===
echo "💿 AppImage - Portable Applications:"

# Download and run AppImage
wget https://example.com/app.AppImage
chmod +x app.AppImage
./app.AppImage

# Integrate with system
sudo apt install appimaged          # "AppImage daemon"

# === LANGUAGE-SPECIFIC MANAGERS ===
echo "🐍 Language-Specific Package Managers:"

# Python - pip
pip install package-name            # "Install Python package"
pip install --user package-name     # "Install for current user"
pip list                           # "List installed packages"
pip uninstall package-name         # "Remove package"
pip freeze > requirements.txt      # "Export package list"
pip install -r requirements.txt    # "Install from requirements"

# Node.js - npm
npm install package-name            # "Install Node.js package"
npm install -g package-name         # "Install globally"
npm list                           # "List installed packages"
npm uninstall package-name         # "Remove package"
npm update                         # "Update packages"

# Ruby - gem
gem install package-name            # "Install Ruby gem"
gem list                           # "List installed gems"
gem uninstall package-name         # "Remove gem"

# === CONTAINER-BASED MANAGERS ===
echo "🐳 Container-Based Package Managers:"

# Docker
docker run -it ubuntu bash         # "Run Ubuntu container"
docker pull nginx                  # "Download nginx image"
docker images                      # "List downloaded images"
docker ps                          # "List running containers"

# Podman (Docker alternative)
podman run -it ubuntu bash         # "Run Ubuntu container"
podman pull nginx                  # "Download nginx image"

# === HOMEBREW ON LINUX ===
echo "🍺 Homebrew - The macOS Manager on Linux:"

# Install Homebrew
/bin/bash -c "\\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Homebrew commands
brew install package-name          # "Install package"
brew list                          # "List installed packages"
brew uninstall package-name        # "Remove package"
brew update                        # "Update Homebrew"
brew upgrade                       # "Upgrade packages"

# === NIX PACKAGE MANAGER ===
echo "❄️ Nix - Functional Package Manager:"

# Install Nix
curl -L https://nixos.org/nix/install | sh

# Nix commands
nix-env -i package-name            # "Install package"
nix-env -q                         # "List installed packages"
nix-env -e package-name            # "Remove package"
nix-env -u                         # "Upgrade packages"

# === PACKAGE MANAGER COMPARISON ===
echo "📊 Package Manager Comparison:"
echo ""
echo "Traditional Package Managers:"
echo "APT (Debian/Ubuntu)    = Stable, well-tested packages"
echo "YUM/DNF (Red Hat)      = Enterprise-focused, robust"
echo "Pacman (Arch)          = Cutting-edge, fast updates"
echo ""
echo "Universal Package Managers:"
echo "Snap                   = Ubuntu-backed, auto-updating"
echo "Flatpak                = Sandboxed, desktop-focused"
echo "AppImage               = Portable, no installation needed"
echo ""
echo "Language-Specific:"
echo "pip (Python)           = Python packages and libraries"
echo "npm (Node.js)          = JavaScript packages"
echo "gem (Ruby)             = Ruby libraries"
echo ""
echo "Alternative Approaches:"
echo "Docker/Podman          = Containerized applications"
echo "Homebrew               = macOS-style package management"
echo "Nix                    = Functional, reproducible builds"

# === CHOOSING THE RIGHT MANAGER ===
echo "🎯 Choosing the Right Package Manager:"
echo ""
echo "Use system package manager (APT/YUM/Pacman) for:"
echo "• System libraries and core software"
echo "• Development tools and compilers"
echo "• Server software and daemons"
echo ""
echo "Use Snap/Flatpak for:"
echo "• Desktop applications"
echo "• Software not in official repos"
echo "• Applications needing sandboxing"
echo ""
echo "Use language-specific managers for:"
echo "• Development libraries"
echo "• Programming language tools"
echo "• Project dependencies"
echo ""
echo "Use containers for:"
echo "• Isolated applications"
echo "• Development environments"
echo "• Microservices"

# === THE SPECIALISTS CHEAT SHEET ===
echo "🛠️ Alternative Managers Quick Reference:"
echo "sudo snap install app           = Install snap package"
echo "flatpak install flathub app     = Install flatpak"
echo "pip install package             = Install Python package"
echo "npm install -g package          = Install Node.js package globally"
echo "docker run -it image bash       = Run container interactively"
echo "brew install package            = Install with Homebrew"`
      },
      {
        title: '5. Package Management Mastery - Professional Techniques 🎓',
        content: 'Package management mastery goes beyond installing and removing software. It involves understanding dependency resolution, creating custom repositories, automating deployments, and managing software across multiple systems. This is where you become a package management professional who can design and maintain complex software environments.',
        codeExample: `# === ADVANCED PACKAGE MANAGEMENT ===
echo "🎓 Package Management Mastery - Professional Techniques"

# === DEPENDENCY MANAGEMENT ===
echo "🔗 Advanced Dependency Management:"

# APT dependency analysis
apt-cache depends --recurse --no-recommends firefox | grep "^\\\\w"
apt-cache rdepends firefox          # "What depends on Firefox"
apt-cache policy firefox            # "Show available versions"

# YUM/DNF dependency trees
yum deplist firefox                 # "Show dependencies"
dnf repoquery --requires firefox    # "Show requirements"
dnf repoquery --whatrequires firefox # "What requires Firefox"

# Pacman dependency queries
pactree firefox                     # "Show dependency tree"
pactree -r firefox                  # "Show reverse dependencies"

# === PACKAGE PINNING AND HOLDS ===
echo "📌 Package Pinning and Version Control:"

# APT package pinning
cat << 'EOF' > /etc/apt/preferences.d/firefox-pin
Package: firefox
Pin: version 95.*
Pin-Priority: 1001
EOF

# Hold packages
sudo apt-mark hold firefox          # "Prevent Firefox updates"
sudo yum versionlock firefox        # "YUM version lock"
sudo pacman -D --asdeps firefox     # "Mark as dependency"

# === CUSTOM REPOSITORIES ===
echo "🏗️ Creating Custom Repositories:"

# Create APT repository
mkdir -p /var/www/html/repo/binary
cd /var/www/html/repo
dpkg-scanpackages binary /dev/null | gzip -9c > binary/Packages.gz

# Add to sources.list
echo "deb http://yourserver.com/repo binary/" >> /etc/apt/sources.list

# Create YUM repository
createrepo /path/to/rpm/directory
yum-config-manager --add-repo http://yourserver.com/repo

# === AUTOMATED PACKAGE MANAGEMENT ===
echo "🤖 Automated Package Management:"

# Unattended upgrades (Ubuntu/Debian)
sudo apt install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades

# Configure automatic updates
cat << 'EOF' > /etc/apt/apt.conf.d/50unattended-upgrades
Unattended-Upgrade::Allowed-Origins {
    "\\$\\{distro_id\\}:\\$\\{distro_codename\\}-security";
    "\\$\\{distro_id\\}ESMApps:\\$\\{distro_codename\\}-apps-security";
};
EOF

# YUM automatic updates
sudo yum install yum-cron
sudo systemctl enable yum-cron

# === PACKAGE BUILDING ===
echo "🔨 Building Custom Packages:"

# Build DEB package
mkdir -p mypackage/DEBIAN
cat << 'EOF' > mypackage/DEBIAN/control
Package: mypackage
Version: 1.0
Section: utils
Priority: optional
Architecture: all
Maintainer: Your Name <email@example.com>
Description: My custom package
EOF

dpkg-deb --build mypackage

# Build RPM package
cat << 'EOF' > mypackage.spec
Name: mypackage
Version: 1.0
Release: 1
Summary: My custom package
License: GPL
BuildArch: noarch

%description
My custom package description

%files
/usr/bin/myapp

%changelog
* Mon Jan 01 2024 Your Name <email@example.com> - 1.0-1
- Initial package
EOF

rpmbuild -ba mypackage.spec

# === PACKAGE SECURITY ===
echo "🔒 Package Security Management:"

# Verify package signatures
apt-key list                        # "List APT keys"
rpm --checksig package.rpm          # "Verify RPM signature"
pacman-key --list-keys              # "List Pacman keys"

# Security updates only
sudo apt upgrade -s | grep -i security # "Show security updates"
sudo yum --security update           # "Install security updates only"

# === MULTI-SYSTEM MANAGEMENT ===
echo "🌐 Multi-System Package Management:"

# Ansible package management
cat << 'EOF' > install-packages.yml
---
- hosts: all
  become: yes
  tasks:
    - name: Install packages on Debian/Ubuntu
      apt:
        name: "{{ item }}"
        state: present
      loop:
        - vim
        - git
        - curl
      when: ansible_os_family == "Debian"

    - name: Install packages on Red Hat/CentOS
      yum:
        name: "{{ item }}"
        state: present
      loop:
        - vim
        - git
        - curl
      when: ansible_os_family == "RedHat"
EOF

# Run with: ansible-playbook install-packages.yml

# === PACKAGE INVENTORY MANAGEMENT ===
echo "📊 Package Inventory and Auditing:"

# Generate package inventory
generate_package_inventory() {
    local output_file="package_inventory_\\$(date +%Y%m%d).txt"

    {
        echo "Package Inventory - \\$(date)"
        echo "System: \\$(uname -a)"
        echo "=================================="
        echo ""

        if command -v apt >/dev/null; then
            echo "APT Packages:"
            dpkg -l | awk '/^ii/ {print \\$2, \\$3}' | sort
        elif command -v yum >/dev/null; then
            echo "YUM/RPM Packages:"
            rpm -qa --queryformat '%{NAME} %{VERSION}-%{RELEASE}\\n' | sort
        elif command -v pacman >/dev/null; then
            echo "Pacman Packages:"
            pacman -Q | sort
        fi
    } > "\\$output_file"

    echo "Inventory saved to: \\$output_file"
}

# Compare package inventories
compare_package_inventories() {
    local file1="\\$1"
    local file2="\\$2"

    echo "Package differences between \\$file1 and \\$file2:"
    diff "\\$file1" "\\$file2" | grep "^[<>]" | sort
}

# === PERFORMANCE OPTIMIZATION ===
echo "⚡ Package Manager Performance Optimization:"

# APT optimizations
echo 'APT::Acquire::http::Dl-Limit "1000";' > /etc/apt/apt.conf.d/99download-limit
echo 'APT::Cache-Start 32000000;' >> /etc/apt/apt.conf.d/99cache-size

# YUM optimizations
echo "fastestmirror=1" >> /etc/yum.conf
echo "deltarpm=1" >> /etc/yum.conf

# Pacman optimizations
sed -i 's/#ParallelDownloads = 5/ParallelDownloads = 10/' /etc/pacman.conf

# === DISASTER RECOVERY ===
echo "🚨 Package Management Disaster Recovery:"

# Backup package selections
backup_package_selections() {
    if command -v apt >/dev/null; then
        dpkg --get-selections > package-selections-backup.txt
        apt-mark showauto > auto-packages-backup.txt
    elif command -v yum >/dev/null; then
        rpm -qa > rpm-packages-backup.txt
    elif command -v pacman >/dev/null; then
        pacman -Qqe > explicit-packages-backup.txt
        pacman -Qqd > dependency-packages-backup.txt
    fi
}

# Restore package selections
restore_package_selections() {
    if [ -f package-selections-backup.txt ]; then
        sudo dpkg --set-selections < package-selections-backup.txt
        sudo apt-get dselect-upgrade
        sudo apt-mark auto \\$(cat auto-packages-backup.txt)
    elif [ -f rpm-packages-backup.txt ]; then
        sudo yum install \\$(cat rpm-packages-backup.txt)
    elif [ -f explicit-packages-backup.txt ]; then
        sudo pacman -S --needed \\$(cat explicit-packages-backup.txt)
    fi
}

# === THE MASTERY TOOLKIT ===
echo "🎓 Package Management Mastery Toolkit:"
echo "======================================="
echo "generate_package_inventory     = Create system package inventory"
echo "compare_package_inventories    = Compare two inventories"
echo "backup_package_selections      = Backup installed packages"
echo "restore_package_selections     = Restore package selections"

# === CONGRATULATIONS! ===
echo "🎓 PACKAGE MANAGERS MASTERY COMPLETE!"
echo "======================================"
echo "You now understand:"
echo "✅ APT mastery for Debian/Ubuntu systems"
echo "✅ YUM/DNF expertise for Red Hat family"
echo "✅ Pacman proficiency for Arch Linux"
echo "✅ Alternative package managers and their use cases"
echo "✅ Professional package management techniques"
echo "✅ Dependency management and version control"
echo "✅ Custom repository creation and maintenance"
echo "✅ Automated deployment and security practices"
echo ""
echo "📦 You are now a PACKAGE MANAGEMENT WIZARD!"
echo "Install, manage, and deploy software like a professional! 🚀"
echo ""
echo "Remember: Good package management is the foundation of stable systems!"
echo "Use your powers to build reliable, maintainable environments! 💪"`
      }
    ]
  }
}