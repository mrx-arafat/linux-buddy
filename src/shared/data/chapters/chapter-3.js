export const chapter3 = {
  id: '03',
  icon: '🤘',
  title: 'LINUX 101',
  description: '101 words you must know in the Linux/GNU ecosystem',
  slug: 'linux-101',
  content: {
    overview: 'Welcome to Linux University! 🎓 Time to learn the secret language that makes Linux users sound like wizards and confuses Windows users. This isn\'t just vocabulary - it\'s your initiation into the cult of people who actually understand how computers work. We\'re covering 101+ essential terms, concepts, and ideas that separate the Linux masters from the GUI peasants. By the end of this chapter, you\'ll be dropping Linux terminology like a seasoned sysadmin, understanding concepts that make other people\'s eyes glaze over, and speaking the ancient language of Unix like you were born in a terminal. Warning: Side effects may include sudden urges to correct people about "GNU/Linux" and an irresistible need to explain why the command line is superior to everything else. Let\'s turn you into a Linux vocabulary ninja! 🥷',
    sections: [
      {
        title: 'The Linux File System - Your Digital Kingdom\'s Map 🗺️',
        content: 'Welcome to the most logical file system ever created! Unlike Windows with its chaotic C:\\ drive madness or macOS with its "let\'s hide everything from users" philosophy, Linux follows the File System Hierarchy Standard (FHS) - a beautifully organized tree structure that actually makes sense. Everything starts from the root (/) and branches out logically. It\'s like a well-organized library where every book has its place, except instead of books, we have binaries, configs, and logs. Once you understand this hierarchy, you\'ll navigate Linux like a filesystem ninja and wonder how you ever survived the Windows folder chaos. Fun fact: This structure is so good that even macOS secretly copied parts of it (but don\'t tell Apple fanboys).',
        codeExample: `# The root of all evil... I mean, the root directory
/                               # "The beginning of everything" - root directory

# === THE BINARY NEIGHBORHOODS ===
/bin                            # "Essential user commands" - ls, cp, mv, cat, etc.
/sbin                           # "System admin tools" - mount, fdisk, iptables
/usr/bin                        # "User applications" - firefox, vim, git
/usr/sbin                       # "More admin tools" - apache2, nginx
/usr/local/bin                  # "Stuff you compiled yourself" - custom programs

# Explore the binary neighborhoods
ls /bin | head -10              # See essential commands
ls /usr/bin | wc -l             # Count user applications (prepare to be amazed)
which ls                        # "Where does ls live?"
which firefox                   # "Where does Firefox live?"

# === CONFIGURATION CENTRAL ===
/etc                            # "The control center" - all system configs
/etc/passwd                     # "User database" - who exists on this system
/etc/shadow                     # "Password vault" - encrypted passwords
/etc/hosts                      # "Local DNS" - hostname to IP mappings
/etc/fstab                      # "Mount instructions" - what drives to mount
/etc/crontab                    # "Scheduled tasks" - system automation

# Peek into the configuration world
ls /etc | head -20              # Browse configuration files
cat /etc/os-release             # "What Linux am I running?"
cat /etc/hostname               # "What\'s my computer\'s name?"
head -5 /etc/passwd             # See first 5 users (safely)

# === HOME SWEET HOME ===
/home                           # "User neighborhoods" - where users live
/home/username                  # "Your personal space" - your files and configs
/root                           # "Admin\'s penthouse" - root user\'s home
~                               # "Shortcut to home" - your home directory

# Navigate your digital home
ls /home                        # See all users
echo $HOME                      # "Where is my home?"
ls ~                            # List your home directory
ls ~/.config                    # Your personal configuration files

# === THE DYNAMIC DISTRICTS ===
/var                            # "Variable data" - stuff that changes
/var/log                        # "System diary" - all the logs
/var/www                        # "Web server files" - websites live here
/var/lib                        # "Application data" - databases, caches
/tmp                            # "Temporary files" - cleared on reboot
/var/tmp                        # "Persistent temp" - survives reboots

# Explore the dynamic areas
ls /var/log | head -10          # See system logs
du -sh /var/log/*               # "What logs are taking up space?"
ls /tmp                         # See temporary files
df -h /tmp                      # Check temp space usage

# === THE VIRTUAL REALMS ===
/dev                            # "Device files" - hardware interfaces
/proc                           # "Process info" - virtual filesystem
/sys                            # "System info" - hardware details

# Peek into the virtual world
ls /dev | head -10              # See device files
cat /proc/cpuinfo | head -10    # CPU information
cat /proc/meminfo | head -5     # Memory information
ls /sys/class/net               # Network interfaces

# === MOUNT POINTS AND MEDIA ===
/mnt                            # "Temporary mounts" - mount stuff here
/media                          # "Removable media" - USB drives, CDs
/opt                            # "Optional software" - third-party apps

# Check mount points
mount | grep "^/dev"            # See mounted filesystems
ls /media                       # See removable media
df -h                           # "What\'s mounted and how full?"

# === THE BOOT SECTOR ===
/boot                           # "Boot files" - kernels and bootloader
/lib                            # "Essential libraries" - shared libraries
/lib64                          # "64-bit libraries" - for 64-bit systems

# Boot exploration (be careful here!)
ls /boot                        # See boot files
uname -r                        # Current kernel version
ls /lib/modules/$(uname -r)     # Current kernel modules`
      },
      {
        title: 'Users, Groups & Permissions - The Linux Security Theater 🎭',
        content: 'Welcome to Linux\'s permission system - the most elegant security model ever created! While Windows treats permissions like a suggestion and macOS hides them behind pretty icons, Linux has a bulletproof system that\'s been protecting servers since before social media existed. Every file and directory has three permission levels: owner (you), group (your team), and others (everyone else). It\'s like having a bouncer for every file who checks IDs and decides who gets in. The beauty is in its simplicity - just three types of permissions (read, write, execute) for three types of users. Master this system and you\'ll understand why Linux runs the internet while other operating systems run... well, desktop computers that get viruses.',
        codeExample: `# === IDENTITY CRISIS RESOLUTION ===
whoami                          # "Who am I?" - current username
id                              # "What are my credentials?" - user/group IDs
id username                     # "What about this other person?"
groups                          # "What groups do I belong to?"
groups username                 # "What groups does someone else belong to?"

# === THE USER DATABASE (Linux\'s phonebook) ===
cat /etc/passwd                 # "Who exists on this system?" - user database
cat /etc/group                  # "What groups exist?" - group database
sudo cat /etc/shadow            # "Show me the passwords!" - encrypted passwords (admin only)

# Decode /etc/passwd format: username:x:UID:GID:comment:home:shell
head -5 /etc/passwd             # See first 5 users safely
grep $USER /etc/passwd          # Find your own entry
grep "bash" /etc/passwd         # Find users with bash shell

# === PERMISSION DETECTIVE WORK ===
ls -l                           # "Show me the permissions!" - long listing
ls -la                          # "Show me EVERYTHING!" - including hidden files
ls -ld /path/to/directory       # "What about this directory?"
stat filename                   # "Give me ALL the details!" - file metadata

# === DECODING THE PERMISSION MATRIX ===
# Format: drwxrwxrwx
# Position 1: d=directory, -=file, l=link
# Positions 2-4: Owner permissions (rwx)
# Positions 5-7: Group permissions (rwx)
# Positions 8-10: Other permissions (rwx)

# Permission meanings:
# r (read) = 4     - "Can I see the content?"
# w (write) = 2    - "Can I modify this?"
# x (execute) = 1  - "Can I run this?" (files) or "Can I enter?" (directories)

# === PERMISSION MATH (octal magic) ===
# 755 = rwxr-xr-x  - "Owner: full control, others: read and execute"
# 644 = rw-r--r--  - "Owner: read/write, others: read only"
# 600 = rw-------  - "Owner only, everyone else: get lost!"
# 777 = rwxrwxrwx  - "Everyone can do everything" (usually a bad idea)

# === PERMISSION MODIFICATION WIZARDRY ===
# Octal method (the quick way)
chmod 755 script.sh             # "Make it executable for everyone"
chmod 644 document.txt          # "Read/write for owner, read for others"
chmod 600 secret.txt            # "Owner only, top secret!"

# Symbolic method (the descriptive way)
chmod u+x script.sh             # "Give owner execute permission"
chmod g-w file.txt              # "Remove group write permission"
chmod o+r file.txt              # "Give others read permission"
chmod a+x program               # "Give everyone execute permission"
chmod u=rwx,g=rx,o=r file       # "Set exact permissions"

# === OWNERSHIP MANAGEMENT ===
sudo chown user:group file.txt  # "Change owner and group"
sudo chown user file.txt        # "Change owner only"
sudo chgrp group file.txt       # "Change group only"
sudo chown -R user:group dir/   # "Change ownership recursively"

# Find files by ownership
find . -user username           # "Find files owned by user"
find . -group groupname         # "Find files owned by group"
find . -perm 777                # "Find files with 777 permissions" (security risk!)

# === SPECIAL PERMISSIONS (the advanced stuff) ===
chmod +t /tmp                   # "Sticky bit" - only owner can delete files
chmod g+s directory             # "Set group ID" - files inherit group
chmod u+s program               # "Set user ID" - run as owner (dangerous!)

# Check for special permissions
find /usr/bin -perm -4000       # Find SUID programs (run as owner)
find /usr/bin -perm -2000       # Find SGID programs (run as group)
find /tmp -perm +t              # Find directories with sticky bit

# === PERMISSION TROUBLESHOOTING ===
# "Why can\'t I access this file?"
ls -la problematic_file         # Check permissions
groups                          # Check your groups
sudo -l                         # Check sudo permissions

# "Fix common permission issues"
chmod +x script.sh              # "Make script executable"
sudo chown $USER:$USER file     # "Take ownership of file"
sudo chmod 755 directory        # "Make directory accessible"

# === SECURITY BEST PRACTICES ===
# Never do this (unless you hate security):
# chmod 777 file                # "Everyone can do everything" - BAD!
# chmod -R 777 /                # "Destroy all security" - VERY BAD!

# Do this instead:
chmod 644 documents/*.txt       # "Documents: owner write, others read"
chmod 755 scripts/*.sh          # "Scripts: owner write, everyone execute"
chmod 600 ~/.ssh/id_rsa         # "SSH keys: owner only" - CRITICAL!`
      },
      {
        title: 'Processes & System Management - The Digital Life Force 🧬',
        content: 'In Linux, everything is either a file or a process. Processes are running programs - the digital life forms inhabiting your system. Unlike Windows where processes are mysterious entities hidden behind Task Manager, Linux gives you godlike powers over every running program. You can see what\'s running, how much resources it\'s using, who started it, and most importantly - you can kill it with extreme prejudice. Understanding processes is like being able to see The Matrix - suddenly you understand what your computer is actually doing instead of just hoping it works.',
        codeExample: `# === PROCESS RECONNAISSANCE ===
ps                              # "What\'s running?" - your processes
ps aux                          # "Show me EVERYTHING!" - all processes
ps aux | grep firefox           # "Find Firefox processes"
ps -ef                          # "Alternative format" - full process tree
pstree                          # "Show process family tree" - visual hierarchy

# === REAL-TIME PROCESS MONITORING ===
top                             # "Real-time process viewer" - classic interface
htop                            # "Pretty process viewer" - colorful and interactive
btop                            # "Beautiful process viewer" - modern and gorgeous
iotop                           # "I/O process monitor" - who\'s hitting the disk?
nethogs                         # "Network process monitor" - who\'s using bandwidth?

# === PROCESS IDENTIFICATION ===
pidof firefox                   # "What\'s Firefox\'s process ID?"
pgrep firefox                   # "Find process IDs by name"
pgrep -f "python script.py"     # "Find by full command line"
jobs                            # "What jobs are running in this shell?"

# === PROCESS TERMINATION (the fun part) ===
kill 1234                       # "Politely ask process 1234 to stop"
kill -9 1234                    # "KILL IT WITH FIRE!" - force termination
killall firefox                 # "Kill all Firefox processes"
pkill firefox                   # "Kill processes by name"
sudo killall -9 chrome          # "Nuclear option for Chrome"

# === BACKGROUND PROCESSES ===
firefox &                       # "Run Firefox in background"
nohup long_script.sh &          # "Run script immune to hangup"
disown                          # "Disown background job"
screen -S mysession             # "Create detachable session"
tmux new -s mysession           # "Create tmux session"

# === SYSTEM SERVICES (the system\'s workforce) ===
systemctl status ssh            # "Is SSH service running?"
systemctl start apache2        # "Start Apache web server"
systemctl stop apache2         # "Stop Apache web server"
systemctl restart nginx        # "Restart Nginx"
systemctl enable docker        # "Start Docker on boot"
systemctl disable bluetooth    # "Don\'t start Bluetooth on boot"

# === SERVICE MANAGEMENT ===
systemctl list-units           # "List all active services"
systemctl list-unit-files      # "List all available services"
systemctl --failed             # "What services failed to start?"
journalctl -u ssh              # "Show SSH service logs"
journalctl -f                  # "Follow system logs in real-time"

# === PROCESS PRIORITY (VIP treatment) ===
nice -n 10 cpu_intensive_task  # "Run with lower priority"
nice -n -10 important_task     # "Run with higher priority" (requires sudo)
renice 5 1234                  # "Change priority of running process"
ionice -c 3 backup_script      # "Run with idle I/O priority"

# === SYSTEM LOAD AND PERFORMANCE ===
uptime                         # "System load and uptime"
w                              # "Who\'s logged in and what they\'re doing"
vmstat 1                       # "Virtual memory statistics"
iostat 1                       # "I/O statistics"
sar -u 1 10                    # "CPU usage over time" (if sysstat installed)

# === MEMORY MANAGEMENT ===
free -h                        # "Memory usage in human format"
cat /proc/meminfo              # "Detailed memory information"
ps aux --sort=-%mem | head     # "Top memory consumers"
pmap 1234                      # "Memory map of process 1234"

# === PROCESS SIGNALS (the process communication system) ===
# Signal meanings:
# SIGTERM (15) - "Please stop gracefully"
# SIGKILL (9)  - "DIE NOW!" (cannot be ignored)
# SIGHUP (1)   - "Reload configuration"
# SIGSTOP (19) - "Pause process"
# SIGCONT (18) - "Resume process"

kill -TERM 1234                # "Graceful termination"
kill -HUP 1234                 # "Reload configuration"
kill -STOP 1234                # "Pause process"
kill -CONT 1234                # "Resume process"
kill -l                        # "List all available signals"`
      },
      {
        title: 'Package Management - The Software Buffet 🍽️',
        content: 'Package management is where Linux absolutely destroys other operating systems. While Windows users are downloading .exe files from sketchy websites and macOS users are dragging apps to folders like cavemen, Linux users have sophisticated package managers that handle dependencies, updates, and security automatically. It\'s like having a personal software butler who knows exactly what you need and keeps everything organized. Different distros have different package managers, but they all share the same philosophy: software installation should be simple, secure, and sane.',
        codeExample: `# === APT (Ubuntu/Debian) - The Popular Kid ===
sudo apt update                 # "Refresh package lists" - check for updates
sudo apt upgrade                # "Update all packages" - apply updates
sudo apt install firefox       # "Install Firefox"
sudo apt install -y git vim curl  # "Install multiple packages" (-y = yes to all)
sudo apt remove firefox        # "Uninstall Firefox"
sudo apt purge firefox         # "Uninstall and remove config files"
sudo apt autoremove            # "Remove orphaned packages"
sudo apt autoclean             # "Clean package cache"

# APT search and info
apt search "text editor"       # "Find text editors"
apt show firefox               # "Get package details"
apt list --installed           # "List installed packages"
apt list --upgradable          # "What can be updated?"

# === DNF (Fedora) - The Modern Approach ===
sudo dnf update                # "Update everything"
sudo dnf install firefox      # "Install Firefox"
sudo dnf remove firefox       # "Remove Firefox"
sudo dnf autoremove           # "Remove orphaned packages"
sudo dnf search editor        # "Search for editors"
sudo dnf info firefox         # "Get package info"
sudo dnf history              # "Show transaction history"
sudo dnf history undo last    # "Undo last transaction"

# === PACMAN (Arch) - The Power User\'s Choice ===
sudo pacman -Syu               # "Update system" (Sync, refresh, update)
sudo pacman -S firefox        # "Install Firefox"
sudo pacman -R firefox        # "Remove Firefox"
sudo pacman -Rs firefox       # "Remove with dependencies"
sudo pacman -Ss editor        # "Search for editors"
sudo pacman -Q                # "List installed packages"
sudo pacman -Qe               # "List explicitly installed packages"

# === ZYPPER (openSUSE) - The German Engineering ===
sudo zypper refresh            # "Refresh repositories"
sudo zypper update             # "Update packages"
sudo zypper install firefox   # "Install Firefox"
sudo zypper remove firefox    # "Remove Firefox"
sudo zypper search editor     # "Search for editors"

# === UNIVERSAL PACKAGE MANAGERS ===
# Snap (Ubuntu\'s universal packages)
snap list                      # "List installed snaps"
sudo snap install code        # "Install VS Code"
sudo snap remove code         # "Remove VS Code"
snap find editor              # "Search for editors"

# Flatpak (Universal Linux packages)
flatpak list                   # "List installed flatpaks"
flatpak install flathub com.spotify.Client  # "Install Spotify"
flatpak uninstall com.spotify.Client        # "Remove Spotify"
flatpak search music          # "Search for music apps"

# AppImage (Portable applications)
chmod +x app.AppImage          # "Make AppImage executable"
./app.AppImage                 # "Run AppImage"

# === PACKAGE INFORMATION ARCHAEOLOGY ===
dpkg -l                        # "List all installed packages" (Debian/Ubuntu)
dpkg -L package-name           # "What files does this package contain?"
dpkg -S /usr/bin/firefox       # "Which package owns this file?"
rpm -qa                        # "List all packages" (Red Hat/Fedora)
rpm -ql package-name           # "List package files"
rpm -qf /usr/bin/firefox       # "Which package owns this file?"

# === REPOSITORY MANAGEMENT ===
# Ubuntu/Debian
sudo add-apt-repository ppa:user/repo  # "Add PPA repository"
sudo apt-key add key.gpg       # "Add repository key"
cat /etc/apt/sources.list      # "View repository list"

# Fedora
sudo dnf config-manager --add-repo URL  # "Add repository"
sudo dnf repolist              # "List repositories"

# === PACKAGE BUILDING (for the brave) ===
# Debian/Ubuntu
sudo apt install build-essential  # "Install build tools"
dpkg-buildpackage -b           # "Build Debian package"

# Arch
makepkg -si                    # "Build and install from PKGBUILD"
yay -S aur-package             # "Install from AUR" (if yay is installed)

# === PACKAGE TROUBLESHOOTING ===
sudo apt --fix-broken install # "Fix broken packages" (Ubuntu/Debian)
sudo dpkg --configure -a      # "Configure unconfigured packages"
sudo dnf check                # "Check for problems" (Fedora)
sudo pacman -Sc               # "Clean package cache" (Arch)

# === SECURITY UPDATES ===
sudo apt list --upgradable | grep security  # "Security updates available"
sudo unattended-upgrades     # "Automatic security updates" (Ubuntu)
sudo dnf updateinfo security # "Security update info" (Fedora)`
      },
      {
        title: 'Essential Linux Vocabulary - The Secret Language 🗣️',
        content: 'Time to learn the sacred terminology that separates Linux wizards from mere mortals! This isn\'t just vocabulary - it\'s your initiation into the secret society of people who actually understand computers. Master these terms and you\'ll sound like you\'ve been using Linux since before the internet existed. Warning: Using these terms correctly may result in other people asking you to fix their computers, sudden job offers in tech, and an irresistible urge to correct people who say "UNIX-like" instead of "Unix-like".',
        codeExample: `# === FUNDAMENTAL CONCEPTS ===
# Kernel - The core of the operating system
uname -r                        # "What kernel version am I running?"
cat /proc/version              # "Kernel details and build info"
lsmod                          # "What kernel modules are loaded?"
modinfo module_name            # "Info about a specific module"

# Shell - Your command interpreter
echo $SHELL                    # "What shell am I using?"
cat /etc/shells                # "What shells are available?"
chsh -s /bin/zsh               # "Change my shell to zsh"

# Terminal vs Console vs TTY
tty                            # "What terminal am I using?"
who                            # "Who\'s logged in and where?"
w                              # "Who\'s doing what?"

# === FILE SYSTEM CONCEPTS ===
# Inode - File system\'s unique identifier
ls -i                          # "Show inode numbers"
stat filename                  # "File metadata including inode"
find . -inum 12345             # "Find file by inode number"

# Hard Links vs Soft Links (Symbolic Links)
ln file.txt hardlink.txt       # "Create hard link"
ln -s file.txt symlink.txt     # "Create symbolic link"
ls -l                          # "See link types in listing"

# Mount Points - Where filesystems attach
mount                          # "Show mounted filesystems"
df -h                          # "Disk usage by mount point"
findmnt                        # "Tree view of mount points"
lsblk                          # "Block device tree"

# === NETWORKING TERMINOLOGY ===
# Interface - Network connection point
ip addr show                   # "Show network interfaces"
ifconfig                       # "Old school interface config"
iwconfig                       # "Wireless interface config"

# Ports and Sockets
ss -tuln                       # "Show listening ports"
netstat -tuln                  # "Old school port listing"
lsof -i :80                    # "What\'s using port 80?"

# === SYSTEM ADMINISTRATION TERMS ===
# Daemon - Background service process
systemctl list-units --type=service  # "List all daemons/services"
ps aux | grep -E "\\[.*\\]"     # "Show kernel threads"

# Cron - Task scheduler
crontab -l                     # "List my scheduled tasks"
cat /etc/crontab               # "System-wide cron jobs"
ls /etc/cron.d/                # "Additional cron directories"

# Log Files - System\'s diary
journalctl                     # "Modern system logs"
tail -f /var/log/syslog        # "Follow system log"
dmesg                          # "Kernel ring buffer messages"

# === PACKAGE AND SOFTWARE TERMS ===
# Repository - Software source
apt policy                     # "Show repository priorities" (Ubuntu/Debian)
dnf repolist                   # "List repositories" (Fedora)

# Dependencies - Required packages
apt depends firefox            # "What does Firefox need?" (Ubuntu/Debian)
dnf repoquery --requires firefox  # "Firefox dependencies" (Fedora)

# === SECURITY CONCEPTS ===
# sudo - "Substitute User DO" or "Super User DO"
sudo -l                        # "What can I do with sudo?"
sudo -u username command       # "Run command as different user"
visudo                         # "Edit sudo configuration safely"

# SELinux/AppArmor - Security frameworks
getenforce                     # "SELinux status" (Red Hat/Fedora)
sestatus                       # "Detailed SELinux status"
aa-status                      # "AppArmor status" (Ubuntu/Debian)

# === ENVIRONMENT VARIABLES ===
env                            # "Show all environment variables"
echo $PATH                     # "Show command search path"
echo $HOME                     # "Show home directory"
export MYVAR="value"           # "Set environment variable"
unset MYVAR                    # "Remove environment variable"

# === PIPES AND REDIRECTION ===
# Pipe - Send output to another command
ps aux | grep firefox          # "Pipe ps output to grep"
cat file.txt | sort | uniq     # "Chain multiple commands"

# Redirection - Send output to files
echo "hello" > file.txt        # "Redirect output to file (overwrite)"
echo "world" >> file.txt       # "Redirect output to file (append)"
command 2> error.log           # "Redirect errors to file"
command &> all.log             # "Redirect everything to file"

# === REGULAR EXPRESSIONS (REGEX) ===
grep "^start" file.txt         # "Lines starting with \'start\'"
grep "end$" file.txt           # "Lines ending with \'end\'"
grep "a.*b" file.txt           # "Lines with \'a\' followed by \'b\'"
grep -E "pattern1|pattern2"    # "Extended regex with OR"

# === COMPRESSION AND ARCHIVES ===
# tar - Tape ARchive
tar -czf archive.tar.gz dir/   # "Create compressed archive"
tar -xzf archive.tar.gz        # "Extract compressed archive"
tar -tzf archive.tar.gz        # "List archive contents"

# gzip/gunzip - Compression
gzip file.txt                  # "Compress file"
gunzip file.txt.gz             # "Decompress file"
zcat file.txt.gz               # "View compressed file without extracting"

# === SYSTEM INFORMATION COMMANDS ===
# Hardware information
lscpu                          # "CPU information"
lsmem                          # "Memory information"
lsblk                          # "Block devices"
lsusb                          # "USB devices"
lspci                          # "PCI devices"
dmidecode                      # "Hardware details from BIOS"

# === THE LINUX PHILOSOPHY ===
# "Everything is a file" - Core Unix/Linux principle
ls /dev                        # "Hardware devices as files"
ls /proc                       # "Process information as files"
ls /sys                        # "System information as files"

# "Do one thing and do it well" - Unix philosophy
man philosophy                 # "Read about Unix philosophy" (if available)

# === COMMON ABBREVIATIONS ===
# CLI - Command Line Interface
# GUI - Graphical User Interface
# FOSS - Free and Open Source Software
# GNU - GNU\'s Not Unix (recursive acronym)
# POSIX - Portable Operating System Interface
# RTFM - Read The Fine Manual
# PEBKAC - Problem Exists Between Keyboard And Chair

# === CONGRATULATIONS! ===
echo "🎓 You now speak Linux fluently!"
echo "You\'ve mastered the essential vocabulary that makes you dangerous."
echo "Go forth and impress people with your newfound knowledge!"
neofetch                       # "Show off your Linux mastery"`
      }
    ]
  }
}
