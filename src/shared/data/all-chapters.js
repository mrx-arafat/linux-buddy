// Import additional chapters
import { chapters16to34 } from './chapters-16-34.js'

// Complete list of all 34 LinuxBuddy chapters
const chapters1to15 = [
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
grep -c "pattern" file.txt    # Count matches`
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
btop                 # Modern system monitor`
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
*/15 * * * *  # Every 15 minutes`
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

# List archive contents
tar -tf archive.tar
tar -tvf archive.tar                   # Detailed listing`
        }
      ]
    }
  }
]

// Merge all chapters
export const allChapters = [...chapters1to15, ...chapters16to34]

export const getChapterBySlug = (slug) => {
  return allChapters.find(chapter => chapter.slug === slug)
}

export const getChapterById = (id) => {
  return allChapters.find(chapter => chapter.id === id)
}

export const getNextChapter = (currentId) => {
  const currentIndex = allChapters.findIndex(chapter => chapter.id === currentId)
  if (currentIndex !== -1 && currentIndex < allChapters.length - 1) {
    return allChapters[currentIndex + 1]
  }
  return null
}

export const getPreviousChapter = (currentId) => {
  const currentIndex = allChapters.findIndex(chapter => chapter.id === currentId)
  if (currentIndex > 0) {
    return allChapters[currentIndex - 1]
  }
  return null
}
