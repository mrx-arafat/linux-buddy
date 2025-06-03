export const chapter6 = {
  id: '06',
  icon: '🗺️',
  title: 'WTF IS $PATH',
  description: 'Understanding the PATH environment variable',
  slug: 'wtf-is-path',
  content: {
    overview: 'WTF IS \$PATH?! 🗺️ Great question! \$PATH is literally the most important environment variable in Linux, and somehow nobody explains it properly. It\'s the reason you can type `ls` instead of `/bin/ls`, why some commands work and others don\'t, and why your custom scripts sometimes vanish into the digital void. Think of \$PATH as your shell\'s GPS system - it tells your terminal where to look for commands. Without it, you\'d have to type the full path to every single program like some kind of digital caveman. We\'re going to demystify this crucial concept with real examples, practical scenarios, and enough "aha!" moments to make you dangerous with environment variables. By the end of this chapter, you\'ll understand why \$PATH is the unsung hero of your Linux experience and how to bend it to your will like a command-line wizard! 🧙‍♂️',
    sections: [
      {
        title: '1. The PATH Mystery Solved - Your Shell\'s GPS System 🧭',
        content: 'Let\'s solve the \$PATH mystery once and for all! When you type a command like `ls`, your shell doesn\'t magically know where the `ls` program lives. Instead, it searches through a list of directories specified in the \$PATH variable until it finds the executable. It\'s like having a GPS that knows all the shortcuts to your favorite destinations. Without \$PATH, you\'d be lost in a maze of absolute paths, typing `/usr/bin/ls` and `/bin/cat` like it\'s 1970. Understanding \$PATH is the difference between being a Linux user and being a Linux power user.',
        codeExample: `# === THE PATH REVELATION ===
echo \$PATH                      # "Show me the PATH!" - see your current PATH
echo \$PATH | tr ':' '\\n'        # "Show PATH directories one per line"
echo \$PATH | tr ':' '\\n' | nl   # "Number each PATH directory"

# === HOW COMMANDS ARE FOUND ===
which ls                        # "Where does 'ls' live?"
which cat                       # "Where is 'cat'?"
which grep                      # "Where is 'grep'?"
which python3                   # "Where is Python?"
which code                      # "Where is VS Code?" (if installed)

# === THE PATH SEARCH PROCESS ===
# When you type 'ls', the shell searches:
# 1. First directory in PATH
# 2. Second directory in PATH
# 3. Continue until found or PATH exhausted
# 4. If not found: "command not found"

# === UNDERSTANDING THE SEARCH ORDER ===
echo "🔍 PATH Search Order:"
echo \$PATH | tr ':' '\\n' | cat -n
echo "Commands are found in the FIRST matching directory"

# === WHAT'S IN EACH PATH DIRECTORY? ===
ls /usr/local/bin               # "Local system binaries"
ls /usr/bin                     # "User binaries"
ls /bin                         # "Essential binaries"
ls /usr/local/sbin              # "Local system admin binaries"
ls /usr/sbin                    # "System admin binaries"
ls /sbin                        # "Essential system binaries"

# === PATH DIRECTORY PURPOSES ===
echo "📁 PATH Directory Guide:"
echo "/usr/local/bin  - Locally installed programs"
echo "/usr/bin        - User programs"
echo "/bin            - Essential system programs"
echo "/usr/local/sbin - Local system admin programs"
echo "/usr/sbin       - System admin programs"
echo "/sbin           - Essential system admin programs"

# === THE "COMMAND NOT FOUND" MYSTERY ===
# Why does this happen?
# 1. Program not installed
# 2. Program not in PATH
# 3. Program not executable
# 4. Typo in command name

# === CHECKING IF A COMMAND EXISTS ===
command -v ls                   # "Does 'ls' exist in PATH?"
command -v nonexistent          # "Does 'nonexistent' exist?" (returns nothing)
type ls                         # "What type of command is 'ls'?"
type cd                         # "What about 'cd'?" (it's a builtin!)

# === THE PATH REALITY CHECK ===
echo "Your PATH has \$(echo \$PATH | tr ':' '\\n' | wc -l) directories"
echo "That's where your shell looks for commands!"
echo "No PATH = No commands = Sad Linux user 😢"`
      },
      {
        title: '2. Modifying PATH - Becoming the Master of Your Domain 👑',
        content: 'Now that you understand what \$PATH does, it\'s time to learn how to modify it like a boss. This is where you go from being a passive user to being the architect of your own command-line experience. Want to add your custom scripts directory? Easy. Want to prioritize certain programs over others? Done. Want to temporarily modify PATH for testing? No problem. We\'re going to cover temporary changes, permanent modifications, and the best practices that will keep your system clean and your commands accessible.',
        codeExample: `# === TEMPORARY PATH MODIFICATIONS ===
# These changes last only for the current session

# Add directory to beginning of PATH (highest priority)
export PATH="/my/custom/bin:\$PATH"
echo \$PATH                      # "Check the new PATH"

# Add directory to end of PATH (lowest priority)
export PATH="\$PATH:/my/other/bin"

# Add multiple directories
export PATH="/first/dir:/second/dir:\$PATH"

# === CHECKING YOUR MODIFICATIONS ===
echo \$PATH | tr ':' '\\n'        # "See all PATH directories"
which my_command                # "Where is my custom command now?"

# === PERMANENT PATH MODIFICATIONS ===
# Edit your shell configuration file

# For Bash users:
echo 'export PATH="/my/bin:\$PATH"' >> ~/.bashrc
echo 'export PATH="/my/bin:\$PATH"' >> ~/.bash_profile

# For Zsh users:
echo 'export PATH="/my/bin:\$PATH"' >> ~/.zshrc

# For Fish users:
echo 'set -gx PATH /my/bin \$PATH' >> ~/.config/fish/config.fish

# === RELOAD YOUR SHELL CONFIGURATION ===
source ~/.bashrc                # "Reload Bash config"
source ~/.zshrc                 # "Reload Zsh config"
# Or just open a new terminal

# === CREATING A CUSTOM BIN DIRECTORY ===
mkdir -p ~/bin                  # "Create personal bin directory"
export PATH="~/bin:\$PATH"       # "Add it to PATH"
echo 'export PATH="~/bin:\$PATH"' >> ~/.bashrc # "Make it permanent"

# === TESTING YOUR CUSTOM DIRECTORY ===
echo '#!/bin/bash' > ~/bin/hello
echo 'echo "Hello from custom script!"' >> ~/bin/hello
chmod +x ~/bin/hello            # "Make it executable"
hello                           # "Run your custom command!"

# === PATH BEST PRACTICES ===
# 1. Add custom directories to the BEGINNING of PATH
# 2. Use absolute paths when possible
# 3. Don't remove system directories from PATH
# 4. Keep PATH clean and organized

# === COMMON PATH ADDITIONS ===
# Node.js global packages
export PATH="~/.npm-global/bin:\$PATH"

# Python user packages
export PATH="~/.local/bin:\$PATH"

# Rust cargo packages
export PATH="~/.cargo/bin:\$PATH"

# Go binaries
export PATH="~/go/bin:\$PATH"

# Custom scripts
export PATH="~/scripts:\$PATH"

# === SYSTEM-WIDE PATH MODIFICATIONS ===
# (Requires sudo - affects all users)
echo 'export PATH="/opt/myapp/bin:\$PATH"' | sudo tee -a /etc/environment

# === PATH TROUBLESHOOTING ===
# "My command disappeared!"
echo \$PATH                      # "Check if PATH is corrupted"
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin" # "Reset to safe defaults"

# "My PATH is too long!"
echo \$PATH | tr ':' '\\n' | wc -l # "Count PATH directories"
# Clean up unnecessary directories

# === THE PATH MODIFICATION CHEAT SHEET ===
echo "🛠️ PATH Modification Quick Reference:"
echo "Temporary: export PATH=\"/new/dir:\\\$PATH\""
echo "Permanent: echo 'export PATH=\"/new/dir:\\\$PATH\"' >> ~/.bashrc"
echo "Reload: source ~/.bashrc"
echo "Test: which my_command"`
      },
      {
        title: '3. Environment Variables - PATH\'s Extended Family 🏠',
        content: 'PATH isn\'t alone in the environment variable universe - it\'s part of a whole family of variables that control how your Linux system behaves. Think of environment variables as your system\'s DNA - they define the characteristics and behavior of your shell session. Understanding these variables will give you superpowers over your Linux environment. We\'re talking about HOME, USER, SHELL, and dozens of others that work behind the scenes to make your Linux experience smooth and personalized.',
        codeExample: `# === THE ENVIRONMENT VARIABLE FAMILY ===
env                             # "Show ALL environment variables"
printenv                        # "Alternative way to show all variables"
set                             # "Show all variables (including shell variables)"

# === THE ESSENTIAL ENVIRONMENT VARIABLES ===
echo \$HOME                      # "Your home directory"
echo \$USER                      # "Your username"
echo \$SHELL                     # "Your current shell"
echo \$PWD                       # "Current working directory"
echo \$OLDPWD                    # "Previous working directory"
echo \$TERM                      # "Terminal type"
echo \$LANG                      # "Language and locale"
echo \$EDITOR                    # "Default text editor"

# === SYSTEM INFORMATION VARIABLES ===
echo \$HOSTNAME                  # "Computer name"
echo \$OSTYPE                    # "Operating system type"
echo \$MACHTYPE                  # "Machine type"
echo \$HOSTTYPE                  # "Host type"
uname -a                        # "Detailed system information"

# === SHELL BEHAVIOR VARIABLES ===
echo \$PS1                       # "Primary prompt string"
echo \$PS2                       # "Secondary prompt string"
echo \$IFS                       # "Internal field separator"
echo \$HISTSIZE                  # "History size"
echo \$HISTFILE                  # "History file location"

# === APPLICATION-SPECIFIC VARIABLES ===
echo \$BROWSER                   # "Default web browser"
echo \$PAGER                     # "Default pager (less, more)"
echo \$MANPAGER                  # "Manual page pager"
echo \$VISUAL                    # "Visual editor"

# === SETTING ENVIRONMENT VARIABLES ===
# Temporary (current session only)
export EDITOR="vim"             # "Set default editor to vim"
export BROWSER="firefox"        # "Set default browser to Firefox"
export PAGER="less"             # "Set default pager to less"

# === MAKING VARIABLES PERMANENT ===
echo 'export EDITOR="vim"' >> ~/.bashrc
echo 'export BROWSER="firefox"' >> ~/.bashrc
echo 'export PAGER="less"' >> ~/.bashrc

# === CHECKING IF VARIABLES ARE SET ===
if [ -z "\$EDITOR" ]; then
    echo "EDITOR is not set"
else
    echo "EDITOR is set to: \$EDITOR"
fi

# === UNSETTING VARIABLES ===
unset MYVAR                     # "Remove variable"
export -n MYVAR                 # "Alternative way to unset exported variable"

# === VARIABLE SCOPE ===
# Local variable (only in current shell)
MYLOCAL="local value"
echo \$MYLOCAL

# Environment variable (inherited by child processes)
export MYGLOBAL="global value"
echo \$MYGLOBAL

# === COMMON ENVIRONMENT VARIABLE PATTERNS ===
# XDG Base Directory Specification
echo \$XDG_CONFIG_HOME          # "User config directory"
echo \$XDG_DATA_HOME            # "User data directory"
echo \$XDG_CACHE_HOME           # "User cache directory"

# Development environment variables
echo \$JAVA_HOME                # "Java installation directory"
echo \$PYTHON_PATH              # "Python module search path"
echo \$NODE_PATH                # "Node.js module search path"
echo \$GOPATH                   # "Go workspace"

# === THE ENVIRONMENT VARIABLE CHEAT SHEET ===
echo "🏠 Environment Variable Quick Reference:"
echo "View all: env"
echo "Set temp: export VAR=value"
echo "Set permanent: echo 'export VAR=value' >> ~/.bashrc"
echo "Check: echo \\\$VAR"
echo "Unset: unset VAR"`
      },
      {
        title: '4. PATH Troubleshooting - When Commands Go Missing 🔍',
        content: 'Every Linux user has been there - you install a program, but when you try to run it, you get the dreaded "command not found" error. Or worse, you accidentally break your PATH and suddenly nothing works. Don\'t panic! PATH troubleshooting is a skill every Linux user needs, and we\'re going to turn you into a PATH detective. We\'ll cover the most common PATH problems, how to diagnose them, and most importantly, how to fix them without breaking your system further.',
        codeExample: `# === COMMON PATH PROBLEMS ===

# Problem 1: "command not found"
# Diagnosis:
which problematic_command       # "Is it in PATH?"
find / -name "problematic_command" 2>/dev/null # "Where is it actually?"
echo \$PATH | tr ':' '\\n' | grep -n "expected_directory" # "Is the directory in PATH?"

# Solution:
export PATH="/missing/directory:\$PATH" # "Add missing directory"

# Problem 2: "Wrong version of command running"
# Diagnosis:
which python                    # "Which Python is running?"
which -a python                 # "Show ALL Python installations in PATH"
ls -la \$(which python)          # "What is this Python actually?"

# Solution:
export PATH="/preferred/python/bin:\$PATH" # "Prioritize preferred version"

# Problem 3: "PATH is corrupted/empty"
# Diagnosis:
echo \$PATH                      # "What does PATH look like?"
echo \${#PATH}                   # "How long is PATH?"

# Emergency PATH restoration:
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin"
# Or source a backup:
source /etc/environment

# === PATH DEBUGGING TECHNIQUES ===
# Trace command execution
set -x                          # "Enable command tracing"
ls                              # "See how 'ls' is found"
set +x                          # "Disable command tracing"

# Check PATH step by step
for dir in \$(echo \$PATH | tr ':' ' '); do
    echo "Checking \$dir"
    if [ -x "\$dir/ls" ]; then
        echo "  Found ls in \$dir"
        break
    fi
done

# === COMMAND RESOLUTION ORDER ===
# The shell searches in this order:
# 1. Aliases
# 2. Functions
# 3. Built-in commands
# 4. Commands in PATH

# Check what type of command something is:
type -a ls                      # "Show all definitions of 'ls'"
type -a cd                      # "Show all definitions of 'cd'"

# === PATH VALIDATION ===
# Check if all PATH directories exist
for dir in \$(echo \$PATH | tr ':' ' '); do
    if [ ! -d "\$dir" ]; then
        echo "Warning: \$dir does not exist"
    fi
done

# Check for duplicate directories in PATH
echo \$PATH | tr ':' '\\n' | sort | uniq -d

# === FIXING COMMON ISSUES ===
# Remove non-existent directories from PATH
clean_path() {
    local new_path=""
    for dir in \$(echo \$PATH | tr ':' ' '); do
        if [ -d "\$dir" ]; then
            if [ -z "\$new_path" ]; then
                new_path="\$dir"
            else
                new_path="\$new_path:\$dir"
            fi
        fi
    done
    export PATH="\$new_path"
}

# Remove duplicate directories from PATH
dedupe_path() {
    export PATH=\$(echo \$PATH | tr ':' '\\n' | awk '!seen[\$0]++' | tr '\\n' ':' | sed 's/:$//')
}

# === BACKUP AND RESTORE PATH ===
# Backup current PATH
echo "export BACKUP_PATH='\$PATH'" >> ~/.path_backup

# Restore from backup
source ~/.path_backup
export PATH="\$BACKUP_PATH"

# === THE PATH TROUBLESHOOTING TOOLKIT ===
echo "🔍 PATH Troubleshooting Checklist:"
echo "1. Check if command exists: which command_name"
echo "2. Check PATH: echo \\\$PATH"
echo "3. Find command location: find / -name command_name"
echo "4. Check if directory is in PATH: echo \\\$PATH | grep directory"
echo "5. Test PATH addition: export PATH=\"/new/dir:\\\$PATH\""
echo "6. Make permanent: echo 'export PATH=\"/new/dir:\\\$PATH\"' >> ~/.bashrc"
echo "7. Emergency reset: export PATH=\"/usr/local/bin:/usr/bin:/bin\""

# === PATH HEALTH CHECK FUNCTION ===
path_health_check() {
    echo "🏥 PATH Health Check:"
    echo "PATH length: \${#PATH} characters"
    echo "Number of directories: \$(echo \$PATH | tr ':' '\\n' | wc -l)"
    echo "Non-existent directories:"
    for dir in \$(echo \$PATH | tr ':' ' '); do
        [ ! -d "\$dir" ] && echo "  \$dir"
    done
    echo "Duplicate directories:"
    echo \$PATH | tr ':' '\\n' | sort | uniq -d
}`
      },
      {
        title: '5. Advanced PATH Mastery - Becoming a PATH Wizard 🧙‍♂️',
        content: 'Time to level up from PATH user to PATH wizard! This is where we dive into the advanced techniques that separate the pros from the amateurs. We\'re talking about conditional PATH modifications, dynamic PATH management, security considerations, and the kind of PATH wizardry that will make other Linux users ask "how did you do that?" This isn\'t just about adding directories to PATH - this is about architecting a robust, flexible, and secure command environment that adapts to your needs.',
        codeExample: `# === CONDITIONAL PATH MODIFICATIONS ===
# Add directory only if it exists
[ -d "/opt/custom/bin" ] && export PATH="/opt/custom/bin:\$PATH"

# Add directory only if not already in PATH
case ":\$PATH:" in
    *:/opt/custom/bin:*) ;;
    *) export PATH="/opt/custom/bin:\$PATH" ;;
esac

# Function to safely add to PATH
add_to_path() {
    if [ -d "\$1" ] && [[ ":\$PATH:" != *":\$1:"* ]]; then
        export PATH="\$1:\$PATH"
        echo "Added \$1 to PATH"
    fi
}

# Usage: add_to_path "/opt/custom/bin"

# === DYNAMIC PATH MANAGEMENT ===
# Load different PATHs for different contexts
load_dev_path() {
    export PATH="~/dev/bin:~/.local/bin:\$PATH"
    export PATH="~/.npm-global/bin:\$PATH"
    export PATH="~/.cargo/bin:\$PATH"
    echo "Development PATH loaded"
}

load_admin_path() {
    export PATH="/usr/local/sbin:/usr/sbin:/sbin:\$PATH"
    echo "Admin PATH loaded"
}

# === PATH PROFILES ===
# Create PATH profiles for different work contexts
save_path_profile() {
    local profile_name="\$1"
    echo "export PATH='\$PATH'" > ~/.path_profiles/\$profile_name
    echo "PATH profile '\$profile_name' saved"
}

load_path_profile() {
    local profile_name="\$1"
    if [ -f ~/.path_profiles/\$profile_name ]; then
        source ~/.path_profiles/\$profile_name
        echo "PATH profile '\$profile_name' loaded"
    else
        echo "Profile '\$profile_name' not found"
    fi
}

# === SECURITY CONSIDERATIONS ===
# Check for suspicious directories in PATH
check_path_security() {
    echo "🔒 PATH Security Check:"
    for dir in \$(echo \$PATH | tr ':' ' '); do
        if [ -d "\$dir" ]; then
            # Check if directory is world-writable
            if [ -w "\$dir" ] && [ \$(stat -c %a "\$dir" | cut -c3) -ge 2 ]; then
                echo "⚠️  WARNING: \$dir is world-writable!"
            fi
            # Check if directory is owned by root
            if [ \$(stat -c %U "\$dir") != "root" ] && [ \$(stat -c %U "\$dir") != \$(whoami) ]; then
                echo "⚠️  WARNING: \$dir is owned by \$(stat -c %U "\$dir")"
            fi
        fi
    done
}

# === PATH OPTIMIZATION ===
# Remove duplicate directories
optimize_path() {
    local new_path=""
    local seen_dirs=""

    for dir in \$(echo \$PATH | tr ':' ' '); do
        if [ -d "\$dir" ] && [[ "\$seen_dirs" != *"\$dir"* ]]; then
            if [ -z "\$new_path" ]; then
                new_path="\$dir"
            else
                new_path="\$new_path:\$dir"
            fi
            seen_dirs="\$seen_dirs \$dir"
        fi
    done

    export PATH="\$new_path"
    echo "PATH optimized: removed duplicates and non-existent directories"
}

# === ADVANCED PATH UTILITIES ===
# Show PATH with priorities
show_path_priorities() {
    echo "🎯 PATH Priority Order:"
    echo \$PATH | tr ':' '\\n' | nl -w2 -s'. '
}

# Find which directory contains a command
find_command_source() {
    local cmd="\$1"
    for dir in \$(echo \$PATH | tr ':' ' '); do
        if [ -x "\$dir/\$cmd" ]; then
            echo "\$cmd found in: \$dir"
            ls -la "\$dir/\$cmd"
            return 0
        fi
    done
    echo "\$cmd not found in PATH"
    return 1
}

# === PATH ANALYTICS ===
# Analyze PATH usage
analyze_path() {
    echo "📊 PATH Analysis:"
    echo "Total directories: \$(echo \$PATH | tr ':' '\\n' | wc -l)"
    echo "Existing directories: \$(echo \$PATH | tr ':' '\\n' | while read dir; do [ -d "\$dir" ] && echo \$dir; done | wc -l)"
    echo "Non-existent directories: \$(echo \$PATH | tr ':' '\\n' | while read dir; do [ ! -d "\$dir" ] && echo \$dir; done | wc -l)"
    echo "Total executables: \$(echo \$PATH | tr ':' '\\n' | while read dir; do [ -d "\$dir" ] && find "\$dir" -maxdepth 1 -type f -executable 2>/dev/null; done | wc -l)"
    echo "PATH length: \${#PATH} characters"
}

# === DEVELOPMENT ENVIRONMENT SETUP ===
# Setup development PATH
setup_dev_environment() {
    echo "🛠️ Setting up development environment..."

    # Node.js
    [ -d "\$HOME/.npm-global/bin" ] && add_to_path "\$HOME/.npm-global/bin"

    # Python
    [ -d "\$HOME/.local/bin" ] && add_to_path "\$HOME/.local/bin"

    # Rust
    [ -d "\$HOME/.cargo/bin" ] && add_to_path "\$HOME/.cargo/bin"

    # Go
    [ -d "\$HOME/go/bin" ] && add_to_path "\$HOME/go/bin"

    # Ruby
    [ -d "\$HOME/.gem/ruby/*/bin" ] && add_to_path "\$(echo \$HOME/.gem/ruby/*/bin | tr ' ' ':')"

    # Custom scripts
    [ -d "\$HOME/bin" ] && add_to_path "\$HOME/bin"
    [ -d "\$HOME/scripts" ] && add_to_path "\$HOME/scripts"

    echo "Development environment PATH configured!"
}

# === PATH BACKUP AND RESTORE SYSTEM ===
# Advanced backup system
backup_path() {
    local backup_name="\${1:-\$(date +%Y%m%d_%H%M%S)}"
    mkdir -p ~/.path_backups
    echo "export SAVED_PATH='\$PATH'" > ~/.path_backups/\$backup_name
    echo "PATH backed up as: \$backup_name"
}

restore_path() {
    local backup_name="\$1"
    if [ -f ~/.path_backups/\$backup_name ]; then
        source ~/.path_backups/\$backup_name
        export PATH="\$SAVED_PATH"
        echo "PATH restored from: \$backup_name"
    else
        echo "Backup '\$backup_name' not found"
        echo "Available backups:"
        ls ~/.path_backups/ 2>/dev/null || echo "No backups found"
    fi
}

# === THE PATH MASTER'S TOOLKIT ===
# Ultimate PATH management function
path_master() {
    case "\$1" in
        "show")
            show_path_priorities
            ;;
        "analyze")
            analyze_path
            ;;
        "optimize")
            optimize_path
            ;;
        "security")
            check_path_security
            ;;
        "backup")
            backup_path "\$2"
            ;;
        "restore")
            restore_path "\$2"
            ;;
        "dev")
            setup_dev_environment
            ;;
        "add")
            add_to_path "\$2"
            ;;
        "find")
            find_command_source "\$2"
            ;;
        *)
            echo "🧙‍♂️ PATH Master Commands:"
            echo "  path_master show      - Show PATH with priorities"
            echo "  path_master analyze   - Analyze PATH statistics"
            echo "  path_master optimize  - Remove duplicates and clean PATH"
            echo "  path_master security  - Check PATH security"
            echo "  path_master backup    - Backup current PATH"
            echo "  path_master restore   - Restore PATH from backup"
            echo "  path_master dev       - Setup development environment"
            echo "  path_master add DIR   - Safely add directory to PATH"
            echo "  path_master find CMD  - Find command in PATH"
            ;;
    esac
}

# === CONGRATULATIONS! ===
echo "🎓 PATH Mastery Complete!"
echo "You now understand:"
echo "✅ What \$PATH is and how it works"
echo "✅ How to modify PATH temporarily and permanently"
echo "✅ Environment variables and their relationships"
echo "✅ PATH troubleshooting and debugging"
echo "✅ Advanced PATH management techniques"
echo "✅ Security considerations for PATH"
echo "✅ PATH optimization and analytics"
echo ""
echo "🧙‍♂️ You are now a PATH Wizard!"
echo "Use your powers responsibly! 🚀"`
      }
    ]
  }
}