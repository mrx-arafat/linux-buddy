export const chapters = [
  {
    id: '01',
    icon: '🐧',
    title: 'START USING LINUX',
    description: 'How to get started with Linux',
    slug: 'start-using-linux',
    content: {
      overview: 'Learn the fundamentals of getting started with Linux, from choosing a distribution to your first commands.',
      sections: [
        {
          title: 'What is Linux?',
          content: 'Linux is a free and open-source operating system kernel that forms the foundation of many operating systems called distributions.',
          codeExample: `# Check your Linux distribution
cat /etc/os-release

# Check kernel version
uname -r

# Display system information
uname -a`
        },
        {
          title: 'Choosing a Linux Distribution',
          content: 'Popular beginner-friendly distributions include Ubuntu, Linux Mint, and Fedora.',
          codeExample: `# Ubuntu - Most popular beginner distribution
# Download from: https://ubuntu.com

# Linux Mint - User-friendly with familiar interface
# Download from: https://linuxmint.com

# Fedora - Cutting-edge features
# Download from: https://getfedora.org`
        },
        {
          title: 'First Steps After Installation',
          content: 'Essential commands and setup tasks for new Linux users.',
          codeExample: `# Update your system
sudo apt update && sudo apt upgrade

# Install essential packages
sudo apt install curl wget git vim

# Check available disk space
df -h

# View running processes
ps aux

# Check system uptime
uptime`
        }
      ]
    }
  },
  {
    id: '02',
    icon: '💿',
    title: '10 LINUX DISTROS',
    description: 'Ten awesome Linux distros explained',
    slug: '10-linux-distros',
    content: {
      overview: 'Explore the most popular Linux distributions and understand which one might be right for you.',
      sections: [
        {
          title: 'Ubuntu',
          content: 'The most popular Linux distribution, perfect for beginners with excellent community support.',
          codeExample: `# Ubuntu package management
sudo apt update
sudo apt install package-name
sudo apt remove package-name

# Ubuntu version info
lsb_release -a`
        },
        {
          title: 'CentOS/RHEL',
          content: 'Enterprise-focused distributions known for stability and long-term support.',
          codeExample: `# CentOS/RHEL package management
sudo yum update
sudo yum install package-name
sudo yum remove package-name

# Or with newer dnf
sudo dnf install package-name`
        },
        {
          title: 'Arch Linux',
          content: 'A rolling-release distribution for advanced users who want cutting-edge software.',
          codeExample: `# Arch package management with pacman
sudo pacman -Syu  # Update system
sudo pacman -S package-name  # Install package
sudo pacman -R package-name  # Remove package

# AUR helper (yay)
yay -S aur-package-name`
        }
      ]
    }
  },
  {
    id: '03',
    icon: '🤘',
    title: 'LINUX 101',
    description: '101 words you must know in the Linux/GNU ecosystem',
    slug: 'linux-101',
    content: {
      overview: 'Essential Linux terminology and concepts every user should understand.',
      sections: [
        {
          title: 'File System Hierarchy',
          content: 'Understanding the Linux directory structure and important locations.',
          codeExample: `# Root directory
/

# User home directories
/home/username

# System binaries
/bin, /usr/bin

# Configuration files
/etc

# Variable data
/var

# Temporary files
/tmp`
        },
        {
          title: 'Permissions and Ownership',
          content: 'Linux file permissions and user/group ownership concepts.',
          codeExample: `# View file permissions
ls -la

# Change permissions (rwx = read, write, execute)
chmod 755 filename
chmod u+x filename  # Add execute for user

# Change ownership
sudo chown user:group filename
sudo chown -R user:group directory/`
        },
        {
          title: 'Processes and Services',
          content: 'Understanding how Linux manages running programs and system services.',
          codeExample: `# View running processes
ps aux
top
htop

# Kill a process
kill PID
killall process-name

# Manage services
sudo systemctl start service-name
sudo systemctl stop service-name
sudo systemctl status service-name`
        }
      ]
    }
  },
  {
    id: '04',
    icon: '💪',
    title: '10 ESSENTIAL COMMANDS',
    description: 'Ten Linux commands and tricks you absolutely must know',
    slug: '10-essential-commands',
    content: {
      overview: 'Master the most important Linux commands that every user needs to know.',
      sections: [
        {
          title: 'Navigation Commands',
          content: 'Essential commands for moving around the file system.',
          codeExample: `# Print working directory
pwd

# List directory contents
ls
ls -la  # Detailed list with hidden files
ls -lh  # Human readable file sizes

# Change directory
cd /path/to/directory
cd ~     # Go to home directory
cd ..    # Go up one directory
cd -     # Go to previous directory`
        },
        {
          title: 'File Operations',
          content: 'Commands for creating, copying, moving, and deleting files.',
          codeExample: `# Create files and directories
touch filename
mkdir directory-name
mkdir -p path/to/nested/directory

# Copy files and directories
cp source destination
cp -r source-dir destination-dir

# Move/rename files
mv oldname newname
mv file /new/location/

# Remove files and directories
rm filename
rm -r directory
rm -rf directory  # Force remove`
        },
        {
          title: 'Text Processing',
          content: 'Commands for viewing and manipulating text files.',
          codeExample: `# View file contents
cat filename
less filename
head filename     # First 10 lines
tail filename     # Last 10 lines
tail -f filename  # Follow file changes

# Search in files
grep "pattern" filename
grep -r "pattern" directory/
grep -i "pattern" filename  # Case insensitive

# Count lines, words, characters
wc filename
wc -l filename  # Count lines only`
        }
      ]
    }
  },
  {
    id: '05',
    icon: '🗃️',
    title: 'THE FILE SYSTEM',
    description: 'Every Linux directory explained',
    slug: 'the-file-system',
    content: {
      overview: 'Understanding the Linux file system hierarchy and important directories.',
      sections: [
        {
          title: 'Root Directory Structure',
          content: 'The Linux file system starts at the root (/) and branches out into various directories.',
          codeExample: `# Navigate to root
cd /

# List root directories
ls -la /

# Important directories:
/bin     # Essential binaries
/etc     # Configuration files
/home    # User home directories
/var     # Variable data
/tmp     # Temporary files
/usr     # User programs`
        }
      ]
    }
  },
  {
    id: '06',
    icon: '🗺️',
    title: 'WTF IS $PATH',
    description: 'What is the PATH environment variable?',
    slug: 'wtf-is-path',
    content: {
      overview: 'Learn about the PATH environment variable and how Linux finds executables.',
      sections: [
        {
          title: 'Understanding PATH',
          content: 'PATH tells the shell where to look for executable files.',
          codeExample: `# View current PATH
echo $PATH

# Add directory to PATH
export PATH=$PATH:/new/directory

# Make PATH change permanent
echo 'export PATH=$PATH:/new/directory' >> ~/.bashrc`
        }
      ]
    }
  },
  {
    id: '07',
    icon: '🔐',
    title: 'FILE PERMISSIONS',
    description: 'How read, write, execute permissions work',
    slug: 'file-permissions',
    content: {
      overview: 'Master Linux file permissions and ownership to secure your system.',
      sections: [
        {
          title: 'Understanding Permission Bits',
          content: 'Linux uses a 3-bit system for read (r), write (w), and execute (x) permissions.',
          codeExample: `# View file permissions
ls -la

# Permission format: rwxrwxrwx
# Owner | Group | Others
# 421   | 421   | 421

# Common permission numbers:
# 755 = rwxr-xr-x (executable files)
# 644 = rw-r--r-- (regular files)
# 600 = rw------- (private files)`
        },
        {
          title: 'Changing Permissions',
          content: 'Use chmod to modify file permissions with numeric or symbolic notation.',
          codeExample: `# Numeric method
chmod 755 script.sh
chmod 644 document.txt
chmod 600 private.key

# Symbolic method
chmod u+x script.sh      # Add execute for user
chmod g-w file.txt       # Remove write for group
chmod o-r secret.txt     # Remove read for others
chmod a+r public.txt     # Add read for all`
        },
        {
          title: 'Ownership and Groups',
          content: 'Every file has an owner and group. Use chown and chgrp to change them.',
          codeExample: `# Change owner
sudo chown username file.txt
sudo chown username:groupname file.txt

# Change group only
sudo chgrp groupname file.txt

# Recursive changes
sudo chown -R username:groupname directory/

# View current user and groups
whoami
groups
id`
        }
      ]
    }
  },
  {
    id: '08',
    icon: '🦸',
    title: 'SUDO',
    description: 'Run commands with elevated privileges with sudo',
    slug: 'sudo',
    content: {
      overview: 'Learn to safely execute commands with administrative privileges using sudo.',
      sections: [
        {
          title: 'What is Sudo?',
          content: 'Sudo allows users to run commands as another user, typically root, with proper authentication.',
          codeExample: `# Run command as root
sudo command

# Run command as specific user
sudo -u username command

# Switch to root shell
sudo -i
sudo su -

# Run previous command with sudo
sudo !!`
        },
        {
          title: 'Sudo Configuration',
          content: 'Configure sudo access through the sudoers file using visudo.',
          codeExample: `# Edit sudoers file safely
sudo visudo

# Add user to sudo group (Ubuntu/Debian)
sudo usermod -aG sudo username

# Add user to wheel group (CentOS/RHEL)
sudo usermod -aG wheel username

# Check sudo access
sudo -l`
        },
        {
          title: 'Sudo Best Practices',
          content: 'Security tips and best practices for using sudo effectively.',
          codeExample: `# Use sudo timeout (default 15 minutes)
sudo -v  # Refresh sudo timestamp

# Run multiple commands with sudo
sudo sh -c 'command1 && command2'

# Sudo with environment variables
sudo -E command  # Preserve environment
sudo VAR=value command

# Check what sudo allows
sudo -l -U username`
        }
      ]
    }
  },
  {
    id: '09',
    icon: '🐚',
    title: 'BASH SHELL',
    description: 'Write your first bash shell script',
    slug: 'bash-shell',
    content: {
      overview: 'Learn to write powerful bash scripts to automate tasks and improve productivity.',
      sections: [
        {
          title: 'Your First Bash Script',
          content: 'Create executable scripts to automate repetitive tasks.',
          codeExample: `#!/bin/bash
# This is a comment

echo "Hello, LinuxBuddy!"
echo "Current date: $(date)"
echo "Current user: $(whoami)"

# Make script executable
chmod +x script.sh

# Run the script
./script.sh`
        },
        {
          title: 'Variables and Input',
          content: 'Use variables to store data and get input from users.',
          codeExample: `#!/bin/bash

# Variables
NAME="LinuxBuddy"
COUNT=42

echo "Welcome to $NAME"
echo "Count: $COUNT"

# User input
read -p "Enter your name: " USERNAME
echo "Hello, $USERNAME!"

# Command substitution
CURRENT_DIR=$(pwd)
echo "Current directory: $CURRENT_DIR"`
        },
        {
          title: 'Control Structures',
          content: 'Use if statements, loops, and functions to control script flow.',
          codeExample: `#!/bin/bash

# If statement
if [ "$1" = "hello" ]; then
    echo "Hello there!"
elif [ "$1" = "bye" ]; then
    echo "Goodbye!"
else
    echo "Unknown command"
fi

# For loop
for i in {1..5}; do
    echo "Number: $i"
done

# Function
greet() {
    echo "Hello, $1!"
}

greet "LinuxBuddy"`
        }
      ]
    }
  },
  {
    id: '10',
    icon: '🎨',
    title: 'BASH CONFIG',
    description: 'How to make your Linux terminal look cool',
    slug: 'bash-config',
    content: {
      overview: 'Customize your bash environment with aliases, prompts, and productivity enhancements.',
      sections: [
        {
          title: 'Bash Configuration Files',
          content: 'Understanding the different bash configuration files and their purposes.',
          codeExample: `# Main bash config files
~/.bashrc      # Interactive non-login shells
~/.bash_profile # Login shells
~/.profile     # All shells
~/.bash_aliases # Custom aliases

# Reload configuration
source ~/.bashrc
# or
. ~/.bashrc`
        },
        {
          title: 'Custom Aliases',
          content: 'Create shortcuts for commonly used commands.',
          codeExample: `# Add to ~/.bashrc or ~/.bash_aliases

# Navigation aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'

# Git aliases
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'

# System aliases
alias h='history'
alias c='clear'
alias df='df -h'
alias du='du -h'`
        },
        {
          title: 'Custom PS1 Prompt',
          content: 'Customize your command prompt with colors and useful information.',
          codeExample: `# Add to ~/.bashrc

# Colors
RED='\\[\\033[0;31m\\]'
GREEN='\\[\\033[0;32m\\]'
YELLOW='\\[\\033[0;33m\\]'
BLUE='\\[\\033[0;34m\\]'
PURPLE='\\[\\033[0;35m\\]'
CYAN='\\[\\033[0;36m\\]'
WHITE='\\[\\033[0;37m\\]'
NC='\\[\\033[0m\\]' # No Color

# Custom prompt
PS1="\${GREEN}\\u@\\h\${NC}:\${BLUE}\\w\${NC}\\$ "

# Git-aware prompt
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/ (\\1)/'
}
PS1="\${GREEN}\\u@\\h\${NC}:\${BLUE}\\w\${YELLOW}\\$(parse_git_branch)\${NC}\\$ "`
        }
      ]
    }
  },
  {
    id: '11',
    icon: '📃',
    title: 'TEXT EDITORS',
    description: 'How to use terminal text editors like Nano and Vim',
    slug: 'text-editors',
    content: {
      overview: 'Master terminal-based text editors for efficient file editing in Linux.',
      sections: [
        {
          title: 'Nano - Beginner Friendly',
          content: 'Nano is a simple, user-friendly text editor perfect for beginners.',
          codeExample: `# Open file with nano
nano filename.txt

# Nano shortcuts (shown at bottom):
# Ctrl+O - Save (WriteOut)
# Ctrl+X - Exit
# Ctrl+W - Search
# Ctrl+K - Cut line
# Ctrl+U - Paste
# Ctrl+G - Help

# Create and edit a file
nano ~/.bashrc`
        },
        {
          title: 'Vim - Power User Editor',
          content: 'Vim is a powerful modal editor with extensive features.',
          codeExample: `# Open file with vim
vim filename.txt

# Vim modes:
# Normal mode (default) - navigation and commands
# Insert mode - text editing
# Command mode - save, quit, etc.

# Basic vim commands:
i          # Enter insert mode
Esc        # Return to normal mode
:w         # Save file
:q         # Quit
:wq        # Save and quit
:q!        # Quit without saving

# Navigation in normal mode:
h j k l    # Left, down, up, right
gg         # Go to first line
G          # Go to last line
0          # Go to beginning of line
$          # Go to end of line`
        },
        {
          title: 'Advanced Vim Features',
          content: 'Powerful vim features for efficient text editing.',
          codeExample: `# Search and replace
/pattern   # Search forward
?pattern   # Search backward
n          # Next match
N          # Previous match
:%s/old/new/g  # Replace all occurrences

# Copy, cut, paste
yy         # Copy line
dd         # Cut line
p          # Paste after cursor
P          # Paste before cursor

# Visual mode
v          # Visual mode (character)
V          # Visual line mode
Ctrl+v     # Visual block mode

# Multiple files
:e file    # Edit another file
:split     # Horizontal split
:vsplit    # Vertical split
Ctrl+w+w   # Switch between windows`
        }
      ]
    }
  },
  {
    id: '12',
    icon: '🔎',
    title: 'GREP && SED',
    description: 'Advanced text searching and manipulation techniques',
    slug: 'grep-and-sed',
    content: {
      overview: 'Master grep for searching and sed for text manipulation in Linux.',
      sections: [
        {
          title: 'Grep - Text Search',
          content: 'Use grep to search for patterns in files and command output.',
          codeExample: `# Basic grep usage
grep "pattern" file.txt
grep "error" /var/log/syslog

# Useful grep options
grep -i "pattern" file.txt    # Case insensitive
grep -r "pattern" directory/  # Recursive search
grep -n "pattern" file.txt    # Show line numbers
grep -v "pattern" file.txt    # Invert match (exclude)
grep -c "pattern" file.txt    # Count matches

# Multiple patterns
grep -E "pattern1|pattern2" file.txt
grep "pattern1\\|pattern2" file.txt

# Search in multiple files
grep "pattern" *.txt
grep "pattern" file1.txt file2.txt`
        },
        {
          title: 'Regular Expressions',
          content: 'Use regex patterns for powerful text matching.',
          codeExample: `# Basic regex patterns
grep "^start" file.txt        # Lines starting with "start"
grep "end$" file.txt          # Lines ending with "end"
grep "." file.txt             # Any character
grep "a*" file.txt            # Zero or more 'a'
grep "a+" file.txt            # One or more 'a'
grep "a?" file.txt            # Zero or one 'a'

# Character classes
grep "[0-9]" file.txt         # Any digit
grep "[a-z]" file.txt         # Any lowercase letter
grep "[A-Z]" file.txt         # Any uppercase letter
grep "[^0-9]" file.txt        # Not a digit

# Extended regex (-E flag)
grep -E "colou?r" file.txt    # color or colour
grep -E "(cat|dog)" file.txt  # cat or dog`
        },
        {
          title: 'Sed - Stream Editor',
          content: 'Use sed for find and replace operations and text manipulation.',
          codeExample: `# Basic sed substitution
sed 's/old/new/' file.txt           # Replace first occurrence
sed 's/old/new/g' file.txt          # Replace all occurrences
sed 's/old/new/gi' file.txt         # Case insensitive replace

# Edit file in place
sed -i 's/old/new/g' file.txt

# Multiple substitutions
sed -e 's/old1/new1/g' -e 's/old2/new2/g' file.txt

# Delete lines
sed '/pattern/d' file.txt           # Delete lines matching pattern
sed '1d' file.txt                   # Delete first line
sed '$d' file.txt                   # Delete last line
sed '1,5d' file.txt                 # Delete lines 1-5

# Print specific lines
sed -n '1,5p' file.txt              # Print lines 1-5
sed -n '/pattern/p' file.txt        # Print lines matching pattern`
        }
      ]
    }
  },
  {
    id: '13',
    icon: '🪫',
    title: 'PROCESS MANAGEMENT',
    description: 'Use tools like htop to manage Linux processes',
    slug: 'process-management',
    content: {
      overview: 'Learn to monitor, manage, and control processes in Linux systems.',
      sections: [
        {
          title: 'Viewing Processes',
          content: 'Use various tools to view running processes and system information.',
          codeExample: `# Basic process viewing
ps                    # Show current user processes
ps aux               # Show all processes
ps -ef               # Alternative format

# Interactive process viewers
top                  # Real-time process viewer
htop                 # Enhanced interactive viewer
btop                 # Modern system monitor

# Process tree
pstree               # Show process hierarchy
ps --forest          # Tree view with ps`
        },
        {
          title: 'Managing Processes',
          content: 'Control processes with signals and job control.',
          codeExample: `# Kill processes
kill PID             # Terminate process by PID
kill -9 PID          # Force kill process
killall process_name # Kill by process name
pkill pattern        # Kill by pattern

# Job control
command &            # Run in background
jobs                 # List background jobs
fg %1                # Bring job 1 to foreground
bg %1                # Send job 1 to background
nohup command &      # Run immune to hangups

# Process priority
nice -n 10 command   # Run with lower priority
renice 5 PID         # Change priority of running process`
        }
      ]
    }
  },
  {
    id: '14',
    icon: '⏰',
    title: 'CRON JOBS',
    description: 'Run background processes on a schedule with Cron',
    slug: 'cron-jobs',
    content: {
      overview: 'Automate tasks with cron to run commands on a schedule.',
      sections: [
        {
          title: 'Cron Basics',
          content: 'Understanding cron syntax and basic usage.',
          codeExample: `# Cron time format:
# * * * * * command
# | | | | |
# | | | | +-- Day of week (0-7, Sunday=0 or 7)
# | | | +---- Month (1-12)
# | | +------ Day of month (1-31)
# | +-------- Hour (0-23)
# +---------- Minute (0-59)

# Examples:
0 0 * * *     # Daily at midnight
0 9 * * 1     # Every Monday at 9 AM
*/15 * * * *  # Every 15 minutes
0 2 1 * *     # First day of month at 2 AM
0 0 * * 0     # Every Sunday at midnight`
        },
        {
          title: 'Managing Crontab',
          content: 'Edit and manage your personal cron jobs.',
          codeExample: `# Crontab commands
crontab -e           # Edit your crontab
crontab -l           # List your cron jobs
crontab -r           # Remove your crontab
crontab -u user -e   # Edit another user's crontab (as root)

# Example crontab entries:
# Backup home directory daily at 2 AM
0 2 * * * tar -czf /backup/home-$(date +%Y%m%d).tar.gz /home/

# Clean temp files every hour
0 * * * * find /tmp -type f -mtime +1 -delete

# Send system report weekly
0 8 * * 1 /scripts/system-report.sh | mail -s "Weekly Report" admin@example.com`
        }
      ]
    }
  },
  {
    id: '15',
    icon: '🪄',
    title: 'TAR & GZIP',
    description: 'File compression and directory archiving magic',
    slug: 'tar-and-gzip',
    content: {
      overview: 'Master file compression and archiving with tar, gzip, and related tools.',
      sections: [
        {
          title: 'Tar Archives',
          content: 'Create and extract tar archives for bundling files and directories.',
          codeExample: `# Create tar archive
tar -cf archive.tar file1 file2 dir/
tar -cvf archive.tar file1 file2 dir/  # Verbose output

# Extract tar archive
tar -xf archive.tar
tar -xvf archive.tar                   # Verbose output
tar -xf archive.tar -C /destination/   # Extract to specific directory

# List archive contents
tar -tf archive.tar
tar -tvf archive.tar                   # Detailed listing

# Add files to existing archive
tar -rf archive.tar newfile.txt`
        },
        {
          title: 'Compression with Gzip',
          content: 'Combine tar with gzip for compressed archives.',
          codeExample: `# Create compressed tar archive
tar -czf archive.tar.gz directory/
tar -czvf archive.tar.gz directory/    # Verbose

# Extract compressed archive
tar -xzf archive.tar.gz
tar -xzvf archive.tar.gz               # Verbose

# Compress individual files
gzip file.txt                          # Creates file.txt.gz
gunzip file.txt.gz                     # Extracts to file.txt
zcat file.txt.gz                       # View without extracting

# Other compression formats
tar -cjf archive.tar.bz2 directory/   # Bzip2 compression
tar -cJf archive.tar.xz directory/    # XZ compression`
        }
      ]
    }
  },
  {
    id: '16',
    icon: '📦',
    title: 'PACKAGE MANAGERS',
    description: 'How to install packages from source',
    slug: 'package-managers',
    content: {
      overview: 'Learn different package management systems and how to install software.',
      sections: [
        {
          title: 'APT (Debian/Ubuntu)',
          content: 'Advanced Package Tool for Debian-based distributions.',
          codeExample: `# Update package lists
sudo apt update

# Upgrade packages
sudo apt upgrade
sudo apt full-upgrade

# Install packages
sudo apt install package-name
sudo apt install package1 package2 package3

# Remove packages
sudo apt remove package-name
sudo apt purge package-name    # Remove with config files

# Search packages
apt search keyword
apt show package-name

# Clean package cache
sudo apt autoremove
sudo apt autoclean`
        },
        {
          title: 'YUM/DNF (RedHat/CentOS)',
          content: 'Package management for RedHat-based distributions.',
          codeExample: `# YUM (older systems)
sudo yum update
sudo yum install package-name
sudo yum remove package-name
sudo yum search keyword

# DNF (newer systems)
sudo dnf update
sudo dnf install package-name
sudo dnf remove package-name
sudo dnf search keyword

# Group installations
sudo dnf grouplist
sudo dnf groupinstall "Development Tools"

# Repository management
sudo dnf repolist
sudo dnf config-manager --add-repo URL`
        }
      ]
    }
  },
  {
    id: '17',
    icon: '⌨️',
    title: 'CHOOSING A VPS',
    description: 'How to choose a Virtual Private Server',
    slug: 'choosing-a-vps',
    content: {
      overview: 'Learn how to select the right VPS provider and configuration for your needs.',
      sections: [
        {
          title: 'VPS Providers Comparison',
          content: 'Popular VPS providers and their strengths.',
          codeExample: `# Popular VPS Providers:

# DigitalOcean
- Simple interface
- Good documentation
- $5/month starting price
- Global data centers

# Linode
- Excellent performance
- Great support
- $5/month starting price
- Advanced networking

# Vultr
- High performance
- Many locations
- $2.50/month starting price
- Good for gaming/low latency

# AWS EC2
- Most features
- Pay-as-you-go
- Global infrastructure
- Complex pricing

# Hetzner
- Best price/performance
- European focus
- €3.29/month starting price
- Excellent hardware`
        }
      ]
    }
  }
]

// Import all chapters from the complete file
export { allChapters, getChapterBySlug, getChapterById, getNextChapter, getPreviousChapter } from './all-chapters.js'
