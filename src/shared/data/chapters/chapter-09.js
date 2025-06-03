export const chapter9 = {
  id: '09',
  icon: '🐚',
  title: 'BASH SHELL',
  description: 'Mastering the Bash shell',
  slug: 'bash-shell',
  content: {
    overview: 'Welcome to the BASH SHELL - your command-line superpower and the gateway to Linux mastery! 🐚 If you\'ve ever wondered what makes Linux users so productive, it\'s not magic - it\'s Bash. While other operating systems treat the command line like an afterthought, Linux puts the shell at the center of everything. Bash (Bourne Again Shell) isn\'t just a way to type commands - it\'s a full programming language, automation engine, and productivity multiplier all rolled into one. Think of it as your personal assistant that never sleeps, never complains, and can automate literally anything you can imagine. We\'re going to transform you from someone who types commands one at a time into a shell scripting wizard who can automate entire workflows with a few lines of code. By the end of this chapter, you\'ll understand why experienced Linux users prefer the terminal over GUI applications for most tasks! 🚀',
    sections: [
      {
        title: '1. Bash Fundamentals - Your Command-Line DNA 🧬',
        content: 'Bash is the default shell on most Linux systems, and for good reason - it\'s powerful, flexible, and has been battle-tested for decades. But what exactly is a shell? Think of it as the translator between you and the Linux kernel. When you type a command, Bash interprets it, figures out what you want to do, and makes it happen. It\'s like having a super-intelligent assistant who speaks both human and computer fluently. Understanding Bash fundamentals isn\'t just about memorizing commands - it\'s about learning to think in terms of automation and efficiency.',
        codeExample: `# === BASH BASICS AND IDENTITY ===
echo \$SHELL                     # "What shell am I using?"
bash --version                  # "What version of Bash?"
echo \$BASH_VERSION              # "Bash version from environment"
ps -p \$\$                       # "What process is my current shell?"

# === UNDERSTANDING YOUR BASH ENVIRONMENT ===
echo \$HOME                      # "Where is my home directory?"
echo \$USER                      # "Who am I?"
echo \$PWD                       # "Where am I right now?"
echo \$PATH                      # "Where does Bash look for commands?"
env | grep BASH                 # "Show all Bash-related environment variables"

# === BASH COMMAND TYPES ===
type ls                         # "What type of command is 'ls'?"
type cd                         # "What about 'cd'?" (it's a builtin!)
type echo                       # "What about 'echo'?"
type -a python                  # "Show all versions of python in PATH"

# === BASH BUILT-IN COMMANDS ===
help                            # "Show all Bash built-in commands"
help cd                         # "Help for specific built-in command"
enable                          # "Show enabled built-in commands"
enable -n echo                  # "Disable echo built-in"
enable echo                     # "Re-enable echo built-in"

# === COMMAND EXECUTION BASICS ===
echo "Hello, Bash!"             # "Simple command execution"
date                            # "Show current date and time"
uptime                          # "How long has system been running?"
whoami                          # "Current username"
id                              # "User and group information"

# === BASH COMMAND HISTORY ===
history                         # "Show command history"
history 10                      # "Show last 10 commands"
!!                              # "Repeat last command"
!n                              # "Repeat command number n from history"
!string                         # "Repeat last command starting with 'string'"
^old^new                        # "Replace 'old' with 'new' in last command"

# === BASH SHORTCUTS (LIFE CHANGERS!) ===
# Ctrl+A = Move to beginning of line
# Ctrl+E = Move to end of line
# Ctrl+U = Delete from cursor to beginning
# Ctrl+K = Delete from cursor to end
# Ctrl+W = Delete word before cursor
# Ctrl+L = Clear screen (same as 'clear')
# Ctrl+R = Reverse search through history
# Tab    = Auto-complete commands and filenames

# === BASH PROMPT CUSTOMIZATION ===
echo \$PS1                       # "Show current prompt format"
PS1="[\\u@\\h \\W]\\$ "           # "Set simple prompt"
PS1="\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ " # "Colorful prompt"

# === BASH CONFIGURATION FILES ===
ls -la ~/.bashrc                # "User Bash configuration"
ls -la ~/.bash_profile          # "Login shell configuration"
ls -la ~/.bash_history          # "Command history file"
ls -la /etc/bash.bashrc         # "System-wide Bash configuration"

# === BASH COMMAND COMPLETION ===
# Press Tab to complete:
ls /usr/b[TAB]                  # "Complete to /usr/bin/"
sudo systemctl res[TAB]         # "Complete to 'restart'"
cd ~/Doc[TAB]                   # "Complete to ~/Documents/"

# === THE BASH REALITY CHECK ===
echo "🐚 Bash Reality:"
echo "Bash = Your Linux superpower"
echo "Every command you type goes through Bash"
echo "Bash can automate anything you can do manually"
echo "Master Bash = Master Linux productivity"

# === BASH DEBUGGING ===
set -x                          # "Enable command tracing"
echo "This will show how it's executed"
set +x                          # "Disable command tracing"

bash -x script.sh               # "Run script with tracing"
bash -n script.sh               # "Check script syntax without running"`
      },
      {
        title: '2. Variables and Environment - Bash\'s Memory System 🧠',
        content: 'Variables in Bash are like your shell\'s memory system - they store information that you can use and reuse throughout your session. But Bash variables aren\'t just simple storage containers - they\'re dynamic, powerful tools that can transform how you work. Understanding variables is the difference between typing the same paths over and over again and having Bash remember everything for you. We\'re going to master both local variables and environment variables, and learn how to make Bash work smarter, not harder.',
        codeExample: `# === BASIC VARIABLE OPERATIONS ===
name="John"                     # "Create a variable (no spaces around =!)"
echo \$name                      # "Use the variable"
echo "Hello, \$name!"            # "Variable in string"
echo "Hello, \${name}!"          # "Variable with braces (safer)"

# === VARIABLE ASSIGNMENT RULES ===
# ✅ Correct:
myvar="value"
myvar=42
myvar="/path/to/file"

# ❌ Wrong:
# myvar = "value"               # Spaces around = are NOT allowed!
# my var="value"                # Spaces in variable names are NOT allowed!

# === ENVIRONMENT VARIABLES ===
export MYVAR="global value"     # "Make variable available to child processes"
env | grep MYVAR                # "Check if variable is in environment"
unset MYVAR                     # "Remove variable"

# === SPECIAL BASH VARIABLES ===
echo \$0                         # "Script name or shell name"
echo \$1                         # "First command-line argument"
echo \$2                         # "Second command-line argument"
echo \$#                         # "Number of arguments"
echo \$@                         # "All arguments as separate words"
echo \$*                         # "All arguments as single word"
echo \$?                         # "Exit status of last command"
echo \$\$                        # "Process ID of current shell"
echo \$!                         # "Process ID of last background job"

# === VARIABLE EXPANSION MAGIC ===
file="document.txt"
echo \${file}                    # "Basic expansion"
echo \${file%.txt}               # "Remove .txt from end"
echo \${file%.*}                 # "Remove extension"
echo \${file#doc}                # "Remove 'doc' from beginning"
echo \${file/.txt/.pdf}          # "Replace .txt with .pdf"

# === DEFAULT VALUES AND ERROR HANDLING ===
echo \${undefined_var:-"default"}        # "Use default if variable is unset"
echo \${undefined_var:="default"}        # "Set and use default if unset"
echo \${undefined_var:?"Error message"}  # "Error if variable is unset"
echo \${defined_var:+"alternative"}      # "Use alternative if variable is set"

# === ARRAY VARIABLES ===
fruits=("apple" "banana" "orange")       # "Create array"
echo \${fruits[0]}               # "First element"
echo \${fruits[1]}               # "Second element"
echo \${fruits[@]}               # "All elements"
echo \${#fruits[@]}              # "Number of elements"
fruits[3]="grape"               # "Add element"
unset fruits[1]                 # "Remove element"

# === COMMAND SUBSTITUTION ===
current_date=\$(date)            # "Store command output in variable"
files_count=\$(ls | wc -l)       # "Count files in current directory"
current_user=\$(whoami)          # "Store current username"

# Alternative syntax (older):
current_date=\`date\`             # "Backticks also work but \$() is preferred"

# === ARITHMETIC OPERATIONS ===
num1=10
num2=5
sum=\$((num1 + num2))            # "Addition"
diff=\$((num1 - num2))           # "Subtraction"
product=\$((num1 * num2))        # "Multiplication"
quotient=\$((num1 / num2))       # "Division"
remainder=\$((num1 % num2))      # "Modulo"

echo "Sum: \$sum"
echo "Difference: \$diff"

# === STRING OPERATIONS ===
text="Hello World"
echo \${#text}                   # "String length"
echo \${text:0:5}                # "Substring: characters 0-4"
echo \${text:6}                  # "Substring: from character 6 to end"
echo \${text^^}                  # "Convert to uppercase"
echo \${text,,}                  # "Convert to lowercase"

# === PRACTICAL VARIABLE EXAMPLES ===
# Create useful variables
BACKUP_DIR="/backup/\$(date +%Y%m%d)"
LOG_FILE="/var/log/myapp.log"
CONFIG_FILE="/etc/myapp/config.conf"

# Use them in commands
mkdir -p \$BACKUP_DIR
tail -f \$LOG_FILE
cp \$CONFIG_FILE \$BACKUP_DIR/

# === VARIABLE BEST PRACTICES ===
echo "🧠 Variable Best Practices:"
echo "1. Use descriptive names: backup_dir not bd"
echo "2. Use uppercase for environment variables"
echo "3. Use lowercase for local variables"
echo "4. Always quote variables: \\\"\\\$var\\\" not \\\$var"
echo "5. Use \\\${var} syntax when concatenating"

# === DEBUGGING VARIABLES ===
set -u                          # "Error on undefined variables"
echo \$undefined_var             # "This will cause an error"
set +u                          # "Disable undefined variable errors"

declare -p variable_name        # "Show variable attributes and value"`
      },
      {
        title: '3. Control Flow and Logic - Making Bash Think 🤖',
        content: 'This is where Bash transforms from a simple command executor into a powerful programming language. Control flow structures like if statements, loops, and functions turn your shell into a decision-making, problem-solving machine. Think of it as teaching Bash to think logically and make decisions based on conditions. Once you master control flow, you\'ll be able to create scripts that can handle any situation, adapt to different conditions, and automate complex workflows that would take hours to do manually.',
        codeExample: `# === IF STATEMENTS - DECISION MAKING ===
# Basic if statement
if [ "\$USER" = "root" ]; then
    echo "You are the root user!"
else
    echo "You are a regular user"
fi

# File testing
if [ -f "/etc/passwd" ]; then
    echo "Password file exists"
fi

if [ -d "/home" ]; then
    echo "Home directory exists"
fi

# Numeric comparisons
age=25
if [ \$age -gt 18 ]; then
    echo "You are an adult"
elif [ \$age -eq 18 ]; then
    echo "You just became an adult!"
else
    echo "You are a minor"
fi

# === COMPARISON OPERATORS ===
echo "🤖 Comparison Operators:"
echo "String: = != < >"
echo "Numeric: -eq -ne -lt -le -gt -ge"
echo "Files: -f (file) -d (directory) -r (readable) -w (writable) -x (executable)"
echo "Logic: && (and) || (or) ! (not)"

# === ADVANCED CONDITIONS ===
# Multiple conditions
if [ \$age -gt 18 ] && [ "\$USER" != "root" ]; then
    echo "Adult non-root user"
fi

# Pattern matching
name="John"
if [[ \$name == J* ]]; then
    echo "Name starts with J"
fi

# Regular expressions
email="user@example.com"
if [[ \$email =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\$ ]]; then
    echo "Valid email format"
fi

# === FOR LOOPS - REPETITION MASTERY ===
# Basic for loop
for i in 1 2 3 4 5; do
    echo "Number: \$i"
done

# Range loops
for i in {1..10}; do
    echo "Count: \$i"
done

# Step loops
for i in {0..20..2}; do
    echo "Even number: \$i"
done

# File loops
for file in *.txt; do
    echo "Processing: \$file"
done

# Array loops
fruits=("apple" "banana" "orange")
for fruit in "\${fruits[@]}"; do
    echo "Fruit: \$fruit"
done

# === WHILE LOOPS - CONDITIONAL REPETITION ===
# Basic while loop
counter=1
while [ \$counter -le 5 ]; do
    echo "Counter: \$counter"
    counter=\$((counter + 1))
done

# Reading files line by line
while IFS= read -r line; do
    echo "Line: \$line"
done < /etc/passwd

# Infinite loop (use with caution!)
# while true; do
#     echo "This runs forever"
#     sleep 1
# done

# === CASE STATEMENTS - MULTIPLE CHOICE ===
read -p "Enter your choice (1-3): " choice
case \$choice in
    1)
        echo "You chose option 1"
        ;;
    2)
        echo "You chose option 2"
        ;;
    3)
        echo "You chose option 3"
        ;;
    *)
        echo "Invalid choice"
        ;;
esac

# Pattern matching in case
filename="document.pdf"
case \$filename in
    *.txt)
        echo "Text file"
        ;;
    *.pdf)
        echo "PDF file"
        ;;
    *.jpg|*.png|*.gif)
        echo "Image file"
        ;;
    *)
        echo "Unknown file type"
        ;;
esac

# === FUNCTIONS - REUSABLE CODE BLOCKS ===
# Basic function
greet() {
    echo "Hello, \$1!"
}

# Call the function
greet "World"
greet "Bash"

# Function with multiple parameters
calculate() {
    local num1=\$1
    local num2=\$2
    local operation=\$3

    case \$operation in
        "add")
            echo \$((num1 + num2))
            ;;
        "subtract")
            echo \$((num1 - num2))
            ;;
        "multiply")
            echo \$((num1 * num2))
            ;;
        *)
            echo "Unknown operation"
            return 1
            ;;
    esac
}

# Use the function
result=\$(calculate 10 5 "add")
echo "Result: \$result"

# === FUNCTION BEST PRACTICES ===
# Function with error handling
backup_file() {
    local source="\$1"
    local backup_dir="\$2"

    # Check if source file exists
    if [ ! -f "\$source" ]; then
        echo "Error: Source file '\$source' does not exist"
        return 1
    fi

    # Create backup directory if it doesn't exist
    mkdir -p "\$backup_dir"

    # Copy file with timestamp
    local timestamp=\$(date +%Y%m%d_%H%M%S)
    local backup_name="\$(basename "\$source")_\$timestamp"

    if cp "\$source" "\$backup_dir/\$backup_name"; then
        echo "Backup created: \$backup_dir/\$backup_name"
        return 0
    else
        echo "Error: Failed to create backup"
        return 1
    fi
}

# === PRACTICAL CONTROL FLOW EXAMPLES ===
# System monitoring script
check_system() {
    echo "🔍 System Check:"

    # Check disk space
    disk_usage=\$(df / | awk 'NR==2 {print \$5}' | sed 's/%//')
    if [ \$disk_usage -gt 80 ]; then
        echo "⚠️ Warning: Disk usage is \${disk_usage}%"
    else
        echo "✅ Disk usage is normal (\${disk_usage}%)"
    fi

    # Check memory
    mem_usage=\$(free | awk 'NR==2{printf "%.0f", \$3*100/\$2}')
    if [ \$mem_usage -gt 90 ]; then
        echo "⚠️ Warning: Memory usage is \${mem_usage}%"
    else
        echo "✅ Memory usage is normal (\${mem_usage}%)"
    fi

    # Check load average
    load=\$(uptime | awk -F'load average:' '{print \$2}' | awk '{print \$1}' | sed 's/,//')
    if (( \$(echo "\$load > 2.0" | bc -l) )); then
        echo "⚠️ Warning: High load average (\$load)"
    else
        echo "✅ Load average is normal (\$load)"
    fi
}

# === THE CONTROL FLOW CHEAT SHEET ===
echo "🤖 Control Flow Quick Reference:"
echo "if [ condition ]; then ... fi"
echo "for item in list; do ... done"
echo "while [ condition ]; do ... done"
echo "case \\\$var in pattern) ... ;; esac"
echo "function_name() { ... }"
echo "[ -f file ] = file exists"
echo "[ -d dir ] = directory exists"
echo "[ \\\$a -eq \\\$b ] = numbers equal"`
      },
      {
        title: '4. Input/Output and Pipes - The Data Highway 🚛',
        content: 'This is where Bash becomes a data processing powerhouse! Input/output redirection and pipes are the highways that move data between commands, files, and processes. Think of pipes as assembly lines where each command does one job perfectly, then passes the result to the next command. This is the Unix philosophy in action: small tools that do one thing well, connected together to solve complex problems. Master pipes and redirection, and you\'ll be processing data like a Linux wizard.',
        codeExample: `# === BASIC INPUT/OUTPUT REDIRECTION ===
# Output redirection
echo "Hello World" > file.txt          # "Write to file (overwrite)"
echo "Second line" >> file.txt         # "Append to file"
ls -la > directory_listing.txt         # "Save command output to file"

# Input redirection
sort < unsorted.txt                    # "Read from file as input"
wc -l < file.txt                       # "Count lines from file"

# Error redirection
ls /nonexistent 2> error.log           # "Redirect errors to file"
ls /nonexistent 2>> error.log          # "Append errors to file"
ls /nonexistent 2>/dev/null            # "Discard errors"

# Redirect both output and errors
command > output.txt 2>&1              # "Both to same file"
command &> output.txt                  # "Shorthand for above"
command > output.txt 2> error.txt      # "Separate files"

# === PIPES - THE ASSEMBLY LINE ===
# Basic pipes
ls -la | grep "txt"                    # "List files, then filter for .txt"
ps aux | grep firefox                  # "Show processes, then find Firefox"
cat /etc/passwd | wc -l                # "Count users in system"

# Multiple pipes
cat /var/log/syslog | grep "error" | wc -l    # "Count error lines in log"
ps aux | sort -k 3 -nr | head -10             # "Top 10 CPU-using processes"
ls -la | awk '{print \$9}' | sort              # "List filenames sorted"

# === ADVANCED PIPE TECHNIQUES ===
# tee - Split output to file and stdout
ls -la | tee directory_listing.txt     # "Show output AND save to file"
ps aux | tee processes.txt | grep firefox  # "Save all processes, show Firefox"

# xargs - Convert input to arguments
find . -name "*.txt" | xargs rm         # "Find .txt files and delete them"
echo "file1 file2 file3" | xargs touch # "Create multiple files"
ls *.txt | xargs -I {} cp {} backup/   # "Copy each .txt file to backup/"

# === HERE DOCUMENTS AND HERE STRINGS ===
# Here document
cat << EOF > config.txt
This is a multi-line
configuration file
with variables: \$USER
EOF

# Here string
grep "pattern" <<< "string to search"
base64 <<< "encode this text"

# === PROCESS SUBSTITUTION ===
# Compare output of two commands
diff <(ls dir1) <(ls dir2)             # "Compare directory contents"
comm <(sort file1) <(sort file2)       # "Compare sorted files"

# Use command output as filename
cat <(echo "temporary content")         # "Use command output as file"

# === NAMED PIPES (FIFOS) ===
mkfifo mypipe                          # "Create named pipe"
echo "data" > mypipe &                 # "Write to pipe in background"
cat mypipe                             # "Read from pipe"

# === PRACTICAL PIPE EXAMPLES ===
# Log analysis
tail -f /var/log/syslog | grep -i error | while read line; do
    echo "[\$(date)] ERROR: \$line"
done

# System monitoring
ps aux | awk '{print \$3, \$11}' | sort -nr | head -5  # "Top 5 CPU users"
df -h | awk 'NR>1 {print \$5, \$6}' | sort -nr        # "Disk usage by mount"

# Text processing
cat file.txt | tr '[:lower:]' '[:upper:]' | sort | uniq -c  # "Count unique words (uppercase)"

# Network analysis
netstat -tuln | grep LISTEN | awk '{print \$4}' | cut -d: -f2 | sort -n  # "List listening ports"

# === FILE PROCESSING PIPELINE ===
# Complex data processing
process_log() {
    local logfile="\$1"

    cat "\$logfile" |
    grep -v "^#" |                     # Remove comments
    awk '{print \$1, \$4, \$7}' |       # Extract specific fields
    sort |                             # Sort the data
    uniq -c |                          # Count occurrences
    sort -nr |                         # Sort by count (descending)
    head -20                           # Show top 20
}

# === STREAM EDITING ===
# sed - Stream editor
echo "Hello World" | sed 's/World/Bash/'              # "Replace World with Bash"
cat file.txt | sed '/pattern/d'                       # "Delete lines containing pattern"
ls -la | sed 's/^-rw-r--r--/FILE:/'                  # "Replace permissions with FILE:"

# awk - Pattern scanning and processing
ps aux | awk '{sum += \$3} END {print "Total CPU:", sum "%"}'  # "Sum CPU usage"
cat /etc/passwd | awk -F: '{print \$1, \$3}'                  # "Show username and UID"

# === REAL-TIME DATA PROCESSING ===
# Monitor system in real-time
watch -n 1 'ps aux | sort -k 3 -nr | head -10'       # "Top processes every second"
tail -f /var/log/syslog | grep --line-buffered "ssh" # "Monitor SSH activity"

# === THE I/O REDIRECTION CHEAT SHEET ===
echo "🚛 I/O Redirection Quick Reference:"
echo "command > file     = Redirect output to file"
echo "command >> file    = Append output to file"
echo "command < file     = Read input from file"
echo "command 2> file    = Redirect errors to file"
echo "command &> file    = Redirect both output and errors"
echo "cmd1 | cmd2        = Pipe output of cmd1 to cmd2"
echo "command | tee file = Show output AND save to file"
echo "find | xargs cmd   = Use find results as arguments"`
      },
      {
        title: '5. Bash Scripting Mastery - Automation Superpowers 🚀',
        content: 'This is where you transform from a Bash user into a Bash wizard! Scripting is where all your Bash knowledge comes together to create powerful automation tools. Think of scripts as your digital employees - they work 24/7, never make mistakes, and can handle complex tasks while you sleep. We\'re going to cover advanced scripting techniques, best practices, debugging, and real-world automation scenarios that will make you indispensable in any technical environment.',
        codeExample: `# === SCRIPT STRUCTURE AND BEST PRACTICES ===
#!/bin/bash
# Script: system_monitor.sh
# Purpose: Monitor system resources and send alerts
# Author: Your Name
# Date: \$(date +%Y-%m-%d)
# Version: 1.0

# === SCRIPT CONFIGURATION ===
set -euo pipefail                       # "Exit on error, undefined vars, pipe failures"
# set -e = exit on error
# set -u = exit on undefined variable
# set -o pipefail = exit on pipe failure

# Script variables
SCRIPT_NAME="\$(basename "\$0")"
SCRIPT_DIR="\$(cd "\$(dirname "\$0")" && pwd)"
LOG_FILE="/var/log/\${SCRIPT_NAME%.sh}.log"
CONFIG_FILE="\${SCRIPT_DIR}/config.conf"

# === LOGGING FUNCTIONS ===
log() {
    echo "[\$(date '+%Y-%m-%d %H:%M:%S')] \$*" | tee -a "\$LOG_FILE"
}

log_error() {
    echo "[\$(date '+%Y-%m-%d %H:%M:%S')] ERROR: \$*" | tee -a "\$LOG_FILE" >&2
}

log_info() {
    echo "[\$(date '+%Y-%m-%d %H:%M:%S')] INFO: \$*" | tee -a "\$LOG_FILE"
}

# === ERROR HANDLING ===
cleanup() {
    log_info "Script cleanup initiated"
    # Remove temporary files
    rm -f /tmp/\${SCRIPT_NAME}_*
    log_info "Cleanup completed"
}

error_handler() {
    local line_number="\$1"
    log_error "Script failed at line \$line_number"
    cleanup
    exit 1
}

# Set error trap
trap 'error_handler \$LINENO' ERR
trap cleanup EXIT

# === COMMAND LINE ARGUMENT PARSING ===
usage() {
    cat << EOF
Usage: \$SCRIPT_NAME [OPTIONS]

OPTIONS:
    -h, --help          Show this help message
    -v, --verbose       Enable verbose output
    -c, --config FILE   Use custom config file
    -d, --dry-run       Show what would be done without executing
    -t, --threshold N   Set alert threshold (default: 80)

EXAMPLES:
    \$SCRIPT_NAME --verbose
    \$SCRIPT_NAME --config /etc/myconfig.conf
    \$SCRIPT_NAME --threshold 90 --dry-run

EOF
}

# Default values
VERBOSE=false
DRY_RUN=false
THRESHOLD=80

# Parse command line arguments
while [[ \$# -gt 0 ]]; do
    case \$1 in
        -h|--help)
            usage
            exit 0
            ;;
        -v|--verbose)
            VERBOSE=true
            shift
            ;;
        -c|--config)
            CONFIG_FILE="\$2"
            shift 2
            ;;
        -d|--dry-run)
            DRY_RUN=true
            shift
            ;;
        -t|--threshold)
            THRESHOLD="\$2"
            shift 2
            ;;
        *)
            log_error "Unknown option: \$1"
            usage
            exit 1
            ;;
    esac
done

# === CONFIGURATION MANAGEMENT ===
load_config() {
    if [[ -f "\$CONFIG_FILE" ]]; then
        log_info "Loading configuration from \$CONFIG_FILE"
        source "\$CONFIG_FILE"
    else
        log_info "No config file found, using defaults"
    fi
}

# === ADVANCED FUNCTIONS ===
# Function with return values and error handling
check_disk_space() {
    local mount_point="\${1:-/}"
    local threshold="\${2:-80}"

    local usage
    usage=\$(df "\$mount_point" | awk 'NR==2 {print \$5}' | sed 's/%//')

    if [[ ! "\$usage" =~ ^[0-9]+\$ ]]; then
        log_error "Failed to get disk usage for \$mount_point"
        return 1
    fi

    if [[ \$usage -gt \$threshold ]]; then
        log_error "Disk usage on \$mount_point is \${usage}% (threshold: \${threshold}%)"
        return 2
    else
        log_info "Disk usage on \$mount_point is \${usage}% (OK)"
        return 0
    fi
}

# Function with multiple return values
get_system_info() {
    local -n result=\$1  # nameref to return associative array

    result[hostname]=\$(hostname)
    result[uptime]=\$(uptime -p)
    result[load]=\$(uptime | awk -F'load average:' '{print \$2}' | awk '{print \$1}' | sed 's/,//')
    result[memory_usage]=\$(free | awk 'NR==2{printf "%.0f", \$3*100/\$2}')
    result[disk_usage]=\$(df / | awk 'NR==2 {print \$5}' | sed 's/%//')
}

# === PARALLEL PROCESSING ===
# Function to run tasks in parallel
parallel_check() {
    local pids=()

    # Start background jobs
    check_disk_space "/" 80 &
    pids+=(\$!)

    check_disk_space "/home" 90 &
    pids+=(\$!)

    check_disk_space "/var" 85 &
    pids+=(\$!)

    # Wait for all jobs to complete
    for pid in "\${pids[@]}"; do
        wait "\$pid"
        local exit_code=\$?
        if [[ \$exit_code -ne 0 ]]; then
            log_error "Background job \$pid failed with exit code \$exit_code"
        fi
    done
}

# === ADVANCED STRING PROCESSING ===
# Email validation function
validate_email() {
    local email="\$1"
    local regex='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\$'

    if [[ \$email =~ \$regex ]]; then
        return 0
    else
        return 1
    fi
}

# URL validation function
validate_url() {
    local url="\$1"
    local regex='^https?://[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(/.*)?$'

    if [[ \$url =~ \$regex ]]; then
        return 0
    else
        return 1
    fi
}

# === FILE PROCESSING ===
# Process CSV file
process_csv() {
    local csv_file="\$1"
    local output_file="\$2"

    if [[ ! -f "\$csv_file" ]]; then
        log_error "CSV file not found: \$csv_file"
        return 1
    fi

    log_info "Processing CSV file: \$csv_file"

    # Read CSV and process each line
    local line_count=0
    while IFS=',' read -r col1 col2 col3; do
        ((line_count++))

        # Skip header
        if [[ \$line_count -eq 1 ]]; then
            continue
        fi

        # Process data
        echo "Processing: \$col1 | \$col2 | \$col3" >> "\$output_file"

    done < "\$csv_file"

    log_info "Processed \$((line_count - 1)) records"
}

# === NETWORK OPERATIONS ===
# Check if service is running
check_service() {
    local service_name="\$1"
    local host="\${2:-localhost}"
    local port="\$3"

    if [[ -n "\$port" ]]; then
        # Check network service
        if timeout 5 bash -c "</dev/tcp/\$host/\$port"; then
            log_info "Service \$service_name on \$host:\$port is running"
            return 0
        else
            log_error "Service \$service_name on \$host:\$port is not accessible"
            return 1
        fi
    else
        # Check system service
        if systemctl is-active --quiet "\$service_name"; then
            log_info "Service \$service_name is running"
            return 0
        else
            log_error "Service \$service_name is not running"
            return 1
        fi
    fi
}

# === BACKUP FUNCTIONS ===
# Intelligent backup function
backup_directory() {
    local source_dir="\$1"
    local backup_base="\$2"
    local retention_days="\${3:-7}"

    if [[ ! -d "\$source_dir" ]]; then
        log_error "Source directory does not exist: \$source_dir"
        return 1
    fi

    local timestamp=\$(date +%Y%m%d_%H%M%S)
    local backup_dir="\${backup_base}/backup_\$timestamp"

    log_info "Creating backup: \$source_dir -> \$backup_dir"

    if [[ "\$DRY_RUN" == "true" ]]; then
        log_info "DRY RUN: Would create backup \$backup_dir"
        return 0
    fi

    # Create backup
    if rsync -av --progress "\$source_dir/" "\$backup_dir/"; then
        log_info "Backup completed successfully"

        # Cleanup old backups
        find "\$backup_base" -name "backup_*" -type d -mtime +\$retention_days -exec rm -rf {} \\;
        log_info "Cleaned up backups older than \$retention_days days"

        return 0
    else
        log_error "Backup failed"
        return 1
    fi
}

# === MAIN SCRIPT LOGIC ===
main() {
    log_info "Starting \$SCRIPT_NAME"

    # Load configuration
    load_config

    # Validate environment
    if [[ \$EUID -eq 0 ]]; then
        log_info "Running as root"
    else
        log_info "Running as user: \$USER"
    fi

    # Get system information
    declare -A sys_info
    get_system_info sys_info

    log_info "System: \${sys_info[hostname]}"
    log_info "Uptime: \${sys_info[uptime]}"
    log_info "Load: \${sys_info[load]}"
    log_info "Memory: \${sys_info[memory_usage]}%"
    log_info "Disk: \${sys_info[disk_usage]}%"

    # Perform checks
    if [[ "\$VERBOSE" == "true" ]]; then
        log_info "Running in verbose mode"
        parallel_check
    fi

    # Check critical services
    check_service "ssh"
    check_service "nginx" "localhost" "80"

    log_info "\$SCRIPT_NAME completed successfully"
}

# === SCRIPT EXECUTION ===
# Only run main if script is executed directly (not sourced)
if [[ "\${BASH_SOURCE[0]}" == "\${0}" ]]; then
    main "\$@"
fi

# === THE BASH SCRIPTING CHEAT SHEET ===
echo "🚀 Bash Scripting Quick Reference:"
echo "#!/bin/bash                    = Shebang line"
echo "set -euo pipefail             = Strict mode"
echo "trap 'cleanup' EXIT           = Cleanup on exit"
echo 'local var="\$1"                = Local variable'
echo 'if [[ condition ]]; then      = Modern test syntax'
echo 'while IFS= read -r line       = Safe file reading'
echo 'function_name() { ... }       = Function definition'
echo "\\\$# = argument count, \\\$@ = all arguments"
echo "Always quote variables: \\\"\\\$var\\\""
echo "Use \\\${var} for concatenation"

# === CONGRATULATIONS! ===
echo "🎓 BASH MASTERY COMPLETE!"
echo "========================"
echo "You now understand:"
echo "✅ Bash fundamentals and environment"
echo "✅ Variables, arrays, and parameter expansion"
echo "✅ Control flow: if, loops, functions"
echo "✅ I/O redirection and pipes"
echo "✅ Advanced scripting and automation"
echo "✅ Error handling and debugging"
echo "✅ Real-world automation scenarios"
echo ""
echo "🐚 You are now a BASH WIZARD!"
echo "Go forth and automate everything! 🚀"
echo ""
echo "Remember: With great Bash power comes great automation responsibility!"
echo "Use your shell scripting superpowers wisely! 💪"`
      }
    ]
  }
}