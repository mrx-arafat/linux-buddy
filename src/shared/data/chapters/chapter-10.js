export const chapter10 = {
  id: '10',
  icon: '🎨',
  title: 'BASH CONFIG',
  description: 'Customizing your Bash environment',
  slug: 'bash-config',
  content: {
    overview: 'Welcome to BASH CONFIG - where your terminal transforms from boring default to personalized productivity powerhouse! 🎨 If you\'ve ever wondered why some people\'s terminals look like they\'re from the future while yours looks like it\'s from 1995, this chapter is your makeover guide. Bash configuration isn\'t just about making things pretty (though we\'ll definitely do that) - it\'s about creating a command-line environment that works exactly the way YOU work. Think of it as interior decorating for your terminal, but instead of throw pillows and accent walls, we\'re talking about custom prompts, intelligent aliases, and automation that makes you look like a Linux wizard. We\'re going to turn your basic terminal into a personalized command center that anticipates your needs and makes you more productive than you ever thought possible! 🚀',
    sections: [
      {
        title: '1. Configuration Files - Your Bash DNA 🧬',
        content: 'Bash configuration files are like your shell\'s DNA - they define how your terminal looks, behaves, and responds to your commands. But here\'s the thing: there are multiple config files, and they load in a specific order for specific situations. Understanding this hierarchy is crucial because putting the wrong setting in the wrong file is like trying to program your TV remote to start your car - it just won\'t work. We\'re going to demystify the entire Bash configuration ecosystem and turn you into a config file master.',
        codeExample: `# === BASH CONFIGURATION FILE HIERARCHY ===
echo "🧬 Bash Config Files (in loading order):"
echo "System-wide files (affect all users):"
echo "  /etc/profile           - Login shells for all users"
echo "  /etc/bash.bashrc       - Non-login shells for all users"
echo "  /etc/bashrc            - Alternative location (some distros)"
echo ""
echo "User-specific files (your personal config):"
echo "  ~/.bash_profile        - Login shells (runs first)"
echo "  ~/.bash_login          - Login shells (if .bash_profile missing)"
echo "  ~/.profile             - Login shells (if both above missing)"
echo "  ~/.bashrc              - Non-login shells (most important!)"
echo "  ~/.bash_logout         - Runs when login shell exits"

# === UNDERSTANDING SHELL TYPES ===
echo "🔍 Shell Types Explained:"
echo "Login shell    = When you log in via SSH or console"
echo "Non-login shell = When you open terminal in GUI"
echo "Interactive    = You can type commands"
echo "Non-interactive = Running scripts"

# Check what type of shell you're in
if [[ \$- == *i* ]]; then
    echo "✅ This is an interactive shell"
else
    echo "❌ This is a non-interactive shell"
fi

if shopt -q login_shell; then
    echo "✅ This is a login shell"
else
    echo "❌ This is a non-login shell"
fi

# === VIEWING CURRENT CONFIG FILES ===
echo "📁 Your Current Config Files:"
for file in ~/.bash_profile ~/.bash_login ~/.profile ~/.bashrc ~/.bash_logout; do
    if [[ -f "\$file" ]]; then
        echo "✅ \$file exists (\$(wc -l < "\$file") lines)"
    else
        echo "❌ \$file missing"
    fi
done

# === SYSTEM CONFIG FILES ===
echo "🌐 System Config Files:"
for file in /etc/profile /etc/bash.bashrc /etc/bashrc; do
    if [[ -f "\$file" ]]; then
        echo "✅ \$file exists (\$(wc -l < "\$file") lines)"
    else
        echo "❌ \$file missing"
    fi
done

# === CONFIGURATION FILE BEST PRACTICES ===
echo "🎯 Config File Best Practices:"
echo "~/.bashrc      = Put most customizations here"
echo "~/.bash_profile = Keep minimal, source ~/.bashrc"
echo "~/.profile     = POSIX-compatible settings only"
echo "~/.bash_logout = Cleanup tasks when logging out"

# === TYPICAL .bash_profile CONTENT ===
echo "📝 Typical ~/.bash_profile structure:"
cat << 'EOF'
#!/bin/bash
# ~/.bash_profile

# Source ~/.bashrc if it exists
if [[ -f ~/.bashrc ]]; then
    source ~/.bashrc
fi

# Add user's private bin to PATH
if [[ -d "\$HOME/bin" ]]; then
    PATH="\$HOME/bin:\$PATH"
fi

# Login-specific settings go here
EOF

# === TYPICAL .bashrc STRUCTURE ===
echo "📝 Typical ~/.bashrc structure:"
cat << 'EOF'
#!/bin/bash
# ~/.bashrc

# If not running interactively, don't do anything
case \$- in
    *i*) ;;
      *) return;;
esac

# History settings
HISTCONTROL=ignoreboth
HISTSIZE=1000
HISTFILESIZE=2000

# Shell options
shopt -s histappend
shopt -s checkwinsize

# Aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Functions
# (your custom functions here)

# Prompt customization
# (your custom prompt here)

# Environment variables
# (your custom variables here)
EOF

# === RELOADING CONFIGURATION ===
echo "🔄 Reloading Config Files:"
echo "source ~/.bashrc           # Reload .bashrc"
echo "source ~/.bash_profile     # Reload .bash_profile"
echo ". ~/.bashrc                # Alternative syntax"
echo "exec bash                  # Start new shell (full reload)"

# === BACKING UP CONFIG FILES ===
backup_configs() {
    local backup_dir="~/bash_config_backup_\$(date +%Y%m%d_%H%M%S)"
    mkdir -p "\$backup_dir"

    echo "💾 Backing up config files to \$backup_dir"
    for file in ~/.bash_profile ~/.bashrc ~/.profile ~/.bash_logout; do
        if [[ -f "\$file" ]]; then
            cp "\$file" "\$backup_dir/"
            echo "✅ Backed up \$file"
        fi
    done
}

# === CONFIGURATION DEBUGGING ===
debug_config() {
    echo "🔧 Configuration Debug Info:"
    echo "Current shell: \$SHELL"
    echo "Bash version: \$BASH_VERSION"
    echo "Shell options: \$-"
    echo "Login shell: \$(shopt -q login_shell && echo 'Yes' || echo 'No')"
    echo "Interactive: \$([[ \$- == *i* ]] && echo 'Yes' || echo 'No')"
    echo ""
    echo "Config files loaded:"
    echo "BASH_SOURCE: \${BASH_SOURCE[@]}"
}

# === THE CONFIG FILES CHEAT SHEET ===
echo "🧬 Config Files Quick Reference:"
echo "~/.bashrc = Main config file (use this for most things)"
echo "~/.bash_profile = Login shell config (keep minimal)"
echo "~/.profile = POSIX shell config (portable settings)"
echo "source ~/.bashrc = Reload configuration"
echo "exec bash = Start fresh shell with new config"`
      },
      {
        title: '2. Aliases and Functions - Your Command Shortcuts 🚀',
        content: 'Aliases and functions are your productivity multipliers - they turn long, complex commands into simple shortcuts that save you time and keystrokes. Think of aliases as your command-line speed dial, and functions as your custom power tools. The difference between a novice and a power user often comes down to how well they\'ve customized their command shortcuts. We\'re going to create a arsenal of time-saving aliases and intelligent functions that will make you wonder how you ever lived without them.',
        codeExample: `# === BASIC ALIASES ===
# Simple command shortcuts
alias ll='ls -alF'                      # "Detailed list with indicators"
alias la='ls -A'                        # "List all except . and .."
alias l='ls -CF'                        # "List in columns with indicators"
alias ..='cd ..'                        # "Go up one directory"
alias ...='cd ../..'                    # "Go up two directories"
alias ....='cd ../../..'                # "Go up three directories"

# === SAFETY ALIASES ===
alias rm='rm -i'                        # "Confirm before removing"
alias cp='cp -i'                        # "Confirm before overwriting"
alias mv='mv -i'                        # "Confirm before overwriting"
alias ln='ln -i'                        # "Confirm before linking"

# === PRODUCTIVITY ALIASES ===
alias h='history'                       # "Show command history"
alias j='jobs -l'                       # "List active jobs"
alias c='clear'                         # "Clear screen"
alias x='exit'                          # "Quick exit"
alias q='exit'                          # "Another quick exit"

# === DIRECTORY NAVIGATION ===
alias home='cd ~'                       # "Go to home directory"
alias root='cd /'                       # "Go to root directory"
alias dtop='cd ~/Desktop'               # "Go to desktop"
alias docs='cd ~/Documents'             # "Go to documents"
alias down='cd ~/Downloads'             # "Go to downloads"

# === FILE OPERATIONS ===
alias mkdir='mkdir -pv'                 # "Create directories with parents, verbose"
alias grep='grep --color=auto'          # "Colorized grep"
alias fgrep='fgrep --color=auto'        # "Colorized fgrep"
alias egrep='egrep --color=auto'        # "Colorized egrep"

# === SYSTEM INFORMATION ===
alias df='df -h'                        # "Human-readable disk usage"
alias du='du -h'                        # "Human-readable directory usage"
alias free='free -h'                    # "Human-readable memory usage"
alias ps='ps auxf'                      # "Detailed process list"
alias psg='ps aux | grep -v grep | grep -i -E' # "Search processes"

# === NETWORK ALIASES ===
alias ping='ping -c 5'                  # "Ping 5 times only"
alias fastping='ping -c 100 -s.2'       # "Fast ping test"
alias ports='netstat -tulanp'           # "Show all open ports"
alias listening='netstat -tlnp'         # "Show listening ports"

# === GIT ALIASES (if you use Git) ===
alias gs='git status'                   # "Git status"
alias ga='git add'                      # "Git add"
alias gc='git commit'                   # "Git commit"
alias gp='git push'                     # "Git push"
alias gl='git log --oneline'            # "Git log one line"
alias gd='git diff'                     # "Git diff"

# === ADVANCED ALIASES WITH PARAMETERS ===
# Note: For complex operations, use functions instead

# === FUNCTIONS - MORE POWERFUL THAN ALIASES ===
# Extract various archive formats
extract() {
    if [[ -f \$1 ]]; then
        case \$1 in
            *.tar.bz2)   tar xjf \$1     ;;
            *.tar.gz)    tar xzf \$1     ;;
            *.bz2)       bunzip2 \$1     ;;
            *.rar)       unrar x \$1     ;;
            *.gz)        gunzip \$1      ;;
            *.tar)       tar xf \$1      ;;
            *.tbz2)      tar xjf \$1     ;;
            *.tgz)       tar xzf \$1     ;;
            *.zip)       unzip \$1       ;;
            *.Z)         uncompress \$1  ;;
            *.7z)        7z x \$1        ;;
            *)           echo "Don't know how to extract '\$1'" ;;
        esac
    else
        echo "'\$1' is not a valid file"
    fi
}

# Create directory and cd into it
mkcd() {
    mkdir -p "\$1" && cd "\$1"
}

# Find files by name
ff() {
    find . -type f -name "*\$1*" 2>/dev/null
}

# Find directories by name
fd() {
    find . -type d -name "*\$1*" 2>/dev/null
}

# Search for text in files
ftext() {
    grep -r --include="*.\$2" "\$1" . 2>/dev/null
}

# Show file information
info() {
    if [[ -f "\$1" ]]; then
        echo "File: \$1"
        echo "Size: \$(du -h "\$1" | cut -f1)"
        echo "Type: \$(file "\$1")"
        echo "Permissions: \$(ls -la "\$1" | awk '{print \$1}')"
        echo "Owner: \$(ls -la "\$1" | awk '{print \$3":"$4}')"
        echo "Modified: \$(ls -la "\$1" | awk '{print \$6" "\$7" "\$8}')"
    else
        echo "File '\$1' not found"
    fi
}

# Quick backup of a file
backup() {
    cp "\$1" "\$1.backup.\$(date +%Y%m%d_%H%M%S)"
    echo "Backup created: \$1.backup.\$(date +%Y%m%d_%H%M%S)"
}

# Show top 10 largest files in current directory
largest() {
    du -ah . | sort -rh | head -10
}

# Show top 10 most used commands
topcmds() {
    history | awk '{print \$2}' | sort | uniq -c | sort -rn | head -10
}

# Weather function (requires curl)
weather() {
    local city="\${1:-}"
    if [[ -n "\$city" ]]; then
        curl -s "wttr.in/\$city"
    else
        curl -s "wttr.in"
    fi
}

# === CONDITIONAL ALIASES ===
# Only create alias if command exists
if command -v vim &> /dev/null; then
    alias vi='vim'
fi

if command -v code &> /dev/null; then
    alias c.='code .'
fi

if command -v bat &> /dev/null; then
    alias cat='bat'
fi

if command -v exa &> /dev/null; then
    alias ls='exa'
    alias ll='exa -la'
fi

# === MANAGING ALIASES ===
# Show all aliases
show_aliases() {
    echo "📋 Current Aliases:"
    alias | sort
}

# Show all functions
show_functions() {
    echo "⚙️ Current Functions:"
    declare -F | awk '{print \$3}' | sort
}

# Remove an alias
unalias_safe() {
    if alias "\$1" &>/dev/null; then
        unalias "\$1"
        echo "Removed alias: \$1"
    else
        echo "Alias '\$1' not found"
    fi
}

# === ALIAS BEST PRACTICES ===
echo "🚀 Alias & Function Best Practices:"
echo "1. Keep aliases short and memorable"
echo "2. Use functions for complex operations"
echo "3. Add safety confirmations for destructive commands"
echo "4. Group related aliases together"
echo "5. Comment your custom functions"
echo "6. Test aliases before adding to config"

# === THE ALIASES CHEAT SHEET ===
echo "🚀 Aliases Quick Reference:"
echo "alias name='command'       = Create alias"
echo "unalias name              = Remove alias"
echo "alias                     = Show all aliases"
echo "type name                 = Check if alias/function/command"
echo "function name() { ... }   = Create function"
echo "declare -F                = List all functions"`
      },
      {
        title: '3. Prompt Customization - Your Terminal\'s Face 🎭',
        content: 'Your prompt is the face of your terminal - it\'s what you see every single time you type a command. The default prompt is boring and tells you almost nothing useful. But a well-designed custom prompt? That\'s like having a dashboard that shows you exactly what you need to know at a glance. We\'re going to transform your prompt from a basic dollar sign into an information-rich, colorful, and personalized command center that makes you feel like a terminal artist.',
        codeExample: `# === UNDERSTANDING PROMPT VARIABLES ===
echo "🎭 Prompt Variables Explained:"
echo "\\\\u = username"
echo "\\\\h = hostname (short)"
echo "\\\\w = current working directory (full path)"
echo "\\\\W = current working directory (basename only)"
echo "\\\\d = date"
echo "\\\\t = time (24-hour HH:MM:SS)"
echo "\\\\n = newline"
echo "\\\\$ = $ if regular user, # if root"

# === BASIC PROMPT EXAMPLES ===
PS1="\\\\u@\\\\h:\\\\w\\\\$ "                    # "user@hostname:/path$ "
PS1="[\\\\u@\\\\h \\\\W]\\\\$ "                  # "[user@hostname dirname]$ "

# === COLOR CODES ===
echo "🌈 ANSI Color Codes:"
echo "\\\\033[0;31m = Red"
echo "\\\\033[0;32m = Green"
echo "\\\\033[0;33m = Yellow"
echo "\\\\033[0;34m = Blue"
echo "\\\\033[0;35m = Purple"
echo "\\\\033[0;36m = Cyan"
echo "\\\\033[0m    = Reset to default"

# === COLORFUL PROMPT EXAMPLES ===
# Green user@host, blue path
PS1="\\\\[\\\\033[01;32m\\\\]\\\\u@\\\\h\\\\[\\\\033[00m\\\\]:\\\\[\\\\033[01;34m\\\\]\\\\w\\\\[\\\\033[00m\\\\]\\\\$ "

# Red root prompt (for safety)
if [[ \\$EUID -eq 0 ]]; then
    PS1="\\\\[\\\\033[01;31m\\\\]\\\\u@\\\\h\\\\[\\\\033[00m\\\\]:\\\\[\\\\033[01;34m\\\\]\\\\w\\\\[\\\\033[00m\\\\]# "
fi

# === ADVANCED PROMPT WITH GIT STATUS ===
git_prompt() {
    local git_branch
    git_branch=\\$(git branch 2>/dev/null | grep '^*' | colrm 1 2)

    if [[ -n "\\$git_branch" ]]; then
        local git_status=\\$(git status --porcelain 2>/dev/null)
        if [[ -n "\\$git_status" ]]; then
            echo " (\\\\[\\\\033[01;31m\\\\]\\$git_branch*\\\\[\\\\033[00m\\\\])"  # Red if dirty
        else
            echo " (\\\\[\\\\033[01;32m\\\\]\\$git_branch\\\\[\\\\033[00m\\\\])"   # Green if clean
        fi
    fi
}

# === MULTI-LINE PROMPTS ===
# Two-line prompt
PS1="\\\\[\\\\033[01;32m\\\\]\\\\u@\\\\h\\\\[\\\\033[00m\\\\]:\\\\[\\\\033[01;34m\\\\]\\\\w\\\\[\\\\033[00m\\\\]\\\\n\\\\$ "

# Fancy two-line prompt with decorations
PS1="┌─[\\\\[\\\\033[01;32m\\\\]\\\\u@\\\\h\\\\[\\\\033[00m\\\\]]─[\\\\[\\\\033[01;34m\\\\]\\\\w\\\\[\\\\033[00m\\\\]]\\\\n└─\\\\$ "

# === PROMPT PRESETS ===
set_prompt() {
    case "\\$1" in
        "default")
            PS1="\\\\u@\\\\h:\\\\w\\\\$ "
            ;;
        "simple")
            PS1="\\\\$ "
            ;;
        "colorful")
            PS1="\\\\[\\\\033[01;32m\\\\]\\\\u@\\\\h\\\\[\\\\033[00m\\\\]:\\\\[\\\\033[01;34m\\\\]\\\\w\\\\[\\\\033[00m\\\\]\\\\$ "
            ;;
        "git")
            PS1="\\\\[\\\\033[01;32m\\\\]\\\\u@\\\\h\\\\[\\\\033[00m\\\\]:\\\\[\\\\033[01;34m\\\\]\\\\w\\\\[\\\\033[00m\\\\]\\\\\\$(git_prompt)\\\\$ "
            ;;
        "multiline")
            PS1="┌─[\\\\[\\\\033[01;32m\\\\]\\\\u@\\\\h\\\\[\\\\033[00m\\\\]]─[\\\\[\\\\033[01;34m\\\\]\\\\w\\\\[\\\\033[00m\\\\]]\\\\n└─\\\\$ "
            ;;
        *)
            echo "Available prompts: default, simple, colorful, git, multiline"
            ;;
    esac
}

# === THE PROMPT CHEAT SHEET ===
echo "🎭 Prompt Quick Reference:"
echo "PS1='...'                 = Set primary prompt"
echo "\\\\\\\\u@\\\\\\\\h:\\\\\\\\w\\\\\\\\$           = Basic user@host:path$ format"
echo "\\\\\\\\[\\\\\\\\033[01;32m\\\\\\\\]         = Start green color"
echo "\\\\\\\\[\\\\\\\\033[00m\\\\\\\\]           = Reset color"
echo "set_prompt colorful       = Use preset prompt style"`
      },
      {
        title: '4. Environment Variables and PATH - Your Shell\'s Settings 🌍',
        content: 'Environment variables are your shell\'s global settings - they control everything from where your shell looks for commands to how your programs behave. The PATH variable is especially crucial because it determines which commands you can run without typing their full path. Understanding and customizing environment variables is like having admin access to your shell\'s behavior. We\'re going to master the art of environment management and turn your shell into a perfectly tuned productivity machine.',
        codeExample: `# === UNDERSTANDING ENVIRONMENT VARIABLES ===
echo "🌍 Environment Variables Explained:"
echo "Environment variables are global settings that affect all programs"
echo "They're inherited by child processes (scripts, programs you run)"

# === VIEWING ENVIRONMENT VARIABLES ===
env                                     # "Show all environment variables"
echo \\$HOME                             # "Show specific variable"
echo \\$USER                             # "Current username"
echo \\$SHELL                            # "Current shell"
echo \\$PATH                             # "Command search path"

# === IMPORTANT ENVIRONMENT VARIABLES ===
echo "📋 Important Environment Variables:"
echo "PATH     = Directories to search for commands"
echo "HOME     = User's home directory"
echo "USER     = Current username"
echo "SHELL    = Current shell program"
echo "EDITOR   = Default text editor"
echo "LANG     = Language and locale settings"

# === THE PATH VARIABLE ===
echo "🛤️ Understanding PATH:"
echo "PATH contains directories separated by colons (:)"
echo "Shell searches these directories in order for commands"
echo "Current PATH: \\$PATH"

# Show PATH in readable format
echo "📁 PATH directories:"
echo \\$PATH | tr ':' '\\\\n' | nl

# === MODIFYING PATH ===
# Add directory to beginning of PATH (highest priority)
export PATH="/new/directory:\\$PATH"

# Add directory to end of PATH (lowest priority)
export PATH="\\$PATH:/new/directory"

# Add user's private bin directory
if [[ -d "\\$HOME/bin" ]]; then
    export PATH="\\$HOME/bin:\\$PATH"
fi

# === SETTING ENVIRONMENT VARIABLES ===
# Set and export variable
export EDITOR="vim"                     # Default text editor
export PAGER="less"                     # Default pager
export BROWSER="firefox"                # Default browser

# === HISTORY CONFIGURATION ===
export HISTSIZE=10000                   # Commands in memory
export HISTFILESIZE=20000               # Commands in history file
export HISTCONTROL="ignoreboth"         # Ignore duplicates and spaces
export HISTIGNORE="ls:ll:cd:pwd:history" # Commands to ignore

# === DEVELOPMENT ENVIRONMENT ===
# Programming language paths
export GOPATH="\\$HOME/go"
export PATH="\\$PATH:\\$GOPATH/bin"

# Custom project directories
export PROJECTS="\\$HOME/projects"
export SCRIPTS="\\$HOME/scripts"

# === ENVIRONMENT FUNCTIONS ===
# Function to add directory to PATH safely
add_to_path() {
    local dir="\\$1"
    if [[ -d "\\$dir" ]] && [[ ":\\$PATH:" != *":\\$dir:"* ]]; then
        export PATH="\\$dir:\\$PATH"
        echo "Added \\$dir to PATH"
    fi
}

# Function to show environment variable
show_env() {
    local var="\\$1"
    if [[ -n "\\$\\{!var\\}" ]]; then
        echo "\\$var = \\$\\{!var\\}"
    else
        echo "\\$var is not set"
    fi
}

# === ENVIRONMENT DEBUGGING ===
debug_path() {
    echo "🔍 PATH Debug Information:"
    echo "Current PATH: \\$PATH"
    echo ""
    echo "PATH directories:"
    echo \\$PATH | tr ':' '\\\\n' | while read -r dir; do
        if [[ -d "\\$dir" ]]; then
            echo "✅ \\$dir (exists)"
        else
            echo "❌ \\$dir (missing)"
        fi
    done
}

# === THE ENVIRONMENT CHEAT SHEET ===
echo "🌍 Environment Quick Reference:"
echo "export VAR=value          = Set and export variable"
echo "echo \\\\\\$VAR                = Show variable value"
echo "env                       = Show all environment variables"
echo "export PATH=dir:\\\\\\$PATH    = Add directory to PATH"
echo "unset VAR                 = Remove variable"`
      },
      {
        title: '5. Advanced Configuration - Pro-Level Customization 🔧',
        content: 'This is where we separate the casual users from the Bash masters! Advanced configuration involves shell options, completion systems, key bindings, and creating a truly personalized development environment. We\'re talking about the kind of customizations that make other developers ask "How did you do that?" This is your graduation from basic user to terminal wizard - the advanced techniques that will make your command line feel like it was custom-built just for you.',
        codeExample: `# === SHELL OPTIONS (SHOPT) ===
echo "🔧 Shell Options Configuration:"

# History options
shopt -s histappend                     # "Append to history file, don't overwrite"
shopt -s histverify                     # "Verify history expansions before executing"
shopt -s histreedit                     # "Allow re-editing failed history expansions"

# Directory options
shopt -s autocd                         # "Auto-cd when typing just a directory name"
shopt -s cdspell                        # "Correct minor spelling errors in cd"
shopt -s dirspell                       # "Correct directory name spelling in completion"
shopt -s checkwinsize                   # "Update LINES and COLUMNS after each command"

# Globbing options
shopt -s globstar                       # "Enable ** for recursive globbing"
shopt -s nullglob                       # "Null globs expand to nothing"
shopt -s dotglob                        # "Include hidden files in globs"

# Completion options
shopt -s no_empty_cmd_completion        # "Don't try to complete empty commands"
shopt -s progcomp                       # "Enable programmable completion"

# === ADVANCED HISTORY CONFIGURATION ===
# History control
export HISTCONTROL="ignoreboth:erasedups"  # "Ignore duplicates and spaces, erase old duplicates"
export HISTTIMEFORMAT="%Y-%m-%d %H:%M:%S " # "Add timestamps to history"
export HISTIGNORE="ls:ll:la:cd:pwd:exit:clear:history" # "Commands to ignore"

# Real-time history sharing between sessions
export PROMPT_COMMAND="history -a; history -c; history -r; \\$PROMPT_COMMAND"

# === ADVANCED COMPLETION SYSTEM ===
# Enable bash completion if available
if [[ -f /etc/bash_completion ]]; then
    source /etc/bash_completion
elif [[ -f /usr/share/bash-completion/bash_completion ]]; then
    source /usr/share/bash-completion/bash_completion
fi

# Custom completion for your functions
_my_function_completion() {
    local cur prev opts
    COMPREPLY=()
    cur="\\$\\{COMP_WORDS[COMP_CWORD]\\}"
    prev="\\$\\{COMP_WORDS[COMP_CWORD-1]\\}"
    opts="option1 option2 option3"

    COMPREPLY=( \\$(compgen -W "\\$\\{opts\\}" -- \\$\\{cur\\}) )
    return 0
}
complete -F _my_function_completion my_function

# === KEY BINDINGS ===
# Custom key bindings for productivity
bind '\\C-f:forward-word'               # "Ctrl+F to move forward one word"
bind '\\C-b:backward-word'              # "Ctrl+B to move backward one word"
bind '\\C-d:delete-char'                # "Ctrl+D to delete character"
bind '\\C-h:backward-delete-char'       # "Ctrl+H to delete backward"

# History search bindings
bind '\\C-p:history-search-backward'    # "Ctrl+P for history search backward"
bind '\\C-n:history-search-forward'     # "Ctrl+N for history search forward"

# === ADVANCED ALIASES WITH FUNCTIONS ===
# Smart ls that uses colors and shows hidden files
ls() {
    if command -v exa &> /dev/null; then
        command exa --color=auto --group-directories-first "\\$@"
    else
        command ls --color=auto "\\$@"
    fi
}

# Smart cd that lists contents after changing directory
cd() {
    builtin cd "\\$@" && ls
}

# === INTELLIGENT FUNCTIONS ===
# Function to create and enter directory
mkcd() {
    mkdir -p "\\$1" && cd "\\$1"
}

# Function to backup file with timestamp
backup() {
    local file="\\$1"
    local backup_name="\\$\\{file\\}.backup.\\$(date +%Y%m%d_%H%M%S)"
    cp "\\$file" "\\$backup_name"
    echo "Backup created: \\$backup_name"
}

# Function to find and edit files
fe() {
    local file=\\$(find . -name "*\\$1*" -type f | head -1)
    if [[ -n "\\$file" ]]; then
        \\$EDITOR "\\$file"
    else
        echo "File not found: \\$1"
    fi
}

# === DEVELOPMENT ENVIRONMENT SETUP ===
# Project management functions
project() {
    case "\\$1" in
        "new")
            mkdir -p "\\$PROJECTS/\\$2"
            cd "\\$PROJECTS/\\$2"
            git init
            echo "# \\$2" > README.md
            ;;
        "list")
            ls "\\$PROJECTS"
            ;;
        "go")
            cd "\\$PROJECTS/\\$2"
            ;;
        *)
            echo "Usage: project {new|list|go} [name]"
            ;;
    esac
}

# === SYSTEM MONITORING FUNCTIONS ===
# System status function
status() {
    echo "🖥️ System Status:"
    echo "Uptime: \\$(uptime -p)"
    echo "Load: \\$(uptime | awk -F'load average:' '{print \\$2}')"
    echo "Memory: \\$(free -h | awk 'NR==2{printf \\"%.1f%%\\", \\$3*100/\\$2}')"
    echo "Disk: \\$(df -h / | awk 'NR==2{print \\$5}')"
    echo "Processes: \\$(ps aux | wc -l)"
}

# === NETWORK FUNCTIONS ===
# Quick network info
netinfo() {
    echo "🌐 Network Information:"
    echo "External IP: \\$(curl -s ifconfig.me)"
    echo "Internal IP: \\$(hostname -I | awk '{print \\$1}')"
    echo "Gateway: \\$(ip route | grep default | awk '{print \\$3}')"
    echo "DNS: \\$(cat /etc/resolv.conf | grep nameserver | awk '{print \\$2}' | head -1)"
}

# === PRODUCTIVITY ENHANCEMENTS ===
# Quick note-taking function
note() {
    local note_file="\\$HOME/notes/\\$(date +%Y-%m-%d).md"
    mkdir -p "\\$(dirname "\\$note_file")"

    if [[ \\$# -eq 0 ]]; then
        \\$EDITOR "\\$note_file"
    else
        echo "\\$(date '+%H:%M:%S') - \\$*" >> "\\$note_file"
        echo "Note added to \\$note_file"
    fi
}

# === CONFIGURATION MANAGEMENT ===
# Function to edit and reload config
config() {
    case "\\$1" in
        "edit")
            \\$EDITOR ~/.bashrc
            ;;
        "reload")
            source ~/.bashrc
            echo "Configuration reloaded"
            ;;
        "backup")
            cp ~/.bashrc ~/.bashrc.backup.\\$(date +%Y%m%d_%H%M%S)
            echo "Configuration backed up"
            ;;
        *)
            echo "Usage: config {edit|reload|backup}"
            ;;
    esac
}

# === PERFORMANCE OPTIMIZATIONS ===
# Lazy loading for heavy tools
load_nvm() {
    if [[ -s "\\$HOME/.nvm/nvm.sh" ]]; then
        source "\\$HOME/.nvm/nvm.sh"
        source "\\$HOME/.nvm/bash_completion"
    fi
}

# Only load when needed
nvm() {
    unset -f nvm
    load_nvm
    nvm "\\$@"
}

# === ADVANCED PROMPT WITH SYSTEM INFO ===
advanced_prompt() {
    local exit_code=\\$?
    local git_info=\\$(git_prompt 2>/dev/null)
    local load_avg=\\$(uptime | awk -F'load average:' '{print \\$2}' | awk '{print \\$1}' | sed 's/,//')

    # Color codes
    local red='\\[\\033[0;31m\\]'
    local green='\\[\\033[0;32m\\]'
    local yellow='\\[\\033[0;33m\\]'
    local blue='\\[\\033[0;34m\\]'
    local purple='\\[\\033[0;35m\\]'
    local cyan='\\[\\033[0;36m\\]'
    local white='\\[\\033[0;37m\\]'
    local reset='\\[\\033[0m\\]'

    # Build prompt
    PS1="\\$\\{cyan\\}┌─[\\$\\{green\\}\\u@\\h\\$\\{cyan\\}]─[\\$\\{blue\\}\\w\\$\\{cyan\\}]"

    # Add git info if available
    if [[ -n "\\$git_info" ]]; then
        PS1+="─[\\$\\{purple\\}git\\$git_info\\$\\{cyan\\}]"
    fi

    # Add load average if high
    if (( \\$(echo "\\$load_avg > 1.0" | bc -l) 2>/dev/null )); then
        PS1+="─[\\$\\{yellow\\}load:\\$load_avg\\$\\{cyan\\}]"
    fi

    PS1+="\\n\\$\\{cyan\\}└─"

    # Add exit code if non-zero
    if [[ \\$exit_code -ne 0 ]]; then
        PS1+="[\\$\\{red\\}✗ \\$exit_code\\$\\{cyan\\}]"
    fi

    PS1+="\\$\\{reset\\}\\$ "
}

# Set the advanced prompt
PROMPT_COMMAND="advanced_prompt"

# === CONFIGURATION VALIDATION ===
validate_config() {
    echo "🔧 Configuration Validation:"

    # Check if important commands exist
    local commands=("git" "curl" "vim" "less")
    for cmd in "\\$\\{commands[@]\\}"; do
        if command -v "\\$cmd" &> /dev/null; then
            echo "✅ \\$cmd is available"
        else
            echo "❌ \\$cmd is missing"
        fi
    done

    # Check PATH
    echo "PATH has \\$(echo \\$PATH | tr ':' '\\n' | wc -l) directories"

    # Check history settings
    echo "History size: \\$HISTSIZE"
    echo "History file size: \\$HISTFILESIZE"
}

# === THE ADVANCED CONFIG CHEAT SHEET ===
echo "🔧 Advanced Configuration Quick Reference:"
echo "shopt -s option           = Enable shell option"
echo "bind 'key:function'       = Set key binding"
echo "complete -F func cmd      = Set completion function"
echo "PROMPT_COMMAND='cmd'      = Run command before each prompt"
echo "config edit               = Edit configuration"
echo "config reload             = Reload configuration"
echo "validate_config           = Check configuration"

# === CONGRATULATIONS! ===
echo "🎓 BASH CONFIGURATION MASTERY COMPLETE!"
echo "========================================"
echo "You now understand:"
echo "✅ Configuration file hierarchy and loading order"
echo "✅ Creating powerful aliases and functions"
echo "✅ Customizing prompts with colors and information"
echo "✅ Managing environment variables and PATH"
echo "✅ Advanced shell options and key bindings"
echo "✅ Professional development environment setup"
echo "✅ Performance optimizations and lazy loading"
echo ""
echo "🎨 You are now a BASH CONFIGURATION ARTIST!"
echo "Your terminal is now a personalized productivity powerhouse! 🚀"
echo ""
echo "Remember: A well-configured shell is a developer's best friend!"
echo "Keep customizing and make your terminal truly yours! 💪"`
      }
    ]
  }
}