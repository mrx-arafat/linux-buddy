export const chapter2 = {
  id: '02',
  icon: '💿',
  title: '10 LINUX DISTROS',
  description: 'Ten awesome Linux distros explained',
  slug: '10-linux-distros',
  content: {
    overview: 'Welcome to the Linux distribution thunderdome! 🥊 Think of Linux distros like different flavors of ice cream - they\'re all ice cream, but some are vanilla (boring but reliable), others are rocky road (chaotic but exciting), and some are that weird experimental flavor that only food scientists understand. With over 600 active distributions out there, choosing one can feel like picking a Netflix show - overwhelming and somehow you always end up with the same thing. But don\'t worry! We\'re about to break down the 10 most important distros that actually matter, why they exist, who uses them, and most importantly - which one won\'t make you want to throw your computer out the window. Spoiler alert: they\'re all better than Windows Vista.',
    sections: [
      {
        title: 'Ubuntu - The "Just Works" Champion 🏆',
        content: 'Meet Ubuntu - the golden retriever of Linux distributions. It\'s friendly, reliable, and your grandmother could probably use it. Created by Canonical (a company that somehow makes money from free software - capitalism is weird), Ubuntu is basically Linux with training wheels, but in a good way. It\'s like that friend who always has their life together - stable job, nice apartment, remembers your birthday. Ubuntu releases new versions every 6 months with animal names that sound like rejected Pokémon (Jammy Jellyfish, anyone?), but the real MVPs are the LTS (Long Term Support) versions that get 5 years of updates. Perfect for people who want Linux to work without reading 47 wiki pages first. Fun fact: Ubuntu means "humanity towards others" in African philosophy, which is ironic because Linux users are known for their... *checks notes*... gentle and patient nature towards beginners. 😅',
        codeExample: `# Ubuntu\'s APT package manager - like npm but for your entire OS
sudo apt update                    # "Hey internet, what\'s new?"
sudo apt upgrade                   # "Give me all the shiny updates"
sudo apt install firefox          # Install Firefox (because Chrome is watching you)
sudo apt install code            # VS Code - Microsoft\'s gift to developers
sudo apt install neofetch        # Show off your system specs in style
sudo apt remove bloatware        # Goodbye, software I never asked for
sudo apt autoremove              # Clean up the digital mess
sudo apt autoclean               # Marie Kondo your package cache

# Ubuntu system reconnaissance
lsb_release -a                   # "What Ubuntu am I running again?"
hostnamectl                      # System identity crisis resolver
cat /etc/os-release             # The full system biography
uname -a                        # Kernel info dump

# Ubuntu\'s special sauce
ubuntu-drivers devices          # "What drivers do I need?"
ubuntu-drivers autoinstall     # "Just fix my graphics, please"
snap list                      # List your snap packages (Ubuntu\'s app store)
snap install discord          # Install Discord via snap
snap install code --classic   # VS Code the snap way
snap refresh                   # Update all snaps (like npm update but scarier)

# Ubuntu pro tips for the initiated
sudo do-release-upgrade        # Upgrade to next Ubuntu version (YOLO mode)
ubuntu-bug package-name       # Report bugs like a responsible citizen
ubuntu-support-status         # Check which packages are officially supported
landscape-sysinfo             # System info that makes you look professional

# The Ubuntu way of life
sudo apt install ubuntu-restricted-extras  # Codecs for all your "legally obtained" media
sudo apt install curl wget git vim tree htop  # Essential developer toolkit
sudo snap install --classic code discord slack  # The holy trinity of productivity

# Ubuntu debugging when things go sideways
sudo apt --fix-broken install  # "Please just work"
sudo dpkg --configure -a      # Fix package configuration issues
sudo apt-get clean            # Nuclear option for package cache
journalctl -xe                # Read the system\'s diary of complaints`
      },
      {
        title: 'Linux Mint - The Windows Refugee\'s Paradise 🏝️',
        content: 'Linux Mint is what happens when someone says "I want Linux, but I also want my mom to be able to use it." It\'s Ubuntu\'s cooler, more laid-back cousin who went to art school and actually has good taste in UI design. Created by Clement Lefebvre (a French developer who clearly understands that green is the superior color), Mint takes Ubuntu and makes it look like Windows had a baby with macOS - but in a good way, not in a "what have we done" way. The Cinnamon desktop environment is so intuitive that Windows users feel right at home, except everything actually works and doesn\'t randomly update at 3 AM. Mint comes with multimedia codecs pre-installed because the developers understand that people want to watch cat videos without compiling FFmpeg from source. It\'s the distro equivalent of a Swiss Army knife - practical, reliable, and your dad would approve.',
        codeExample: `# Mint inherits Ubuntu\'s APT powers but with style
sudo apt update && sudo apt upgrade    # The classic combo, now with mint flavor

# Mint\'s exclusive toolkit - like Ubuntu but with personality
mintupdate                      # Update Manager that doesn\'t look like it\'s from 2003
mintwelcome                     # Welcome screen that\'s actually welcoming
mintinstall                     # Software Manager for the GUI-loving masses
mintsources                     # Software Sources manager (repositories made easy)
mintdrivers                     # Driver Manager that just works
mintreport                      # System reports for the paranoid (all of us)

# Multimedia paradise - no codec hunting required
sudo apt install ubuntu-restricted-extras  # The forbidden codecs
sudo apt install vlc                       # VLC - plays literally everything
sudo apt install gimp                      # GIMP - Photoshop\'s free cousin
sudo apt install audacity                  # Audio editing for your podcast dreams
sudo apt install handbrake                 # Video conversion magic

# Mint system intelligence gathering
cat /etc/linuxmint/info         # "What Mint am I running?"
mint-info                       # Mint-specific system info
inxi -Fxz                      # System info that makes you look like a hacker
neofetch                       # Show off your Mint setup

# Mint\'s secret weapons
cinnamon --replace &           # Restart Cinnamon without logging out
nemo                          # File manager that doesn\'t suck
xed                           # Text editor for humans
pix                           # Image viewer that loads faster than your patience runs out

# Mint maintenance made easy
sudo apt install timeshift    # System snapshots (time travel for your OS)
timeshift --create           # Create a restore point before you break things
sudo apt install bleachbit   # System cleaner (digital Marie Kondo)
sudo apt autoremove && sudo apt autoclean  # Spring cleaning

# Mint customization for the aesthetically inclined
sudo apt install adapta-gtk-theme          # Make it pretty
sudo apt install papirus-icon-theme        # Icons that don\'t hurt your eyes
gsettings set org.cinnamon.theme name "Adapta-Nokto"  # Dark mode everything

# Mint troubleshooting (for when things go sideways)
cinnamon-settings              # Control panel that makes sense
sudo systemctl restart lightdm  # Restart display manager
dconf reset -f /org/cinnamon/  # Nuclear option for Cinnamon settings`
      },
      {
        title: 'Debian - The Wise Elder of Linux 🧙‍♂️',
        content: 'Debian is the Gandalf of Linux distributions - ancient, wise, and surprisingly powerful when you need it most. Created in 1993 by Ian Murdock (Debian = Deb + Ian, mind blown 🤯), it\'s older than JavaScript, which explains why it actually works reliably. Debian is like that one friend who still uses a Nokia 3310 - not because they can\'t afford a smartphone, but because "it just works and the battery lasts forever." With three branches (Stable, Testing, Unstable), Debian lets you choose your own adventure: boring but bulletproof, slightly spicy, or "I like to live dangerously." It\'s the foundation for Ubuntu, Mint, and about 120 other distros, making it the Linux equivalent of a family patriarch. Debian developers are so committed to free software that they\'d probably refuse a free pizza if it came with proprietary toppings.',
        codeExample: `# Debian\'s APT - the OG package manager that started it all
sudo apt update                     # Check for updates (the Debian way)
sudo apt upgrade                    # Upgrade packages (stable as a rock)
sudo apt install package-name      # Install software (no drama, just works)
sudo apt-get install package-name  # Old school syntax (for the purists)

# Debian\'s .deb package wizardry
sudo dpkg -i package.deb           # Install .deb package manually
dpkg -l                            # List all installed packages (prepare for scroll)
dpkg -L package-name               # "What files did this package install?"
dpkg -S /path/to/file             # "Which package owns this file?"
sudo dpkg --configure -a          # Fix broken package configurations

# Debian system archaeology
cat /etc/debian_version            # Debian version (probably older than you think)
lsb_release -a                     # Full system info
cat /etc/os-release               # The complete biography
hostnamectl                       # Modern system info

# Repository management (for the brave)
sudo nano /etc/apt/sources.list   # Edit the sacred sources file
sudo apt update                   # Refresh after making changes
apt-cache search keyword          # Search for packages
apt-cache show package-name       # Get package details
apt-cache policy package-name     # Check package versions and sources

# Debian maintenance rituals
sudo apt autoremove               # Remove orphaned packages
sudo apt autoclean                # Clean package cache
sudo apt full-upgrade             # Nuclear upgrade option
sudo apt-get dist-upgrade         # Old school full upgrade

# Debian debugging and troubleshooting
sudo apt --fix-broken install     # "Please just work"
sudo dpkg --audit                 # Check for package problems
apt-mark showhold                 # Show held packages
sudo apt-mark unhold package-name # Unhold a package

# Debian\'s secret weapons
sudo aptitude                     # Alternative package manager with superpowers
sudo apt-file search filename     # Find which package contains a file
sudo deborphan                    # Find orphaned packages
sudo localepurge                  # Remove unnecessary locale files

# Debian branch switching (for the adventurous)
# Edit /etc/apt/sources.list and replace:
# "stable" with "testing" or "unstable" (at your own risk)
sudo sed -i \'s/stable/testing/g\' /etc/apt/sources.list
sudo apt update && sudo apt full-upgrade  # Welcome to the danger zone

# Debian system hardening
sudo apt install unattended-upgrades  # Automatic security updates
sudo dpkg-reconfigure unattended-upgrades  # Configure auto-updates
sudo apt install fail2ban            # Protect against brute force attacks`
      },
      {
        title: 'Fedora - The Bleeding Edge Playground 🚀',
        content: 'Fedora is what happens when Red Hat engineers get bored and decide to experiment with the latest and greatest tech. It\'s like a beta test for the entire Linux ecosystem, except the beta testers are willing volunteers who enjoy living on the edge. Sponsored by Red Hat (IBM\'s expensive acquisition), Fedora is where new technologies go to prove they\'re worthy of enterprise use. Think of it as the R&D department of Linux - they get all the cool toys first, but sometimes those toys explode. With 6-month release cycles, Fedora moves faster than JavaScript frameworks, which is both exciting and terrifying. It\'s perfect for developers who want to use tomorrow\'s technology today, and don\'t mind occasionally sacrificing stability for the latest shiny features. Warning: May cause addiction to cutting-edge software.',
        codeExample: `# DNF - Fedora\'s package manager that doesn\'t suck
sudo dnf update                      # Update everything (prepare for downloads)
sudo dnf upgrade                     # Same as update but sounds more important
sudo dnf install firefox            # Install Firefox (the good browser)
sudo dnf install code              # VS Code for the coding masses
sudo dnf remove bloatware           # Goodbye, unwanted software
sudo dnf autoremove                # Clean up the digital debris

# Fedora\'s group therapy sessions (package groups)
sudo dnf grouplist                  # See all available groups
sudo dnf groupinstall "Development Tools"  # Everything a developer needs
sudo dnf groupinstall "Design Suite"       # For the creative souls
sudo dnf groupinstall "Gaming"            # Because work is overrated

# DNF time machine
sudo dnf history                    # View your package management history
sudo dnf history info 5            # Details about transaction #5
sudo dnf history undo last         # "I immediately regret this decision"
sudo dnf history redo last         # "Actually, let\'s try that again"

# Fedora system intelligence
hostnamectl                         # Modern system info
cat /etc/fedora-release            # Fedora version info
rpm -qa                            # List all RPM packages (scroll for days)
rpm -qi package-name               # Get package info
rpm -ql package-name               # List files in package

# Repository management for power users
sudo dnf repolist                  # List enabled repositories
sudo dnf config-manager --add-repo URL  # Add new repository
sudo dnf config-manager --enable repo-name  # Enable repository
sudo dnf install fedora-workstation-repositories  # Enable extra repos

# Fedora\'s secret weapons
sudo dnf install rpmfusion-free-release rpmfusion-nonfree-release  # Unlock forbidden software
sudo dnf install dnf-automatic     # Automatic updates (for the lazy)
sudo dnf copr enable user/project  # Community repositories (use at own risk)
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Fedora debugging and maintenance
sudo dnf check                     # Check for package problems
sudo dnf clean all                 # Nuclear option for cache cleaning
sudo dnf distro-sync               # Sync with repositories (the nuclear option)
sudo dnf system-upgrade download --releasever=38  # Upgrade to Fedora 38

# Fedora performance tuning
sudo dnf install tuned             # Performance tuning daemon
sudo tuned-adm active              # Check active profile
sudo tuned-adm list                # List available profiles
sudo tuned-adm profile desktop     # Optimize for desktop use`
      },
      {
        title: 'Arch Linux - The "I Use Arch BTW" Distribution 😎',
        content: 'Ah, Arch Linux - the CrossFit of operating systems. You\'ll know someone uses Arch because they\'ll tell you within the first 5 minutes of meeting them. Created by Judd Vinet in 2002, Arch follows the KISS principle (Keep It Simple, Stupid), which ironically makes it one of the most complex distros for beginners. It\'s a rolling release, meaning you get updates constantly - like a subscription service, but for anxiety. Arch users are the vegans of the Linux world: technically correct about everything, slightly annoying, but secretly you respect their dedication. The installation process is a rite of passage that involves reading the legendary Arch Wiki (the best documentation in the Linux universe) and questioning your life choices. But once you survive the installation, you\'ll have a system that\'s exactly what you want and nothing more. Plus, you get to say "I use Arch BTW" for the rest of your life.',
        codeExample: `# Pacman - Arch\'s package manager (not the yellow dot-eater)
sudo pacman -Syu                    # Update everything (the Arch way)
sudo pacman -S package-name         # Install package
sudo pacman -R package-name         # Remove package
sudo pacman -Rs package-name        # Remove package and dependencies (scorched earth)
sudo pacman -Rns package-name       # Remove package, deps, and config files (nuclear)

# Pacman query operations
pacman -Q                          # List installed packages
pacman -Qe                         # List explicitly installed packages
pacman -Qm                         # List foreign packages (AUR packages)
pacman -Qdt                        # List orphaned packages
pacman -Qs search-term             # Search installed packages

# Pacman search and info
pacman -Ss search-term             # Search repositories
pacman -Si package-name            # Get package info
pacman -Fl package-name            # List files in package

# AUR - The Wild West of Arch packages
# First, install an AUR helper (yay is popular)
git clone https://aur.archlinux.org/yay.git
cd yay && makepkg -si

# Now you can use yay for AUR packages
yay -S discord                     # Install Discord from AUR
yay -S visual-studio-code-bin      # VS Code from AUR
yay -Syu                          # Update system + AUR packages
yay -Yc                           # Clean unneeded dependencies

# Arch system information
cat /etc/arch-release              # Arch version (spoiler: it\'s rolling)
uname -r                          # Kernel version
pacman -Q linux                   # Kernel package version
neofetch                          # Show off your Arch setup

# Arch maintenance (because rolling release needs love)
sudo pacman -Sc                   # Clean package cache
sudo pacman -Scc                  # Nuclear cache cleaning
sudo pacman -Qtdq | sudo pacman -Rs -  # Remove orphaned packages
paccache -r                       # Keep only 3 most recent package versions

# Arch troubleshooting (when things break)
sudo pacman -Syyu                 # Force refresh and update
sudo pacman -S --overwrite "*" package-name  # Force overwrite files
sudo pacman-db-upgrade            # Upgrade pacman database
sudo pacman-key --refresh-keys    # Refresh package signing keys

# Arch power user tools
sudo reflector --save /etc/pacman.d/mirrorlist --sort rate  # Update mirrors
sudo systemctl enable reflector.timer  # Auto-update mirrors
pkgfile -u                        # Update file database
pkgfile command-name              # Find which package provides a command

# The Arch way of life
echo "I use Arch BTW" >> ~/.bashrc  # Let everyone know
alias please=\'sudo\'               # Because politeness matters
alias yeet=\'sudo pacman -Rns\'      # Modern package removal`
      },
      {
        title: 'openSUSE - The Chameleon That Actually Changes Colors 🦎',
        content: 'openSUSE is like that friend who has two completely different personalities depending on the situation. There\'s openSUSE Leap (the responsible one with a stable job) and openSUSE Tumbleweed (the adventurous one who backpacks through Europe). Created by SUSE (originally from Germany, where they take engineering seriously), openSUSE is famous for YaST - a control panel so comprehensive it makes Windows Control Panel look like a toy. It\'s the Swiss Army knife of Linux distros, with tools for everything and a green gecko mascot that\'s somehow both professional and adorable. openSUSE users are the engineers of the Linux world - they appreciate good tools, solid documentation, and systems that just work. Plus, they get to use Zypper, which sounds like a cool DJ name but is actually a package manager.',
        codeExample: `# Zypper - openSUSE\'s package manager with German precision
sudo zypper refresh                # Refresh repositories (the openSUSE way)
sudo zypper update                 # Update packages (methodically)
sudo zypper install firefox       # Install Firefox
sudo zypper remove package-name   # Remove package (efficiently)
sudo zypper dup                   # Distribution upgrade (the nuclear option)

# Zypper search and info operations
zypper search firefox             # Search for packages
zypper info firefox               # Get detailed package information
zypper what-provides /bin/ls      # Find which package provides a file

# Repository management
sudo zypper lr                    # List repositories
sudo zypper ar URL alias          # Add repository
sudo zypper rr alias              # Remove repository
sudo zypper mr -e alias           # Enable repository

# openSUSE\'s crown jewel - YaST
sudo yast                         # Launch YaST control center
sudo yast software                # Software management
sudo yast network                 # Network configuration
sudo yast users                   # User management
sudo yast bootloader              # Bootloader configuration

# Pattern installation (openSUSE\'s package groups)
sudo zypper install -t pattern devel_basis  # Development tools
sudo zypper install -t pattern games        # Games pattern
sudo zypper install -t pattern multimedia  # Multimedia support
zypper search -t pattern                    # List all patterns

# openSUSE system information
cat /etc/os-release               # System information
zypper --version                  # Zypper version
rpm -qa                          # List installed packages

# Snapshot management with Snapper (time travel for your OS)
sudo snapper list                 # List snapshots
sudo snapper create -d "Before update"  # Create snapshot
sudo snapper delete 5             # Delete snapshot #5
sudo snapper rollback 3           # Rollback to snapshot #3

# openSUSE Build Service (OBS) - community packages
sudo zypper ar https://download.opensuse.org/repositories/... # Add OBS repo
sudo zypper refresh               # Refresh after adding repo

# openSUSE maintenance and troubleshooting
sudo zypper verify                # Verify package integrity
sudo zypper clean                 # Clean package cache
sudo rpm --rebuilddb              # Rebuild RPM database
sudo zypper ps                    # Show processes using deleted files`
      },
      {
        title: 'Manjaro - Arch Linux for Humans 🏄‍♂️',
        content: 'Manjaro is what happens when someone takes Arch Linux and asks "What if we made this actually usable?" It\'s like Arch went to therapy, learned some social skills, and decided to be nice to beginners. Created by Philip Müller and Roland Singer, Manjaro takes the power of Arch and wraps it in a user-friendly package with automatic hardware detection, pre-installed drivers, and a GUI installer that doesn\'t require a computer science degree. It\'s the cool older sibling who helps you with your homework instead of making fun of you. Manjaro users get to enjoy the AUR (Arch User Repository) without the trauma of manual Arch installation. It\'s perfect for people who want to say "I basically use Arch" without the commitment issues.',
        codeExample: `# Manjaro uses Pacman (because it\'s still Arch at heart)
sudo pacman -Syu                  # Update system (the Manjaro way)
sudo pacman -S package-name       # Install package

# Pamac - Manjaro\'s friendly package manager
pamac update                      # Update system (GUI-friendly)
pamac install package-name       # Install package
pamac remove package-name        # Remove package
pamac search keyword             # Search for packages
pamac list -i                    # List installed packages

# Manjaro Hardware Detection (the magic sauce)
mhwd                             # Manjaro Hardware Detection
mhwd -l                          # List available drivers
mhwd -li                         # List installed drivers
sudo mhwd -i pci video-nvidia    # Install NVIDIA drivers
sudo mhwd -r pci video-nvidia    # Remove NVIDIA drivers

# Manjaro system tools
manjaro-settings-manager         # Manjaro settings
manjaro-hello                    # Welcome application
inxi -Fxz                       # Detailed system information

# Kernel management (because choice is good)
mhwd-kernel -l                   # List available kernels
sudo mhwd-kernel -i linux515     # Install kernel 5.15
sudo mhwd-kernel -r linux54      # Remove kernel 5.4
mhwd-kernel -li                  # List installed kernels

# AUR support (the best part of Arch)
pamac build aur-package-name     # Install from AUR
yay -S aur-package-name         # Alternative AUR helper
yay -Syu                        # Update system + AUR packages

# Manjaro branch management
sudo pacman-mirrors -f 5         # Update mirrors (fastest 5)
sudo pacman-mirrors -c Germany   # Use German mirrors
sudo pacman-mirrors --geoip      # Auto-select by location

# Manjaro troubleshooting
sudo pacman -Syyu               # Force refresh and update
sudo mhwd-kernel -i linux-lts  # Install LTS kernel (when things break)
timeshift --create              # Create system snapshot
sudo systemctl enable timeshift # Enable automatic snapshots`
      },
      {
        title: 'Elementary OS - macOS for Linux Lovers 🍎',
        content: 'Elementary OS is what happens when designers take over a Linux project and actually know what they\'re doing. It\'s the most beautiful Linux distro, period. Created by Daniel Foré and Cassidy James, Elementary OS looks like macOS and Windows had a baby, and that baby grew up to be a supermodel. Based on Ubuntu LTS, it\'s stable but gorgeous, with the Pantheon desktop environment that\'s so polished you\'ll forget you\'re using Linux. Elementary OS users are the designers and creatives of the Linux world - they care about aesthetics, user experience, and having a system that looks good in coffee shop photos. The developers even have a "pay what you want" model because they believe good design deserves compensation. It\'s Linux for people who think technology should be beautiful, not just functional.',
        codeExample: `# Elementary OS uses APT (because it\'s Ubuntu-based)
sudo apt update && sudo apt upgrade    # Keep the beauty updated

# Elementary\'s exclusive app ecosystem
io.elementary.appcenter         # AppCenter - the beautiful software store
io.elementary.files            # Files - file manager that doesn\'t hurt your eyes
io.elementary.terminal         # Terminal - even the terminal is pretty
io.elementary.code             # Code - text editor for the design-conscious
io.elementary.music            # Music - because iTunes is dead
io.elementary.photos           # Photos - organize your aesthetic shots

# Elementary system information
cat /etc/os-release            # OS information
lsb_release -a                 # Ubuntu base information
neofetch                       # Show off your Elementary setup

# Pantheon desktop customization
gsettings set org.gnome.desktop.interface gtk-theme "elementary"
gsettings set org.gnome.desktop.wm.preferences theme "elementary"
gsettings set org.pantheon.desktop.gala.behavior hotcorner-topleft \'none\'

# Install additional software the Elementary way
sudo apt install flatpak      # Flatpak support for more apps
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub com.spotify.Client  # Spotify for your coding sessions

# Elementary maintenance (keeping it clean and beautiful)
sudo apt autoremove && sudo apt autoclean  # Digital minimalism
sudo apt install elementary-tweaks         # More customization options

# Gala window manager magic
gala --replace &               # Restart window manager
gsettings set org.pantheon.desktop.gala.behavior overlay-action \'io.elementary.wingpanel --toggle-indicator=app-launcher\'`
      },
      {
        title: 'Kali Linux - The Hacker\'s Playground 🔓',
        content: 'Kali Linux is the Batman of Linux distributions - dark, powerful, and definitely not for everyone. Created by Offensive Security (a company with the most honest name ever), Kali is designed for penetration testing, digital forensics, and ethical hacking. It comes pre-loaded with over 600 security tools, making it the Swiss Army knife of cybersecurity. Kali users are either cybersecurity professionals, ethical hackers, or that one person in your CS class who thinks they\'re in Mr. Robot. It\'s based on Debian but with a focus on security testing rather than daily use. Warning: Using Kali doesn\'t automatically make you a hacker, despite what Hollywood movies suggest. Also, please use it ethically - we have enough actual cybercriminals already.',
        codeExample: `# Kali uses APT (because it\'s Debian-based)
sudo apt update && sudo apt upgrade    # Keep your hacking tools updated

# Install all the hacking tools (because why not?)
sudo apt install kali-linux-everything  # Every tool imaginable
sudo apt install kali-tools-top10      # Just the popular ones
sudo apt install kali-tools-wireless   # WiFi testing tools
sudo apt install kali-tools-web        # Web application testing

# Popular Kali tools (use responsibly!)
nmap -sn 192.168.1.0/24         # Network discovery (scan your own network)
nmap -sV target-ip              # Service version detection
nikto -h target-website         # Web vulnerability scanner
sqlmap -u "target-url"          # SQL injection testing
metasploit-framework            # The ultimate exploitation framework

# Kali-specific commands
kali-tweaks                     # Kali configuration tool
kali-undercover                 # Make Kali look like Windows (stealth mode)
searchsploit keyword            # Search exploit database
msfconsole                      # Launch Metasploit console

# System information
cat /etc/os-release            # Kali version
kali-version                   # Kali-specific version info
uname -r                       # Kernel version

# Update tools and exploits
sudo updatedb                  # Update locate database
sudo msfupdate                 # Update Metasploit
sudo apt update && sudo apt full-upgrade  # Update everything

# Kali maintenance
sudo apt autoremove            # Remove unnecessary packages
sudo apt autoclean            # Clean package cache
sudo apt --fix-broken install # Fix any broken packages

# Remember: With great power comes great responsibility!
echo "Use your powers for good, not evil" >> ~/.bashrc`
      }
    ]
  }
}
