export const chapter4 = {
  id: '04',
  icon: '💪',
  title: '10 ESSENTIAL COMMANDS',
  description: 'Ten Linux commands and tricks you absolutely must know',
  slug: '10-essential-commands',
  content: {
    overview: 'Master the 10 most critical Linux commands that form the foundation of every Linux user\'s toolkit. These commands are so fundamental that you\'ll use them daily, whether you\'re a system administrator, developer, or power user. This comprehensive guide covers not just the basic usage, but advanced options, practical examples, and pro tips that will make you incredibly efficient on the command line.',
    sections: [
      {
        title: '1. ls - List Directory Contents (The Explorer)',
        content: 'The ls command is your window into the file system. It\'s the most frequently used command for exploring directories and understanding file properties. Mastering ls with its numerous options will dramatically improve your file system navigation efficiency.',
        codeExample: `# Basic listing
ls                     # List files in current directory
ls /path/to/directory  # List files in specific directory
ls file1 file2         # List specific files

# Essential options
ls -l                  # Long format (detailed information)
ls -a                  # Show all files (including hidden files starting with .)
ls -la                 # Combine long format with hidden files
ls -lh                 # Human readable file sizes (K, M, G)
ls -lt                 # Sort by modification time (newest first)
ls -ltr                # Sort by time (oldest first)
ls -lS                 # Sort by file size (largest first)
ls -lSr                # Sort by file size (smallest first)

# Advanced options
ls -R                  # Recursive listing (show subdirectories)
ls -d */               # List only directories
ls -1                  # One file per line
ls --color=always      # Force color output
ls -i                  # Show inode numbers
ls -n                  # Show numeric user and group IDs
ls -F                  # Add file type indicators (/ for dirs, * for executables)

# Practical combinations
ls -lahtr              # All files, human readable, sorted by time (oldest first)
ls -la | grep "^d"     # List only directories
ls -la | grep "^-"     # List only regular files
ls -la | grep "$(date +%b\ %d)"  # Files modified today
ls -la --time-style=full-iso     # ISO timestamp format

# Filtering and patterns
ls *.txt               # List all .txt files
ls file*               # List files starting with "file"
ls file?               # List files like "file" + one character
ls [abc]*              # List files starting with a, b, or c
ls {*.txt,*.log}       # List .txt and .log files

# Useful aliases to add to ~/.bashrc
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias lt='ls -altr'    # Sort by time
alias lsize='ls -alSr' # Sort by size`
      },
      {
        title: '2. cd - Change Directory (The Navigator)',
        content: 'The cd command is your vehicle for navigating the Linux file system. Understanding its shortcuts and advanced features will make you incredibly fast at moving around directories. Combined with proper use of paths and shortcuts, cd becomes a powerful navigation tool.',
        codeExample: `# Basic navigation
cd /path/to/directory  # Go to specific directory
cd                     # Go to home directory (same as cd ~)
cd ~                   # Go to home directory
cd ~username           # Go to another user's home directory
cd /                   # Go to root directory

# Relative navigation
cd ..                  # Go up one directory (parent)
cd ../..               # Go up two directories
cd ../../other/path    # Go up two levels then down to other/path
cd ./subdirectory      # Go to subdirectory (. means current directory)

# Advanced navigation shortcuts
cd -                   # Go to previous directory (toggle between two directories)
cd ~-                  # Go to previous directory (alternative syntax)

# Using environment variables
cd $HOME               # Go to home directory
cd $OLDPWD             # Go to previous directory

# Tab completion tricks
cd /usr/lo<TAB>        # Auto-complete to /usr/local/
cd ~/Do<TAB>           # Auto-complete to ~/Documents/ or ~/Downloads/

# Working with spaces in directory names
cd "My Documents"      # Use quotes for spaces
cd My\ Documents       # Escape spaces with backslash
cd 'Program Files'     # Single quotes also work

# Practical examples
cd /var/log && ls -la  # Change directory and list contents
cd /etc; pwd; ls       # Multiple commands with semicolon
cd $(dirname $(which python3))  # Go to directory containing python3

# Useful functions to add to ~/.bashrc
# Create and enter directory
mkcd() { mkdir -p "$1" && cd "$1"; }

# Go up n directories
up() { 
    local d=""
    limit=$1
    for ((i=1 ; i <= limit ; i++)); do
        d=$d/..
    done
    d=$(echo $d | sed 's/^\///')
    if [ -z "$d" ]; then
        d=..
    fi
    cd $d
}

# Usage: up 3 (goes up 3 directories)

# Directory bookmarks
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'`
      }
    ]
  }
}
