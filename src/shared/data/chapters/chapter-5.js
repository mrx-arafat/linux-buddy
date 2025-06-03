export const chapter5 = {
  id: '05',
  icon: '🗃️',
  title: 'THE FILE SYSTEM',
  description: 'Understanding the Linux file system structure',
  slug: 'the-file-system',
  content: {
    overview: 'Welcome to the Linux File System - the most logical, organized, and elegant way to store data ever invented! 🗃️ While Windows throws files around like a tornado hit a library, and macOS pretends everything is "simple" while hiding complexity behind pretty icons, Linux gives you a crystal-clear hierarchy that actually makes sense. This isn\'t just about folders and files - this is about understanding the digital DNA of your system. Every file has a purpose, every directory has a meaning, and once you understand the structure, you\'ll navigate Linux like you have a GPS for your hard drive. We\'re going to explore the file system from the root directory down to the deepest subdirectories, and by the end, you\'ll understand why Linux users look at other operating systems\' file organization and just shake their heads in disappointment. Ready to become a file system architect? Let\'s dive into the most beautiful directory tree ever created! 🌳',
    sections: [
      {
        title: '1. The Root Directory - The Beginning of Everything 🌱',
        content: 'Meet `/` - the root directory, the alpha and omega of the Linux file system. This isn\'t just a folder, it\'s the foundation of digital existence on your machine. While Windows has multiple drive letters like some kind of alphabet soup (C:, D:, E:), Linux starts with one simple, elegant concept: everything begins at `/`. Think of it as the trunk of a massive tree, with every other directory branching out from this single point. It\'s beautiful, it\'s logical, and it\'s the reason Linux users feel claustrophobic when they have to use other operating systems.',
        codeExample: `# === EXPLORING THE ROOT DIRECTORY ===
ls /                            # "Show me everything at the root"
ls -la /                        # "Show me everything with details"
ls -la / | wc -l                # "Count how many items are in root"
tree / -L 1                     # "Show root directory as a tree (1 level deep)"
tree / -L 2                     # "Show 2 levels deep" (prepare to be amazed)

# === ROOT DIRECTORY ESSENTIALS ===
cd /                            # "Take me to the beginning of everything"
pwd                             # "Where am I?" (you're at the root!)
ls -la / | grep "^d"            # "Show me only directories in root"
ls -la / | grep "^-"            # "Show me only files in root"

# === UNDERSTANDING ROOT PERMISSIONS ===
ls -ld /                        # "Show root directory permissions"
stat /                          # "Detailed info about the root directory"
df /                            # "How much space is available at root?"
df -h /                         # "Human-readable space info"

# === ROOT DIRECTORY EXPLORATION ===
find / -maxdepth 1 -type d      # "Find all directories directly under root"
find / -maxdepth 1 -type f      # "Find all files directly under root"
du -sh /*                       # "Show size of each item in root"
du -sh /* | sort -hr            # "Sort by size (largest first)"

# === THE ROOT REALITY CHECK ===
echo "You are here: \$(pwd)"     # "Current location"
echo "This is the root: /"      # "The beginning of everything"
echo "Everything else branches from here" # "The fundamental truth"

# === NAVIGATING FROM ROOT ===
ls /bin                         # "Essential user commands"
ls /etc                         # "System configuration files"
ls /home                        # "User home directories"
ls /var                         # "Variable data (logs, caches, etc.)"
ls /usr                         # "User programs and libraries"

# === ROOT DIRECTORY FACTS ===
# - The root directory (/) is NOT the same as the root user's home (/root)
# - Everything in Linux starts from /
# - You can't go "above" the root directory
# - The root directory is the mount point for the root filesystem
# - It's the most important directory in the entire system

echo "🌱 Welcome to the root - where everything begins!"`
      },
      {
        title: '2. Essential System Directories - The Neighborhood Guide 🏘️',
        content: 'Linux organizes its directories like a well-planned city, where every neighborhood has a specific purpose. Unlike the chaotic sprawl of other operating systems, Linux follows the Filesystem Hierarchy Standard (FHS) - basically a city planning document that ensures every Linux system feels familiar. Let\'s take a tour of the essential neighborhoods in your Linux city, from the government buildings (/etc) to the shopping districts (/usr) to the residential areas (/home). Each directory has a job, and understanding these jobs will make you a Linux navigation expert.',
        codeExample: `# === THE ESSENTIAL DIRECTORIES TOUR ===

# /bin - "The Tool Shed" 🔧
ls -la /bin                     # "Essential user commands"
ls /bin | wc -l                 # "Count how many tools you have"
ls /bin | grep -E "(ls|cp|mv|rm|cat|grep)" # "Find your favorite commands"
which ls                        # "Where does 'ls' live?" (spoiler: /bin/ls)

# /etc - "The Control Center" ⚙️
ls -la /etc                     # "System configuration files"
ls /etc/*.conf                  # "All configuration files"
ls /etc | grep -i network       # "Network-related configs"
cat /etc/hostname               # "What's my computer's name?"
cat /etc/os-release             # "What Linux am I running?"

# /home - "The Residential District" 🏠
ls -la /home                    # "All user home directories"
ls -la \$HOME                    # "My personal space"
ls -la ~                        # "Same as above (~ means home)"
du -sh /home/*                  # "How much space each user is using"

# /var - "The Dynamic District" 📊
ls -la /var                     # "Variable data directory"
ls -la /var/log                 # "System logs live here"
ls -la /var/cache               # "Cached data"
ls -la /var/tmp                 # "Temporary files"
du -sh /var/log/*               # "Size of each log directory"

# /usr - "The Software Mall" 🛒
ls -la /usr                     # "User programs and libraries"
ls -la /usr/bin                 # "User commands (more than /bin)"
ls -la /usr/lib                 # "Libraries and shared code"
ls -la /usr/share               # "Shared data and documentation"
ls /usr/bin | wc -l             # "Count user programs"

# /tmp - "The Scratch Pad" 📝
ls -la /tmp                     # "Temporary files (cleared on reboot)"
df -h /tmp                      # "How much temp space available?"
find /tmp -type f -mtime +1     # "Find old temp files"

# /opt - "The Third-Party Plaza" 🏢
ls -la /opt                     # "Optional/third-party software"
du -sh /opt/*                   # "Size of optional packages"

# /root - "The Administrator's Penthouse" 👑
sudo ls -la /root               # "Root user's home directory"
sudo du -sh /root               # "Root's personal space usage"

# === DIRECTORY PURPOSE SUMMARY ===
echo "📁 Directory Guide:"
echo "/bin     - Essential commands (ls, cp, mv, etc.)"
echo "/etc     - Configuration files"
echo "/home    - User home directories"
echo "/var     - Variable data (logs, caches)"
echo "/usr     - User programs and libraries"
echo "/tmp     - Temporary files"
echo "/opt     - Optional third-party software"
echo "/root    - Root user's home"

# === EXPLORING DIRECTORY SIZES ===
du -sh /* 2>/dev/null | sort -hr # "Size of each root directory (largest first)"
df -h                           # "Filesystem usage summary"

# === DIRECTORY PERMISSIONS CHECK ===
ls -ld /bin /etc /home /var /usr /tmp # "Check permissions of major directories"`
      },
      {
        title: '3. File Types and Permissions - The Digital DNA 🧬',
        content: 'In Linux, everything is a file - and I mean EVERYTHING. Regular files, directories, devices, network connections, processes - they\'re all represented as files. This isn\'t just a philosophical statement, it\'s the fundamental design principle that makes Linux so powerful and elegant. But not all files are created equal. Linux has a sophisticated system for identifying file types and controlling who can do what with them. Let\'s decode the digital DNA of your files and learn to read the permission matrix like Neo reading the code in The Matrix.',
        codeExample: `# === FILE TYPE IDENTIFICATION ===
ls -la                          # "Show file types and permissions"
file *                          # "Identify file types by content"
file /bin/ls                    # "What type of file is 'ls'?"
file /etc/passwd                # "What about the password file?"
file /dev/sda1                  # "What about a disk device?"

# === UNDERSTANDING FILE TYPE INDICATORS ===
# First character in 'ls -la' output tells you the file type:
# -  = regular file
# d  = directory
# l  = symbolic link
# c  = character device
# b  = block device
# p  = named pipe (FIFO)
# s  = socket

ls -la | grep "^-"              # "Show only regular files"
ls -la | grep "^d"              # "Show only directories"
ls -la | grep "^l"              # "Show only symbolic links"
ls -la /dev | grep "^c"         # "Show character devices"
ls -la /dev | grep "^b"         # "Show block devices"

# === PERMISSION BREAKDOWN ===
# Permission format: rwxrwxrwx
# First rwx  = owner permissions
# Second rwx = group permissions
# Third rwx  = other permissions
# r = read (4), w = write (2), x = execute (1)

ls -la /bin/ls                  # "Check 'ls' command permissions"
stat /bin/ls                    # "Detailed file information"

# === PERMISSION EXAMPLES ===
ls -la | head -10               # "Show permissions of first 10 items"
ls -la | awk '{print \$1, \$9}'  # "Show just permissions and filenames"

# === SPECIAL PERMISSIONS ===
find /usr/bin -perm -4000       # "Find SUID files (run as owner)"
find /usr/bin -perm -2000       # "Find SGID files (run as group)"
find /tmp -perm -1000           # "Find sticky bit files"

# === FILE OWNERSHIP ===
ls -la | awk '{print \$3, \$4, \$9}' # "Show owner, group, and filename"
id                              # "Show my user and group info"
groups                          # "Show groups I belong to"

# === HIDDEN FILES ===
ls -la | grep "^\\."             # "Show hidden files (start with .)"
ls -d .*                        # "List only hidden files"
find . -name ".*" -type f       # "Find all hidden files"

# === FILE SIZE AND TIMESTAMPS ===
ls -lah                         # "Human-readable file sizes"
ls -lat                         # "Sort by access time"
ls -lct                         # "Sort by change time"
ls -lrt                         # "Sort by modification time (oldest first)"

# === ADVANCED FILE ANALYSIS ===
find . -type f -executable      # "Find executable files"
find . -type f -readable        # "Find readable files"
find . -type f -writable        # "Find writable files"
find . -type f -empty           # "Find empty files"

# === FILE CONTENT PREVIEW ===
head -5 *                       # "Show first 5 lines of each file"
tail -5 *                       # "Show last 5 lines of each file"
wc -l *                         # "Count lines in each file"
du -sh *                        # "Show size of each file/directory"

# === THE PERMISSION MATRIX DECODER ===
echo "🧬 Permission Matrix Decoder:"
echo "rwx = 7 (read + write + execute)"
echo "rw- = 6 (read + write)"
echo "r-x = 5 (read + execute)"
echo "r-- = 4 (read only)"
echo "-wx = 3 (write + execute)"
echo "-w- = 2 (write only)"
echo "--x = 1 (execute only)"
echo "--- = 0 (no permissions)"

# === PRACTICAL PERMISSION CHECKING ===
test -r file.txt && echo "I can read this file"
test -w file.txt && echo "I can write to this file"
test -x file.txt && echo "I can execute this file"
test -d directory && echo "This is a directory"`
      },
      {
        title: '4. Navigating Like a Pro - Advanced File System Kung Fu 🥋',
        content: 'Now that you understand the structure, it\'s time to learn the advanced navigation techniques that separate Linux ninjas from casual users. We\'re talking about shortcuts, tricks, and power moves that will make you navigate the file system faster than a cheetah on Red Bull. These aren\'t just commands - they\'re the secret techniques passed down through generations of Linux masters. Master these, and you\'ll be teleporting through directories while others are still clicking through folder trees like it\'s 1995.',
        codeExample: `# === ADVANCED NAVIGATION SHORTCUTS ===
cd -                            # "Go back to previous directory"
cd ~                            # "Go home instantly"
cd ~/Documents                  # "Go to Documents folder"
cd ../..                        # "Go up two levels"
cd /                            # "Go to root directory"

# === DIRECTORY STACK MAGIC ===
pushd /var/log                  # "Push current dir to stack, go to /var/log"
pushd /etc                      # "Push and go to /etc"
dirs                            # "Show directory stack"
popd                            # "Pop back to previous directory"
popd                            # "Pop again"

# === PATH SHORTCUTS ===
echo \$PWD                       # "Current directory"
echo \$OLDPWD                    # "Previous directory"
echo \$HOME                      # "Home directory"
basename \$PWD                   # "Just the current directory name"
dirname \$PWD                    # "Parent directory path"

# === WILDCARD MASTERY ===
ls *.txt                        # "All text files"
ls file?.txt                    # "file1.txt, file2.txt, etc."
ls file[1-5].txt                # "file1.txt through file5.txt"
ls file[abc].txt                # "filea.txt, fileb.txt, filec.txt"
ls !(*.txt)                     # "Everything except .txt files" (bash)

# === BRACE EXPANSION WIZARDRY ===
ls {file1,file2,file3}.txt      # "Multiple specific files"
ls file{1..10}.txt              # "file1.txt through file10.txt"
ls {*.txt,*.log}                # "All .txt and .log files"
mkdir -p project/{src,docs,tests} # "Create multiple directories"

# === FIND COMMAND MASTERY ===
find . -name "*.txt"            # "Find all .txt files"
find . -type d -name "test*"    # "Find directories starting with 'test'"
find . -size +1M                # "Find files larger than 1MB"
find . -mtime -7                # "Find files modified in last 7 days"
find . -name "*.log" -delete    # "Find and delete log files"

# === LOCATE COMMAND (if available) ===
locate filename                 # "Find file anywhere on system"
locate "*.conf" | head -10      # "Find config files"
updatedb                        # "Update locate database" (as root)

# === TREE COMMAND VISUALIZATION ===
tree                            # "Show directory tree"
tree -L 2                       # "Show 2 levels deep"
tree -d                         # "Show only directories"
tree -a                         # "Show hidden files too"
tree -h                         # "Show file sizes"

# === ADVANCED LS TRICKS ===
ls -laSh                        # "List all, sort by size, human readable"
ls -latr                        # "List all, sort by time (oldest first)"
ls -la --color=always | less -R # "Colorful paging"
ls -la | grep \$(date +%b)       # "Files modified this month"

# === DIRECTORY SIZE ANALYSIS ===
du -sh *                        # "Size of each item in current directory"
du -sh * | sort -hr             # "Sort by size (largest first)"
du -ah . | sort -hr | head -20  # "Top 20 largest files/dirs"
ncdu                            # "Interactive disk usage analyzer" (if installed)

# === SYMBOLIC LINKS MASTERY ===
ln -s /path/to/target linkname  # "Create symbolic link"
ls -la | grep "^l"              # "Show symbolic links"
readlink linkname               # "Show where link points"
find . -type l                  # "Find all symbolic links"

# === FILESYSTEM INFORMATION ===
df -h                           # "Disk space usage"
df -i                           # "Inode usage"
mount | column -t               # "Show mounted filesystems"
lsblk                           # "List block devices"
findmnt                         # "Show mount points as tree"

# === ADVANCED SEARCH TECHNIQUES ===
grep -r "pattern" .             # "Search for text in all files"
grep -r "TODO" . --include="*.py" # "Search in Python files only"
find . -name "*.txt" -exec grep -l "pattern" {} \\; # "Find files containing pattern"

# === THE NAVIGATION NINJA MOVES ===
alias ..='cd ..'                # "Quick up one level"
alias ...='cd ../..'            # "Quick up two levels"
alias ll='ls -la'               # "Quick detailed listing"
alias la='ls -la'               # "Show all files"
alias lt='ls -latr'             # "Sort by time"

# === BOOKMARK SYSTEM ===
export MARKPATH=\$HOME/.marks
function jump { cd -P \$MARKPATH/\$1 2>/dev/null || echo "No such mark: \$1"; }
function mark { mkdir -p \$MARKPATH; ln -s \$(pwd) \$MARKPATH/\$1; }
function unmark { rm -i \$MARKPATH/\$1; }
function marks { ls -l \$MARKPATH | sed 's/  / /g' | cut -d' ' -f9- | sed 's/ -/\t-/g'; }

# Usage:
# mark work          # Bookmark current directory as 'work'
# jump work          # Jump to 'work' bookmark
# marks              # List all bookmarks`
      },
      {
        title: '5. File System Mastery - Pro Tips and Hidden Secrets 🎯',
        content: 'Time for the advanced course - the secret techniques that separate file system masters from mere mortals. These are the tricks that Linux veterans use daily but rarely share publicly. We\'re talking about hidden features, power-user shortcuts, and system administration techniques that will make you dangerous with a file system. This isn\'t just about knowing commands - this is about understanding the deep magic of how Linux organizes and manages data.',
        codeExample: `# === ADVANCED FILE SYSTEM ANALYSIS ===
du -ah / 2>/dev/null | sort -hr | head -20  # "Top 20 space consumers"
find / -size +100M 2>/dev/null              # "Files larger than 100MB"
find / -type f -size +1G 2>/dev/null        # "Files larger than 1GB"

# === FILESYSTEM MONITORING ===
watch -n 1 'df -h'                         # "Watch disk space in real-time"
lsof                                        # "List open files"
lsof /path/to/file                         # "Who's using this file?"

# === ADVANCED SEARCH TECHNIQUES ===
grep -r "password" /etc/ 2>/dev/null        # "Search for passwords in configs"
find /var/log -name "*.log" -mtime +30      # "Log files older than 30 days"
find . -newermt "2024-01-01" ! -newermt "2024-12-31" # "Files from 2024"

# === FILESYSTEM SECURITY ANALYSIS ===
find / -perm -4000 2>/dev/null              # "Find SUID files (security risk)"
find / -perm -002 2>/dev/null               # "World-writable files"
find / -nouser -o -nogroup 2>/dev/null      # "Orphaned files"

# === FILESYSTEM MAINTENANCE ===
find /tmp -type f -atime +7 -delete         # "Clean old temp files"
find /var/log -name "*.log" -size +100M -exec gzip {} \\; # "Compress large logs"
find . -name ".DS_Store" -delete           # "Remove macOS metadata files"

# === BACKUP STRATEGIES ===
tar -czf backup-\$(date +%Y%m%d).tar.gz /path/to/backup # "Create timestamped backup"
rsync -av --progress /source/ /destination/ # "Sync directories with progress"

# === FILESYSTEM TROUBLESHOOTING ===
du -ah / 2>/dev/null | sort -hr | head -50 # "Top 50 space consumers"
lsof +L1                                    # "Find deleted files still open"
namei -l /path/to/file                      # "Show permission chain to file"

# === THE FILESYSTEM MASTER'S TOOLKIT ===
alias dush='du -sh * | sort -hr'           # "Directory sizes sorted"
alias findlarge='find . -size +100M -exec ls -lh {} \\;' # "Find large files"
alias findold='find . -mtime +365'         # "Find files older than 1 year"

echo "🎯 File System Master Tips:"
echo "1. Everything is a file in Linux"
echo "2. Understand the FHS (Filesystem Hierarchy Standard)"
echo "3. Use find for complex searches, locate for quick lookups"
echo "4. Monitor disk space and inodes regularly"
echo "5. Regular cleanup prevents disk space issues"
echo "🏆 Congratulations! You're now a Linux File System Master!"`
      }
    ]
  }
}
