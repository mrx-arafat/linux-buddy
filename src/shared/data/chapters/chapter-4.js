export const chapter4 = {
  id: '04',
  icon: '💪',
  title: '10 ESSENTIAL COMMANDS',
  description: 'Ten Linux commands and tricks you absolutely must know',
  slug: '10-essential-commands',
  content: {
    overview: 'Welcome to Linux Command Bootcamp! 💪 These aren\'t just any commands - these are the 10 legendary commands that separate Linux legends from GUI peasants. Master these bad boys and you\'ll be flying through tasks while your friends are still right-clicking their way through life like it\'s 2005. We\'re talking about commands so essential that knowing them is basically a requirement for having a tech job that doesn\'t involve asking "Have you tried turning it off and on again?" This isn\'t your typical boring command reference - we\'re going deep with advanced options, pro tips, and real-world scenarios that will make you dangerous with a terminal. By the end of this chapter, you\'ll be that person who makes complex tasks look effortless while everyone else is still figuring out how to open a file manager. Ready to become a command line ninja? Let\'s go! 🥷',
    sections: [
      {
        title: '1. ls - The All-Seeing Eye of the File System 👁️',
        content: 'Meet `ls` - the most used command in Linux history and your new best friend. While Windows users are clicking through folders like they\'re playing a point-and-click adventure game, you\'ll be listing directory contents faster than they can say "File Explorer." This isn\'t just about showing files - `ls` is a Swiss Army knife that can sort, filter, format, and reveal hidden secrets about your file system. Master `ls` and you\'ll never again wonder "what\'s in this folder?" or "when was this file modified?" It\'s like having X-ray vision for your directories, and once you learn its tricks, you\'ll wonder how anyone navigates a computer without it.',
        codeExample: `# === BASIC LS WIZARDRY ===
ls                              # "What\'s in here?" - basic file listing
ls /path/to/directory           # "What\'s in that folder over there?"
ls file1.txt file2.txt          # "Show me specific files"
ls ~                            # "What\'s in my home directory?"
ls /                            # "Show me the root of everything"

# === THE ESSENTIAL LS ARSENAL ===
ls -l                           # "Give me the details!" - long format with permissions
ls -a                           # "Show me EVERYTHING!" - including hidden files
ls -la                          # "Long format + hidden files" - the classic combo
ls -lh                          # "Make file sizes readable" - human format (K, M, G)
ls -lt                          # "Sort by time" - newest files first
ls -ltr                         # "Sort by time reversed" - oldest files first
ls -lS                          # "Sort by size" - biggest files first
ls -lSr                         # "Sort by size reversed" - smallest files first

# === ADVANCED LS SORCERY ===
ls -R                           # "Show me EVERYTHING recursively" - all subdirectories
ls -d */                        # "Only show directories" - ignore files
ls -1                           # "One file per line" - clean vertical listing
ls --color=always               # "Make it colorful" - force colors
ls -i                           # "Show inode numbers" - file system IDs
ls -n                           # "Show numeric IDs" - user/group as numbers
ls -F                           # "Show file types" - / for dirs, * for executables
ls -G                           # "Hide group info" - cleaner output

# === PRO LS COMBINATIONS (the good stuff) ===
ls -lahtr                       # "Ultimate listing" - all files, human readable, time sorted
ls -la | grep "^d"              # "Only directories" - filter with grep
ls -la | grep "^-"              # "Only regular files" - no directories
ls -la | grep "^l"              # "Only symbolic links" - find symlinks
ls -la | grep "$(date +%b\ %d)" # "Files modified today" - today\'s changes
ls -la --time-style=full-iso    # "ISO timestamps" - precise time format
ls -la --time-style=+"%Y-%m-%d %H:%M"  # "Custom time format"

# === PATTERN MATCHING MAGIC ===
ls *.txt                        # "All text files" - wildcard matching
ls *.{jpg,png,gif}              # "All image files" - multiple extensions
ls file*                        # "Files starting with \'file\'"
ls *config*                     # "Files containing \'config\'"
ls file?                        # "Files like \'file\' + one character"
ls [abc]*                       # "Files starting with a, b, or c"
ls [0-9]*                       # "Files starting with numbers"
ls [!a-z]*                      # "Files NOT starting with lowercase letters"

# === SIZE AND SPACE ANALYSIS ===
ls -lhS                         # "Largest files first" - find space hogs
ls -lhSr                        # "Smallest files first" - find tiny files
ls -la | awk \'{sum += $5} END {print "Total size:", sum}\' # "Calculate total size"
ls -la | wc -l                  # "Count files and directories"

# === TIME-BASED EXPLORATION ===
ls -lt | head -10               # "10 most recently modified files"
ls -ltr | head -10              # "10 oldest files"
ls -la --time=atime             # "Sort by access time" - when files were read
ls -la --time=ctime             # "Sort by change time" - when metadata changed
find . -mtime -1 -exec ls -la {} \; # "Files modified in last 24 hours"

# === PRODUCTIVITY ALIASES (add to ~/.bashrc) ===
alias ll=\'ls -alF\'             # "Better long listing"
alias la=\'ls -A\'               # "Show hidden files"
alias l=\'ls -CF\'               # "Compact listing"
alias lt=\'ls -altr\'            # "Sort by time"
alias lsize=\'ls -alSr\'         # "Sort by size"
alias lh=\'ls -lh\'              # "Human readable sizes"
alias tree=\'ls -R\'             # "Poor man\'s tree command"

# === LS TROUBLESHOOTING ===
ls -la /path 2>/dev/null || echo "Directory doesn\'t exist or no permission"
ls --help                       # "Show all options" - when you forget
man ls                          # "Read the manual" - comprehensive guide
\ls                             # "Use ls without aliases" - bypass custom aliases

# === THE LS FLEX COMMANDS ===
ls -la | grep "$(whoami)"       # "Show my files" - files owned by you
ls -la | sort -k5 -nr           # "Sort by file size" - manual sorting
ls -la | awk \'$1 ~ /^d/ {print $9}\' # "Extract directory names" - awk magic
ls -la --color=always | less -R # "Colorful paging" - colors in less`
      },
      {
        title: '2. cd - The Teleportation Device 🚀',
        content: 'The `cd` command is your personal teleportation device through the Linux file system. While Windows users are clicking through folder hierarchies like they\'re playing a maze game, you\'ll be jumping between directories faster than The Flash. This isn\'t just about changing directories - `cd` is about mastering space and time in your file system. Learn its shortcuts and you\'ll navigate Linux like you have a GPS for directories. The best part? Once you master `cd`, you\'ll never again get lost in a file system or waste time clicking through endless folder trees.',
        codeExample: `# === BASIC CD TELEPORTATION ===
cd /path/to/directory           # "Teleport to specific location"
cd                              # "Take me home" - go to home directory
cd ~                            # "Home sweet home" - alternative syntax
cd ~username                    # "Visit someone else\'s home" - other user\'s home
cd /                            # "Go to the top" - root directory
cd /usr/local/bin               # "Jump to binary directory"

# === RELATIVE NAVIGATION MAGIC ===
cd ..                           # "Go up one level" - parent directory
cd ../..                        # "Go up two levels" - grandparent directory
cd ../../other/path             # "Up two, then down to other path"
cd ./subdirectory               # "Go to subdirectory" (. = current directory)
cd ../sibling                   # "Go to sibling directory"

# === THE CD TIME MACHINE ===
cd -                            # "Go back to previous directory" - toggle between two locations
cd ~-                           # "Previous directory" - alternative syntax
echo \$OLDPWD                    # "Where was I before?" - previous directory path
dirs                            # "Show directory stack" - if using pushd/popd

# === ENVIRONMENT VARIABLE SHORTCUTS ===
cd \$HOME                        # "Go home using variable"
cd \$OLDPWD                      # "Go to previous directory using variable"
cd \$PWD                         # "Stay where you are" - current directory
cd \${HOME}/Documents            # "Go to Documents using variable expansion"

# === TAB COMPLETION WIZARDRY ===
# Type partial path and press TAB for auto-completion
cd /usr/lo<TAB>                 # Auto-completes to /usr/local/
cd ~/Do<TAB>                    # Auto-completes to ~/Documents/ or ~/Downloads/
cd /etc/sys<TAB>                # Auto-completes to /etc/systemd/ (if exists)
cd ../pro<TAB>                  # Auto-completes relative paths too

# === HANDLING SPACES AND SPECIAL CHARACTERS ===
cd "My Documents"               # "Spaces in names" - use quotes
cd My\ Documents                # "Escape spaces" - backslash method
cd \'Program Files\'             # "Single quotes work too"
cd "\$(echo \'tricky name\')"     # "Complex name handling"

# === ADVANCED CD COMBINATIONS ===
cd /var/log && ls -la           # "Go and list" - chain commands with &&
cd /etc; pwd; ls                # "Multiple commands" - semicolon separator
cd \$(dirname \$(which python3)) # "Go to Python\'s directory" - command substitution
cd "\$(find /usr -name "firefox" -type d 2>/dev/null | head -1)" # "Find and go"

# === PRODUCTIVITY FUNCTIONS (add to ~/.bashrc) ===
# Create directory and enter it
mkcd() {
    mkdir -p "\$1" && cd "\$1"
    echo "Created and entered: \$1"
}

# Go up n directories
up() {
    local levels=\${1:-1}
    local path=""
    for ((i=1; i<=levels; i++)); do
        path="../\$path"
    done
    cd "\$path"
    pwd
}

# Quick directory bookmarks
bookmark() {
    export "BOOKMARK_\$1"="\$(pwd)"
    echo "Bookmarked \$(pwd) as \$1"
}

go() {
    local bookmark_var="BOOKMARK_\$1"
    local bookmark_path="\${!bookmark_var}"
    if [ -n "\$bookmark_path" ]; then
        cd "\$bookmark_path"
        echo "Jumped to bookmark: \$1 (\$bookmark_path)"
    else
        echo "Bookmark \$1 not found"
    fi
}

# === DIRECTORY STACK MANAGEMENT ===
pushd /path/to/directory        # "Push directory onto stack and go there"
popd                            # "Pop directory from stack and go back"
dirs -v                         # "Show directory stack with numbers"
cd ~1                           # "Go to directory 1 in stack"

# === QUICK NAVIGATION ALIASES ===
alias ..=\'cd ..\'               # "Go up one level"
alias ...=\'cd ../..\'           # "Go up two levels"
alias ....=\'cd ../../..\'       # "Go up three levels"
alias .....=\'cd ../../../..\'   # "Go up four levels"
alias ~=\'cd ~\'                 # "Go home"
alias -- -=\'cd -\'              # "Go to previous directory"

# === CD TROUBLESHOOTING ===
cd /nonexistent 2>/dev/null || echo "Directory doesn\'t exist"
cd - 2>/dev/null || echo "No previous directory"
pwd                             # "Where am I?" - current directory
ls -la                          # "What\'s here?" - list current directory

# === ADVANCED CD TRICKS ===
# Fuzzy directory jumping (if fzf is installed)
cdf() {
    local dir
    dir=\$(find \${1:-.} -type d 2>/dev/null | fzf +m) && cd "\$dir"
}

# Recent directories (requires history)
cdh() {
    local dir
    dir=\$(dirs -l -p | fzf +m) && cd "\$dir"
}

# Jump to git root
cdgit() {
    cd "\$(git rev-parse --show-toplevel 2>/dev/null || echo .)"
}

# === THE CD FLEX COMMANDS ===
cd \$(mktemp -d)                 # "Go to temporary directory"
cd "\$(xdg-user-dir DESKTOP)"    # "Go to desktop directory"
cd "\$(xdg-user-dir DOWNLOAD)"   # "Go to downloads directory"
cd /proc/\$\$                     # "Go to current process directory"

# Usage examples:
# mkcd ~/projects/new-project   # Create and enter directory
# up 3                          # Go up 3 directories
# bookmark work                 # Bookmark current directory as "work"
# go work                       # Jump to "work" bookmark`
      },
      {
        title: '3. grep - The Text Detective 🔍',
        content: 'Meet `grep` - the Sherlock Holmes of text searching. While others are manually scanning through files like they\'re reading a novel, you\'ll be finding needles in haystacks with surgical precision. `grep` doesn\'t just search - it\'s a pattern-matching powerhouse that can find anything in any file, anywhere. Master `grep` and you\'ll never again waste time manually looking for that one line of code, log entry, or configuration setting. It\'s like having a search engine for your entire file system.',
        codeExample: `# === BASIC GREP DETECTIVE WORK ===
grep "pattern" file.txt         # "Find pattern in file"
grep "error" /var/log/syslog    # "Find errors in system log"
grep "TODO" *.js                # "Find TODOs in JavaScript files"
grep "function" script.py       # "Find function definitions"
grep "192.168" /etc/hosts       # "Find IP addresses in hosts file"

# === CASE-INSENSITIVE SEARCHING ===
grep -i "error" file.txt        # "Find \'error\', \'Error\', \'ERROR\', etc."
grep -i "password" config.txt   # "Find password regardless of case"
grep -i "warning" /var/log/*    # "Case-insensitive warning search"

# === RECURSIVE SEARCHING (the power move) ===
grep -r "pattern" /path/        # "Search recursively in directory"
grep -r "TODO" ~/projects/      # "Find all TODOs in projects"
grep -r "import" . --include="*.py"  # "Find imports in Python files only"
grep -r "console.log" . --exclude-dir=node_modules  # "Exclude node_modules"

# === LINE NUMBERS AND CONTEXT ===
grep -n "pattern" file.txt      # "Show line numbers"
grep -A 3 "error" log.txt       # "Show 3 lines After match"
grep -B 2 "function" script.js  # "Show 2 lines Before match"
grep -C 5 "exception" app.log   # "Show 5 lines of Context (before and after)"

# === COUNTING AND STATISTICS ===
grep -c "pattern" file.txt      # "Count matching lines"
grep -c "error" /var/log/syslog # "Count errors in log"
grep -v "pattern" file.txt      # "Show lines that DON\'T match (invert)"
grep -l "pattern" *.txt         # "List files containing pattern"
grep -L "pattern" *.txt         # "List files NOT containing pattern"

# === REGULAR EXPRESSIONS (the advanced stuff) ===
grep "^start" file.txt          # "Lines starting with \'start\'"
grep "end$" file.txt            # "Lines ending with \'end\'"
grep "^$" file.txt              # "Empty lines"
grep "[0-9]" file.txt           # "Lines containing numbers"
grep "[a-zA-Z]" file.txt        # "Lines containing letters"
grep "colou?r" file.txt         # "Color or colour (? = optional)"
grep "test.*case" file.txt      # "\'test\' followed by \'case\' (.* = anything)"

# === EXTENDED REGEX (grep -E or egrep) ===
grep -E "pattern1|pattern2" file.txt    # "Pattern1 OR pattern2"
grep -E "(error|warning|critical)" log.txt  # "Multiple log levels"
grep -E "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" file.txt  # "IP addresses"
grep -E "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" file.txt  # "Email addresses"

# === PRACTICAL GREP COMBINATIONS ===
ps aux | grep firefox           # "Find Firefox processes"
history | grep ssh              # "Find SSH commands in history"
cat /etc/passwd | grep bash     # "Find users with bash shell"
ls -la | grep "^d"              # "Find directories only"
dmesg | grep -i error           # "Find kernel errors"

# === FILE TYPE FILTERING ===
grep -r "pattern" . --include="*.js"     # "Only JavaScript files"
grep -r "pattern" . --include="*.py"     # "Only Python files"
grep -r "pattern" . --include="*.{c,h}"  # "Only C source and header files"
grep -r "pattern" . --exclude="*.log"    # "Exclude log files"
grep -r "pattern" . --exclude-dir=".git" # "Exclude .git directories"

# === GREP WITH COLORS AND FORMATTING ===
grep --color=always "pattern" file.txt   # "Highlight matches in color"
grep --color=always "error" /var/log/syslog | less -R  # "Colorful paging"
export GREP_OPTIONS=\'--color=always\'    # "Always use colors (add to ~/.bashrc)"

# === ADVANCED GREP TRICKS ===
# Find files modified today containing pattern
find . -mtime 0 -exec grep -l "pattern" {} \;

# Search for pattern in compressed files
zgrep "pattern" file.gz         # "Search in gzipped files"
zgrep "error" /var/log/*.gz     # "Search compressed logs"

# Multiple patterns from file
grep -f patterns.txt file.txt   # "Use patterns from file"
echo -e "error\nwarning\ncritical" > patterns.txt

# === GREP PERFORMANCE OPTIMIZATION ===
grep -F "literal_string" file.txt        # "Fixed string (faster, no regex)"
grep --mmap "pattern" large_file.txt     # "Use memory mapping for large files"
LC_ALL=C grep "pattern" file.txt         # "Use C locale for speed"

# === GREP TROUBLESHOOTING ===
grep "pattern" file.txt 2>/dev/null || echo "File not found or no matches"
grep -q "pattern" file.txt && echo "Found" || echo "Not found"  # "Quiet mode"
grep --help | grep -i color    # "Find color options in help"

# === THE GREP FLEX COMMANDS ===
grep -r "password" /etc/ 2>/dev/null | grep -v "#"  # "Find passwords, ignore comments"
grep -E "^[[:space:]]*$" file.txt | wc -l  # "Count blank lines"
grep -o "[0-9]\+" file.txt      # "Extract only numbers"
grep -P "(?<=error: ).*" log.txt # "Perl regex lookbehind (if supported)"

# === USEFUL GREP ALIASES ===
alias grepi=\'grep -i\'          # "Case-insensitive grep"
alias grepr=\'grep -r\'          # "Recursive grep"
alias grepn=\'grep -n\'          # "Grep with line numbers"
alias grepv=\'grep -v\'          # "Inverted grep"
alias grepcount=\'grep -c\'      # "Count matches"`
      },
      {
        title: '4. find - The File Hunter 🎯',
        content: 'The `find` command is your personal bloodhound for tracking down files and directories. While others are manually browsing through folder after folder like they\'re on a treasure hunt, you\'ll be locating any file, anywhere, with laser precision. `find` isn\'t just about finding files by name - it can search by size, date, permissions, type, and even execute commands on what it finds. Master `find` and you\'ll never again lose a file or waste time manually searching through directories.',
        codeExample: `# === BASIC FILE HUNTING ===
find . -name "filename.txt"     # "Find file by exact name"
find . -name "*.txt"            # "Find all text files"
find . -name "config*"          # "Find files starting with \'config\'"
find /home -name "*.log"        # "Find log files in /home"
find . -iname "README*"         # "Case-insensitive name search"

# === FIND BY FILE TYPE ===
find . -type f                  # "Find regular files only"
find . -type d                  # "Find directories only"
find . -type l                  # "Find symbolic links only"
find . -type f -name "*.sh"     # "Find shell script files"
find . -type d -name ".*"       # "Find hidden directories"

# === FIND BY SIZE (the space hunters) ===
find . -size +100M              # "Find files larger than 100MB"
find . -size -1k                # "Find files smaller than 1KB"
find . -size +1G                # "Find files larger than 1GB"
find /var -size +500M -type f   # "Find large files in /var"
find . -empty                   # "Find empty files and directories"

# === FIND BY TIME (the time travelers) ===
find . -mtime -7                # "Files modified in last 7 days"
find . -mtime +30               # "Files modified more than 30 days ago"
find . -atime -1                # "Files accessed in last 24 hours"
find . -ctime -1                # "Files changed in last 24 hours"
find . -newer reference_file    # "Files newer than reference file"

# === FIND BY PERMISSIONS ===
find . -perm 755                # "Find files with exact permissions 755"
find . -perm -644               # "Find files with at least 644 permissions"
find . -perm /u+w               # "Find files writable by owner"
find /usr/bin -perm -4000       # "Find SUID files (security check)"
find . -user username           # "Find files owned by user"
find . -group groupname         # "Find files owned by group"

# === EXECUTE COMMANDS ON FOUND FILES ===
find . -name "*.tmp" -delete    # "Find and delete temp files"
find . -name "*.log" -exec ls -lh {} \;  # "Find logs and show details"
find . -type f -exec chmod 644 {} \;     # "Find files and set permissions"
find . -name "*.txt" -exec grep "pattern" {} \;  # "Find text files and search in them"
find . -name "*.jpg" -exec cp {} /backup/ \;     # "Find and copy images"

# === ADVANCED FIND COMBINATIONS ===
find . -name "*.js" -not -path "*/node_modules/*"  # "Find JS files, exclude node_modules"
find . -type f \( -name "*.txt" -o -name "*.log" \)  # "Find text OR log files"
find . -type f -name "*.py" -exec wc -l {} + | sort -n  # "Count lines in Python files"
find /var/log -name "*.log" -mtime +7 -delete  # "Delete old log files"

# === FIND WITH DEPTH CONTROL ===
find . -maxdepth 1 -name "*.txt"  # "Search only current directory"
find . -mindepth 2 -name "*.conf" # "Skip current directory, search deeper"
find . -maxdepth 3 -type d        # "Find directories up to 3 levels deep"

# === PRACTICAL FIND SCENARIOS ===
# Find large files eating disk space
find / -type f -size +100M 2>/dev/null | head -10

# Find recently modified config files
find /etc -name "*.conf" -mtime -1 2>/dev/null

# Find world-writable files (security check)
find / -type f -perm -002 2>/dev/null

# Find files without owner (orphaned files)
find / -nouser -o -nogroup 2>/dev/null

# Find duplicate files by size
find . -type f -exec ls -s {} \; | sort -n | uniq -d

# === FIND WITH REGEX ===
find . -regex ".*\.(jpg|png|gif)$"  # "Find image files using regex"
find . -regex ".*/[0-9]+\.txt$"     # "Find numbered text files"

# === FIND PERFORMANCE OPTIMIZATION ===
find . -name "*.txt" -print0 | xargs -0 grep "pattern"  # "Efficient search in found files"
find . -type f -name "*.log" | head -100  # "Limit results for performance"

# === FIND TROUBLESHOOTING ===
find . -name "pattern" 2>/dev/null  # "Suppress permission denied errors"
find . -name "pattern" -print       # "Explicitly print results"
find . -name "pattern" | wc -l      # "Count found files"

# === THE FIND FLEX COMMANDS ===
find . -type f -printf "%s %p\n" | sort -rn | head -10  # "Top 10 largest files"
find . -type f -name "*.txt" -exec basename {} \; | sort | uniq  # "Unique basenames"
find . -type f -newermt "2024-01-01" ! -newermt "2024-12-31"  # "Files from 2024"
find . -type f -exec file {} \; | grep "text"  # "Find text files by content type"

# === USEFUL FIND ALIASES ===
alias findn=\'find . -name\'       # "Quick name search"
alias findt=\'find . -type\'       # "Quick type search"
alias finds=\'find . -size\'       # "Quick size search"
alias findx=\'find . -executable\' # "Find executable files"`
      },
      {
        title: '5. ps - The Process Spy 🕵️',
        content: 'The `ps` command is your window into the soul of your Linux system - showing you every process that\'s running. While Windows Task Manager shows you a dumbed-down view of what\'s happening, `ps` gives you the raw, unfiltered truth about every single process on your system. It\'s like having X-ray vision for your computer\'s brain, showing you what\'s running, who started it, how much resources it\'s using, and most importantly - what you can kill when things go wrong.',
        codeExample: `# === BASIC PROCESS RECONNAISSANCE ===
ps                              # "Show my processes" - current user\'s processes
ps aux                          # "Show EVERYTHING!" - all processes, all users
ps -ef                          # "Alternative format" - full process listing
ps -u username                  # "Show processes for specific user"
ps -C firefox                  # "Show processes by command name"

# === PROCESS FILTERING AND SEARCHING ===
ps aux | grep firefox           # "Find Firefox processes"
ps aux | grep -v grep           # "Remove grep from results"
ps aux | grep [f]irefox          # "Clever way to exclude grep"
ps aux | head -20               # "Show top 20 processes"

# === SORTING PROCESSES ===
ps aux --sort=-%cpu             # "Sort by CPU usage (highest first)"
ps aux --sort=-%mem             # "Sort by memory usage (highest first)"
ps aux --sort=-rss              # "Sort by RAM usage"
ps aux --sort=pid               # "Sort by process ID"

# === PROCESS TREE VISUALIZATION ===
ps auxf                         # "Show process tree (forest view)"
ps -ejH                         # "Show process hierarchy"
pstree                          # "Visual process tree" (if installed)
pstree -p                       # "Process tree with PIDs"

# === CUSTOM PS OUTPUT ===
ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem  # "Custom columns"
ps -eo pid,user,cmd,start       # "PID, user, command, start time"
ps -eo pid,cmd,etime            # "Process runtime"

# === PROCESS STATE ANALYSIS ===
ps aux | awk \'$8 ~ /^Z/ {print $2, $11}\'  # "Find zombie processes"
ps aux | awk \'$8 ~ /^R/ {print $2, $11}\'  # "Find running processes"
ps aux | awk \'$8 ~ /^S/ {print $2, $11}\'  # "Find sleeping processes"

# === PRACTICAL PS COMBINATIONS ===
ps aux | grep -E "(apache|nginx|httpd)"     # "Find web server processes"
ps aux | grep -E "(mysql|postgres|mongo)"   # "Find database processes"
ps aux | grep -E "(ssh|sshd)"              # "Find SSH processes"

# === USEFUL PS ALIASES ===
alias psa=\'ps aux\'              # "Show all processes"
alias psg=\'ps aux | grep\'       # "Search processes"
alias psc=\'ps aux --sort=-%cpu\' # "Sort by CPU"
alias psm=\'ps aux --sort=-%mem\' # "Sort by memory"`
      },
      {
        title: '6. chmod - The Permission Wizard 🧙‍♂️',
        content: 'The `chmod` command is your magic wand for controlling who can do what with your files. While other operating systems hide permissions behind confusing dialog boxes, Linux gives you precise control with simple, logical commands. Master `chmod` and you\'ll never again wonder why a script won\'t run or why you can\'t edit a file.',
        codeExample: `# === BASIC PERMISSION MAGIC ===
chmod +x script.sh              # "Make script executable" - most common use
chmod -x script.sh              # "Remove execute permission"
chmod +r file.txt               # "Make file readable"
chmod +w file.txt               # "Make file writable"
chmod -w file.txt               # "Make file read-only"

# === OCTAL PERMISSION SYSTEM ===
chmod 755 script.sh             # "rwxr-xr-x" - owner: full, others: read+execute
chmod 644 document.txt          # "rw-r--r--" - owner: read+write, others: read
chmod 600 secret.txt            # "rw-------" - owner only
chmod 777 file.txt              # "rwxrwxrwx" - everyone can do everything (dangerous!)

# === SYMBOLIC PERMISSION SYSTEM ===
chmod u+x file.sh               # "Give owner execute permission"
chmod g-w file.txt              # "Remove group write permission"
chmod o+r file.txt              # "Give others read permission"
chmod a+x program               # "Give everyone execute permission"

# === RECURSIVE PERMISSION CHANGES ===
chmod -R 755 directory/         # "Apply 755 to directory and all contents"
chmod -R u+x ~/scripts/         # "Make all scripts executable"

# === PRACTICAL CHMOD SCENARIOS ===
find ~/scripts -name "*.sh" -exec chmod +x {} \;  # "Make all scripts executable"
chmod 600 ~/.ssh/id_rsa         # "Private key: owner read/write only"
chmod 644 ~/.ssh/id_rsa.pub     # "Public key: owner write, all read"
chmod 700 ~/.ssh/               # "SSH directory: owner only"

# === PERMISSION CHECKING ===
ls -l file.txt                  # "Show current permissions"
stat file.txt                   # "Detailed file information"
ls -ld directory/               # "Show directory permissions"

# === USEFUL CHMOD ALIASES ===
alias chx=\'chmod +x\'           # "Quick executable"
alias chr=\'chmod +r\'           # "Quick readable"
alias ch755=\'chmod 755\'        # "Quick 755"
alias ch644=\'chmod 644\'        # "Quick 644"`
      },
      {
        title: '7. cat - The File Reader 📖',
        content: 'The `cat` command is your speed-reading superpower for files. While others are opening files in slow text editors just to peek at content, you\'ll be displaying file contents instantly in your terminal. `cat` doesn\'t just read files - it can combine them, number lines, show hidden characters, and even create files on the fly. It\'s simple, fast, and incredibly versatile.',
        codeExample: `# === BASIC FILE READING ===
cat file.txt                    # "Show me the file content"
cat /etc/passwd                 # "Show user database"
cat /etc/hosts                  # "Show hostname mappings"
cat ~/.bashrc                   # "Show bash configuration"

# === MULTIPLE FILES ===
cat file1.txt file2.txt         # "Show multiple files in sequence"
cat *.txt                       # "Show all text files"
cat config/*.conf               # "Show all config files"

# === CAT WITH LINE NUMBERS ===
cat -n file.txt                 # "Show file with line numbers"
cat -b file.txt                 # "Number only non-blank lines"

# === SHOW HIDDEN CHARACTERS ===
cat -A file.txt                 # "Show all characters (tabs, line endings)"
cat -T file.txt                 # "Show tabs as ^I"
cat -E file.txt                 # "Show line endings as $"
cat -v file.txt                 # "Show non-printing characters"

# === CREATE FILES WITH CAT ===
cat > newfile.txt               # "Create file (type content, Ctrl+D to save)"
cat >> existing.txt             # "Append to file"
cat << EOF > script.sh          # "Create file with here document"
#!/bin/bash
echo "Hello World"
EOF

# === PRACTICAL CAT COMBINATIONS ===
cat /var/log/syslog | tail -20  # "Show last 20 log lines"
cat file.txt | grep "pattern"   # "Search in file content"
cat file.txt | wc -l            # "Count lines in file"
cat file.txt | sort             # "Show file content sorted"

# === USEFUL CAT ALIASES ===
alias catn=\'cat -n\'            # "Cat with line numbers"
alias cata=\'cat -A\'            # "Cat showing all characters"`
      },
      {
        title: '8. cp - The File Duplicator 📋',
        content: 'The `cp` command is your file cloning machine. While others are right-clicking and selecting "copy" like amateurs, you\'ll be duplicating files and directories with precision and speed. `cp` isn\'t just about copying - it can preserve permissions, create backups, and handle complex copying scenarios that would make GUI file managers cry.',
        codeExample: `# === BASIC FILE COPYING ===
cp source.txt destination.txt   # "Copy file to new name"
cp file.txt /path/to/directory/ # "Copy file to directory"
cp file.txt backup.txt          # "Create backup copy"

# === DIRECTORY COPYING ===
cp -r directory/ backup/        # "Copy directory recursively"
cp -R source_dir/ dest_dir/     # "Alternative recursive syntax"

# === PRESERVE ATTRIBUTES ===
cp -p file.txt copy.txt         # "Preserve permissions and timestamps"
cp -a directory/ backup/        # "Archive mode (preserve everything)"

# === INTERACTIVE AND SAFE COPYING ===
cp -i file.txt existing.txt     # "Ask before overwriting"
cp -n file.txt existing.txt     # "Never overwrite existing files"
cp -u source.txt dest.txt       # "Update only if source is newer"

# === BACKUP WHILE COPYING ===
cp --backup=numbered file.txt dest.txt  # "Create numbered backups"
cp -b file.txt dest.txt         # "Create simple backup"

# === PRACTICAL CP SCENARIOS ===
cp ~/.bashrc ~/.bashrc.backup   # "Backup bash config"
cp -r ~/projects/ /backup/      # "Backup entire projects directory"
cp /etc/hosts /etc/hosts.\$(date +%Y%m%d)  # "Timestamped backup"

# === USEFUL CP ALIASES ===
alias cpr=\'cp -r\'              # "Recursive copy"
alias cpi=\'cp -i\'              # "Interactive copy"
alias cpb=\'cp -b\'              # "Copy with backup"`
      },
      {
        title: '9. mv - The File Teleporter 🚚',
        content: 'The `mv` command is your file and directory teleportation device. It moves files, renames them, and reorganizes your file system with surgical precision. Unlike copy operations that leave the original behind, `mv` actually relocates files, making it perfect for organizing, renaming, and restructuring your digital world.',
        codeExample: `# === BASIC FILE MOVING ===
mv oldname.txt newname.txt      # "Rename file"
mv file.txt /path/to/directory/ # "Move file to directory"
mv *.txt documents/             # "Move all text files to documents"

# === DIRECTORY MOVING ===
mv old_directory/ new_directory/ # "Rename directory"
mv temp/ /home/user/projects/   # "Move directory to new location"

# === SAFE MOVING ===
mv -i file.txt destination/     # "Ask before overwriting"
mv -n file.txt destination/     # "Never overwrite existing files"
mv -u source.txt dest.txt       # "Move only if source is newer"

# === BACKUP WHILE MOVING ===
mv --backup=numbered file.txt dest.txt  # "Create numbered backup of destination"
mv -b file.txt dest.txt         # "Create simple backup"

# === PRACTICAL MV SCENARIOS ===
mv ~/Downloads/*.pdf ~/Documents/  # "Organize downloaded PDFs"
mv project_old/ project_\$(date +%Y%m%d)/  # "Rename with timestamp"
mv *.log /var/log/archive/      # "Archive log files"

# === BULK RENAMING TRICKS ===
for file in *.txt; do mv "\$file" "\${file%.txt}.bak"; done  # "Change .txt to .bak"
for file in IMG_*.jpg; do mv "\$file" "photo_\${file#IMG_}"; done  # "Rename IMG_ to photo_"

# === USEFUL MV ALIASES ===
alias mvi=\'mv -i\'              # "Interactive move"
alias mvb=\'mv -b\'              # "Move with backup"`
      },
      {
        title: '10. rm - The Digital Destroyer 💥',
        content: 'The `rm` command is the most powerful and dangerous tool in your Linux arsenal. It can delete files and directories permanently - no recycle bin, no undo, no mercy. Master `rm` and you\'ll efficiently clean up your system, but respect it because one wrong command can delete your entire digital life. With great power comes great responsibility!',
        codeExample: `# === BASIC FILE DELETION ===
rm file.txt                     # "Delete file permanently"
rm file1.txt file2.txt          # "Delete multiple files"
rm *.tmp                        # "Delete all temp files"

# === DIRECTORY DELETION ===
rm -r directory/                # "Delete directory and contents recursively"
rm -rf directory/               # "Force delete directory (no prompts)"
rmdir empty_directory/          # "Delete empty directory only"

# === SAFE DELETION ===
rm -i file.txt                  # "Ask before deleting each file"
rm -I *.txt                     # "Ask once before deleting many files"

# === FORCE DELETION ===
rm -f file.txt                  # "Force delete (ignore non-existent files)"
rm -rf directory/               # "Force recursive delete (DANGEROUS!)"

# === PRACTICAL RM SCENARIOS ===
rm ~/.cache/*                   # "Clear user cache"
rm /tmp/*                       # "Clear temp files"
find . -name "*.tmp" -delete    # "Find and delete temp files"
find . -type f -mtime +30 -delete  # "Delete files older than 30 days"

# === SAFETY MEASURES ===
# Create a safer rm alias
alias rm=\'rm -i\'               # "Always ask before deleting"
alias rmi=\'rm -i\'              # "Interactive delete"
alias rmf=\'\\rm -f\'            # "Force delete (bypass alias)"

# === THE NUCLEAR OPTIONS (use with extreme caution!) ===
# rm -rf /                      # "Delete everything" - DON\'T DO THIS!
# rm -rf /*                     # "Delete all files" - ALSO DON\'T DO THIS!
# rm -rf ~/*                    # "Delete all user files" - SERIOUSLY, DON\'T!

# === SAFER ALTERNATIVES ===
trash file.txt                  # "Move to trash" (if trash-cli installed)
mv file.txt ~/.local/share/Trash/  # "Manual trash"

# === RM RECOVERY (when you mess up) ===
# Unfortunately, rm is permanent. Prevention is key:
# - Always use -i flag for important deletions
# - Make backups before major cleanups
# - Use version control for code
# - Consider using trash instead of rm

echo "Remember: rm is permanent. There is no undo. Be careful!"
echo "🚨 ALWAYS double-check your rm commands before pressing Enter! 🚨"`
      }
    ]
  }
}
