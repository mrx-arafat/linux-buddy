export const chapter12 = {
  id: '12',
  icon: '🔎',
  title: 'GREP && SED',
  description: 'Text processing with grep and sed',
  slug: 'grep-and-sed',
  content: {
    overview: 'Welcome to GREP && SED - the dynamic duo of text processing that will turn you into a command-line text manipulation wizard! 🔎 If you\'ve ever needed to find specific text in files, extract data from logs, or transform text in bulk, these tools are your new best friends. Grep (Global Regular Expression Print) is like having a super-powered search function that can find needles in haystacks, while sed (Stream Editor) is like having a find-and-replace function on steroids. Together, they form the backbone of text processing in Linux - the tools that separate casual users from command-line ninjas. Think of grep as your detective for finding text, and sed as your surgeon for precisely modifying it. By the end of this chapter, you\'ll be processing text files like a data wizard, extracting insights from logs like a detective, and transforming text like a magician! 🚀',
    sections: [
      {
        title: '1. Grep Fundamentals - The Text Detective 🕵️',
        content: 'Grep is your text detective - it searches through files and finds exactly what you\'re looking for, even in massive files with millions of lines. While GUI search functions give up on large files, grep powers through them like a champion. It\'s not just about finding text - it\'s about finding patterns, extracting data, and filtering information with surgical precision. Learning grep is like developing superhuman text-finding abilities that will save you hours of manual searching.',
        codeExample: `# === GREP BASICS ===
grep "pattern" filename.txt         # "Search for pattern in file"
grep "error" /var/log/syslog        # "Find errors in system log"
grep "user" /etc/passwd             # "Find user entries"

# === BASIC GREP OPTIONS ===
echo "🕵️ Essential Grep Options:"
echo "grep -i pattern file    = Case-insensitive search"
echo "grep -v pattern file    = Invert match (show non-matching lines)"
echo "grep -n pattern file    = Show line numbers"
echo "grep -c pattern file    = Count matching lines"
echo "grep -l pattern files   = List files with matches"
echo "grep -r pattern dir/    = Recursive search in directory"

# === GREP EXAMPLES ===
# Case-insensitive search
grep -i "error" /var/log/syslog     # "Find 'error', 'Error', 'ERROR', etc."

# Show line numbers
grep -n "TODO" *.py                 # "Find TODO comments with line numbers"

# Count occurrences
grep -c "failed" /var/log/auth.log  # "Count failed login attempts"

# Invert match (show lines that DON'T match)
grep -v "^#" /etc/ssh/sshd_config   # "Show non-comment lines"

# List files containing pattern
grep -l "import" *.py               # "List Python files with imports"

# === RECURSIVE GREP ===
echo "🌳 Recursive Grep:"
grep -r "function" /home/user/code/ # "Search all files in directory tree"
grep -r --include="*.js" "console" . # "Search only JavaScript files"
grep -r --exclude="*.log" "error" .  # "Exclude log files from search"
grep -r --exclude-dir="node_modules" "import" . # "Exclude directories"

# === GREP WITH MULTIPLE PATTERNS ===
echo "🎯 Multiple Pattern Searches:"
grep -E "error|warning|critical" /var/log/syslog # "Search for multiple patterns"
grep -e "error" -e "warning" /var/log/syslog     # "Alternative syntax"
grep -f patterns.txt /var/log/syslog             # "Patterns from file"

# === GREP CONTEXT ===
echo "📖 Grep Context Options:"
grep -A 3 "error" file.txt          # "Show 3 lines After match"
grep -B 3 "error" file.txt          # "Show 3 lines Before match"
grep -C 3 "error" file.txt          # "Show 3 lines of Context (before and after)"

# === GREP WITH PIPES ===
echo "🔗 Grep with Pipes:"
ps aux | grep firefox               # "Find Firefox processes"
cat /etc/passwd | grep -v nologin   # "Users with login shells"
dmesg | grep -i usb                 # "USB-related kernel messages"
netstat -tuln | grep :80            # "Processes listening on port 80"

# === GREP REGULAR EXPRESSIONS ===
echo "🎭 Grep Regular Expressions:"
grep "^error" file.txt              # "Lines starting with 'error'"
grep "error$" file.txt              # "Lines ending with 'error'"
grep "^$" file.txt                  # "Empty lines"
grep "[0-9]\\\\{3\\\\}" file.txt         # "Three consecutive digits"
grep "\\\\b[A-Z]\\\\{2,\\\\}\\\\b" file.txt   # "Words with 2+ uppercase letters"

# === ADVANCED GREP PATTERNS ===
echo "🚀 Advanced Grep Patterns:"
# Email addresses
grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}" file.txt

# IP addresses
grep -E "([0-9]{1,3}\\\\.){3}[0-9]{1,3}" file.txt

# Phone numbers (US format)
grep -E "\\\\([0-9]{3}\\\\) [0-9]{3}-[0-9]{4}" file.txt

# URLs
grep -E "https?://[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}" file.txt

# === GREP PERFORMANCE TIPS ===
echo "⚡ Grep Performance Tips:"
echo "1. Use fixed strings (-F) when not using regex"
echo "2. Use -q for scripts (quiet mode, just exit status)"
echo "3. Use --include/--exclude for large directory searches"
echo "4. Use -m NUM to stop after NUM matches"
echo "5. Use -l to just list filenames, not content"

# === PRACTICAL GREP EXAMPLES ===
echo "💼 Practical Grep Examples:"

# Find all Python functions
grep -n "def " *.py

# Find configuration errors
grep -i "error\\\\|fail\\\\|critical" /etc/apache2/apache2.conf

# Find large files in ls output
ls -la | grep "^-.*[0-9]\\\\{7,\\\\}"

# Find recent log entries
grep "\$(date +%b\\ %d)" /var/log/syslog

# Find processes using memory
ps aux | grep -v "\\\\[" | sort -k4 -nr | head -10

# === GREP ALTERNATIVES ===
echo "🔄 Grep Alternatives:"
echo "ripgrep (rg)    = Faster grep with better defaults"
echo "ag (silver)     = Fast grep alternative"
echo "ack             = Programmer-friendly grep"
echo "pcregrep        = Perl-compatible regex grep"

# === THE GREP CHEAT SHEET ===
echo "🕵️ Grep Quick Reference:"
echo "grep pattern file       = Basic search"
echo "grep -i pattern file    = Case-insensitive"
echo "grep -r pattern dir/    = Recursive search"
echo "grep -n pattern file    = Show line numbers"
echo "grep -v pattern file    = Invert match"
echo "grep -c pattern file    = Count matches"
echo "grep -A 3 pattern file  = Show 3 lines after"
echo "grep -E 'pat1|pat2'     = Multiple patterns"`
      },
      {
        title: '2. Sed Fundamentals - The Text Surgeon 🔬',
        content: 'Sed (Stream Editor) is your text surgeon - it can perform precise operations on text streams, transforming data as it flows through. While grep finds text, sed modifies it. Think of sed as a powerful find-and-replace tool that can work on streams of data, making it perfect for processing large files or data pipelines. Sed operates on the principle of "edit without opening" - it can transform massive files without loading them entirely into memory.',
        codeExample: `# === SED BASICS ===
sed 's/old/new/' file.txt           # "Replace first occurrence of 'old' with 'new'"
sed 's/old/new/g' file.txt          # "Replace ALL occurrences (global)"
sed -i 's/old/new/g' file.txt       # "Edit file in-place"

# === SED SYNTAX EXPLAINED ===
echo "🔬 Sed Syntax Breakdown:"
echo "s/pattern/replacement/flags"
echo "s = substitute command"
echo "/ = delimiter (can be any character)"
echo "g = global flag (replace all occurrences)"
echo "i = case-insensitive flag"
echo "p = print flag"

# === BASIC SED OPERATIONS ===
echo "✂️ Basic Sed Operations:"

# Substitute (replace)
sed 's/foo/bar/' file.txt           # "Replace first 'foo' with 'bar' on each line"
sed 's/foo/bar/g' file.txt          # "Replace all 'foo' with 'bar'"
sed 's/foo/bar/2' file.txt          # "Replace second occurrence only"

# Delete lines
sed '/pattern/d' file.txt           # "Delete lines containing pattern"
sed '5d' file.txt                   # "Delete line 5"
sed '1,3d' file.txt                 # "Delete lines 1-3"
sed '$d' file.txt                   # "Delete last line"

# Print specific lines
sed -n '5p' file.txt                # "Print only line 5"
sed -n '1,10p' file.txt             # "Print lines 1-10"
sed -n '/pattern/p' file.txt        # "Print lines matching pattern"

# === SED WITH DIFFERENT DELIMITERS ===
echo "🎯 Sed Delimiters:"
sed 's/old/new/' file.txt           # "Standard delimiter /"
sed 's|old|new|' file.txt           # "Using | as delimiter"
sed 's#old#new#' file.txt           # "Using # as delimiter"
sed 's@old@new@' file.txt           # "Using @ as delimiter"

# Useful when dealing with paths
sed 's|/old/path|/new/path|g' file.txt # "Replace paths easily"

# === SED REGULAR EXPRESSIONS ===
echo "🎭 Sed Regular Expressions:"
sed 's/^/> /' file.txt              # "Add '> ' to beginning of each line"
sed 's/$/;/' file.txt               # "Add ';' to end of each line"
sed 's/^\\\\s*//' file.txt            # "Remove leading whitespace"
sed 's/\\\\s*$//' file.txt            # "Remove trailing whitespace"
sed 's/\\\\s\\\\+/ /g' file.txt        # "Replace multiple spaces with single space"

# === SED LINE ADDRESSING ===
echo "📍 Sed Line Addressing:"
sed '5s/old/new/' file.txt          # "Replace only on line 5"
sed '1,10s/old/new/g' file.txt      # "Replace on lines 1-10"
sed '/pattern/s/old/new/g' file.txt # "Replace only on lines matching pattern"
sed '1~2s/old/new/g' file.txt       # "Replace on odd lines (1, 3, 5, ...)"
sed '2~2s/old/new/g' file.txt       # "Replace on even lines (2, 4, 6, ...)"

# === SED ADVANCED OPERATIONS ===
echo "🚀 Advanced Sed Operations:"

# Insert and append
sed '5i\\\\This is inserted before line 5' file.txt
sed '5a\\\\This is appended after line 5' file.txt

# Change entire lines
sed '5c\\\\This replaces line 5' file.txt
sed '/pattern/c\\\\This replaces matching lines' file.txt

# Multiple commands
sed -e 's/old1/new1/g' -e 's/old2/new2/g' file.txt
sed 's/old1/new1/g; s/old2/new2/g' file.txt

# === SED WITH BACKREFERENCES ===
echo "🔄 Sed Backreferences:"
sed 's/\\\\([a-z]*\\\\)/[\\\\1]/' file.txt    # "Put lowercase words in brackets"
sed 's/\\\\(.*\\\\)@\\\\(.*\\\\)/\\\\2@\\\\1/' file.txt # "Swap parts of email addresses"
sed 's/\\\\([0-9]\\\\{4\\\\}\\\\)-\\\\([0-9]\\\\{2\\\\}\\\\)-\\\\([0-9]\\\\{2\\\\}\\\\)/\\\\3\\/\\\\2\\/\\\\1/' file.txt # "Change date format"

# === SED IN-PLACE EDITING ===
echo "💾 Sed In-Place Editing:"
sed -i 's/old/new/g' file.txt       # "Edit file directly (Linux)"
sed -i.bak 's/old/new/g' file.txt   # "Edit file, create .bak backup"
sed -i '' 's/old/new/g' file.txt    # "Edit file directly (macOS)"

# === SED WITH PIPES ===
echo "🔗 Sed with Pipes:"
cat file.txt | sed 's/old/new/g'    # "Process output from cat"
ps aux | sed 's/\\\\s\\\\+/ /g'        # "Clean up ps output"
echo "Hello World" | sed 's/World/Universe/' # "Process command output"

# === PRACTICAL SED EXAMPLES ===
echo "💼 Practical Sed Examples:"

# Remove comments and empty lines
sed '/^#/d; /^$/d' config.file

# Convert Windows line endings to Unix
sed 's/\\\\r$//' windows_file.txt

# Extract email addresses (simple)
sed -n 's/.*\\\\([a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]*\\\\.[a-zA-Z]\\\\{2,\\\\}\\\\).*/\\\\1/p' file.txt

# Add line numbers
sed = file.txt | sed 'N;s/\\\\n/\\\\t/'

# Double-space a file
sed 'G' file.txt

# Remove HTML tags (basic)
sed 's/<[^>]*>//g' html_file.html

# Convert uppercase to lowercase
sed 's/.*/\\\\L&/' file.txt

# === SED SCRIPTING ===
echo "📜 Sed Scripting:"
# Create sed script file
cat << 'EOF' > cleanup.sed
# Remove comments
/^#/d
# Remove empty lines
/^$/d
# Replace tabs with spaces
s/\\t/    /g
# Remove trailing whitespace
s/\\s*$//
EOF

# Use sed script
sed -f cleanup.sed input.txt

# === THE SED CHEAT SHEET ===
echo "🔬 Sed Quick Reference:"
echo "sed 's/old/new/g' file     = Replace all occurrences"
echo "sed -i 's/old/new/g' file  = Edit file in-place"
echo "sed '/pattern/d' file      = Delete matching lines"
echo "sed -n '5,10p' file        = Print lines 5-10"
echo "sed '5i\\\\text' file        = Insert text before line 5"
echo "sed 's/\\\\(.*\\\\)/[\\\\1]/' file = Use backreferences"
echo "sed -e 'cmd1' -e 'cmd2'    = Multiple commands"`
      },
      {
        title: '3. Advanced Pattern Matching - Regex Mastery 🎯',
        content: 'Regular expressions are the secret language of text processing - they let you describe patterns in text with incredible precision. While basic grep and sed are powerful, adding regex to your toolkit transforms you from a text processor into a pattern recognition wizard. Think of regex as a way to describe what you\'re looking for without knowing the exact text - it\'s like having a smart search that understands concepts rather than just literal strings.',
        codeExample: `# === REGEX FUNDAMENTALS ===
echo "🎯 Regular Expression Basics:"
echo ". = Any single character"
echo "* = Zero or more of preceding"
echo "+ = One or more of preceding"
echo "? = Zero or one of preceding"
echo "^ = Start of line"
echo "$ = End of line"
echo "[] = Character class"
echo "() = Grouping"
echo "| = OR operator"

# === CHARACTER CLASSES ===
echo "📝 Character Classes:"
echo "[abc] = Match a, b, or c"
echo "[a-z] = Match any lowercase letter"
echo "[A-Z] = Match any uppercase letter"
echo "[0-9] = Match any digit"
echo "[a-zA-Z0-9] = Match alphanumeric"
echo "[^abc] = Match anything except a, b, or c"

# === PREDEFINED CHARACTER CLASSES ===
echo "🔤 Predefined Classes (with -E or egrep):"
echo "\\\\w = Word character [a-zA-Z0-9_]"
echo "\\\\W = Non-word character"
echo "\\\\d = Digit [0-9]"
echo "\\\\D = Non-digit"
echo "\\\\s = Whitespace [ \\\\t\\\\n\\\\r\\\\f]"
echo "\\\\S = Non-whitespace"

# === QUANTIFIERS ===
echo "🔢 Quantifiers:"
echo "* = 0 or more"
echo "+ = 1 or more"
echo "? = 0 or 1"
echo "{n} = Exactly n times"
echo "{n,} = n or more times"
echo "{n,m} = Between n and m times"

# === PRACTICAL REGEX EXAMPLES ===
echo "💼 Practical Regex Examples:"

# Email validation
grep -E "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$" file.txt

# Phone numbers (various formats)
grep -E "\\\\(?[0-9]{3}\\\\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}" file.txt

# IP addresses
grep -E "^([0-9]{1,3}\\\\.){3}[0-9]{1,3}$" file.txt

# URLs
grep -E "https?://[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}(/[^\\\\s]*)?" file.txt

# Credit card numbers (basic)
grep -E "[0-9]{4}[-\\\\s]?[0-9]{4}[-\\\\s]?[0-9]{4}[-\\\\s]?[0-9]{4}" file.txt

# === ADVANCED REGEX PATTERNS ===
echo "🚀 Advanced Regex Patterns:"

# Date formats
grep -E "[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}" file.txt          # MM/DD/YYYY
grep -E "[0-9]{4}-[0-9]{2}-[0-9]{2}" file.txt              # YYYY-MM-DD
grep -E "[0-9]{1,2}-[A-Za-z]{3}-[0-9]{4}" file.txt         # DD-MMM-YYYY

# Time formats
grep -E "[0-9]{1,2}:[0-9]{2}(:[0-9]{2})?" file.txt         # HH:MM or HH:MM:SS
grep -E "[0-9]{1,2}:[0-9]{2}\\\\s?(AM|PM)" file.txt          # 12-hour format

# Social Security Numbers
grep -E "[0-9]{3}-[0-9]{2}-[0-9]{4}" file.txt

# MAC addresses
grep -E "([0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}" file.txt

# === REGEX WITH GREP VARIANTS ===
echo "🔍 Grep Regex Variants:"

# Basic grep (BRE - Basic Regular Expressions)
grep "pattern" file.txt
grep "^start" file.txt
grep "end$" file.txt
grep "\\\\." file.txt                    # Literal dot

# Extended grep (ERE - Extended Regular Expressions)
grep -E "pattern1|pattern2" file.txt
grep -E "colou?r" file.txt              # Color or colour
grep -E "[0-9]+" file.txt               # One or more digits

# Perl-compatible regex (if available)
pcregrep "\\\\d{3}-\\\\d{3}-\\\\d{4}" file.txt    # Phone numbers

# === REGEX WITH SED ===
echo "🔬 Sed Regex Examples:"

# Extract domain from email
sed -n 's/.*@\\\\([^.]*\\\\.[^.]*\\\\).*/\\\\1/p' emails.txt

# Format phone numbers
sed 's/\\\\([0-9]\\\\{3\\\\}\\\\)\\\\([0-9]\\\\{3\\\\}\\\\)\\\\([0-9]\\\\{4\\\\}\\\\)/(\\\\1) \\\\2-\\\\3/' file.txt

# Convert date format YYYY-MM-DD to MM/DD/YYYY
sed 's/\\\\([0-9]\\\\{4\\\\}\\\\)-\\\\([0-9]\\\\{2\\\\}\\\\)-\\\\([0-9]\\\\{2\\\\}\\\\)/\\\\2\\/\\\\3\\/\\\\1/' file.txt

# Extract filename from path
sed 's/.*\\\\///' file_paths.txt

# === REGEX DEBUGGING ===
echo "🔧 Regex Debugging Tips:"
echo "1. Start simple and build complexity gradually"
echo "2. Test with known examples"
echo "3. Use online regex testers"
echo "4. Escape special characters properly"
echo "5. Remember different regex flavors (BRE vs ERE)"

# === COMMON REGEX MISTAKES ===
echo "⚠️ Common Regex Mistakes:"
echo "• Forgetting to escape special characters"
echo "• Using wrong regex flavor (BRE vs ERE)"
echo "• Greedy vs non-greedy matching"
echo "• Not anchoring patterns (^ and $)"
echo "• Forgetting character class brackets []"

# === REGEX PERFORMANCE TIPS ===
echo "⚡ Regex Performance Tips:"
echo "• Use specific character classes instead of ."
echo "• Anchor patterns when possible"
echo "• Use non-capturing groups when grouping is just for precedence"
echo "• Avoid excessive backtracking"
echo "• Use grep -F for literal strings"

# === REGEX CHEAT SHEET ===
echo "🎯 Regex Quick Reference:"
echo ". = Any character"
echo "* = 0 or more"
echo "+ = 1 or more (ERE)"
echo "? = 0 or 1 (ERE)"
echo "^ = Start of line"
echo "$ = End of line"
echo "[abc] = Character class"
echo "(abc) = Group"
echo "a|b = OR (ERE)"
echo "\\\\n = Backreference to group n"`
      },
      {
        title: '4. Combining Grep and Sed - The Power Duo 💪',
        content: 'When you combine grep and sed in pipelines, you create text processing workflows that can handle complex data transformations. This is where the real magic happens - grep finds what you need, sed transforms it, and together they can process data in ways that would take hours to do manually. Think of it as creating assembly lines for text processing, where each tool does what it does best.',
        codeExample: `# === BASIC GREP + SED COMBINATIONS ===
echo "💪 Grep + Sed Power Combinations:"

# Find lines with pattern, then modify them
grep "error" /var/log/syslog | sed 's/.*\\\\[\\\\(.*\\\\)\\\\].*/\\\\1/'

# Extract and format data
grep "user:" /etc/passwd | sed 's/user:\\\\([^:]*\\\\):.*/Username: \\\\1/'

# Find and replace in specific lines only
grep -n "TODO" *.py | sed 's/.*:\\\\(.*\\\\)TODO\\\\(.*\\\\)/\\\\1FIXME\\\\2/'

# === COMPLEX DATA EXTRACTION ===
echo "🔍 Complex Data Extraction:"

# Extract email addresses and format them
grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}" file.txt | \\
sed 's/.*\\\\([a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]*\\\\.[a-zA-Z]\\\\{2,\\\\}\\\\).*/\\\\1/' | \\
sed 's/.*/Email: &/' | \\
sort | uniq

# Process log files
grep "$(date +%b\\ %d)" /var/log/syslog | \\
grep -E "(error|warning|critical)" | \\
sed 's/^[^]]*\\\\] //' | \\
sed 's/: /: /' | \\
sort | uniq -c | sort -nr

# Extract and clean URLs
grep -E "https?://[^\\\\s]+" file.txt | \\
sed 's/.*\\\\(https\\\\?:\\/\\/[^\\\\s]*\\\\).*/\\\\1/' | \\
sed 's/[.,;]$//' | \\
sort | uniq

# === LOG ANALYSIS WORKFLOWS ===
echo "📊 Log Analysis Workflows:"

# Apache access log analysis
cat access.log | \\
grep "$(date +%d/%b/%Y)" | \\
sed 's/^\\\\([^\\\\s]*\\\\).*/\\\\1/' | \\
sort | uniq -c | sort -nr | head -10

# Error log summary
grep -i error /var/log/apache2/error.log | \\
sed 's/\\\\[.*\\\\] \\\\[.*\\\\] //' | \\
sed 's/^\\\\[.*\\\\] //' | \\
sort | uniq -c | sort -nr

# SSH login analysis
grep "Accepted" /var/log/auth.log | \\
sed 's/.*for \\\\([^\\\\s]*\\\\) from \\\\([^\\\\s]*\\\\).*/User: \\\\1, IP: \\\\2/' | \\
sort | uniq -c | sort -nr

# === DATA TRANSFORMATION PIPELINES ===
echo "🔄 Data Transformation Pipelines:"

# CSV processing
grep -v "^#" data.csv | \\
sed '1d' | \\
sed 's/,/ | /g' | \\
sed 's/^/| /' | \\
sed 's/$/ |/'

# Configuration file processing
grep -v "^#" /etc/ssh/sshd_config | \\
grep -v "^$" | \\
sed 's/^\\\\([^\\\\s]*\\\\)\\\\s*\\\\(.*\\\\)/\\\\1: \\\\2/' | \\
sort

# Extract function names from code
grep -n "def " *.py | \\
sed 's/:\\\\s*def \\\\([^(]*\\\\).*/: \\\\1()/' | \\
sed 's/^\\\\([^:]*\\\\):\\\\([0-9]*\\\\): \\\\(.*\\\\)/File: \\\\1, Line: \\\\2, Function: \\\\3/'

# === ADVANCED FILTERING AND FORMATTING ===
echo "🎨 Advanced Filtering and Formatting:"

# Process network connections
netstat -tuln | \\
grep LISTEN | \\
sed 's/.*:\\\\([0-9]*\\\\)\\\\s*.*/Port: \\\\1/' | \\
sort -t: -k2 -n | \\
uniq

# System process analysis
ps aux | \\
grep -v "\\\\[" | \\
sed '1d' | \\
sed 's/^\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\).*/User: \\\\1, PID: \\\\2, CPU: \\\\3%, MEM: \\\\4%/' | \\
sort -t: -k3 -nr | head -10

# File system analysis
df -h | \\
grep -v "tmpfs" | \\
sed '1d' | \\
sed 's/^\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\(.*\\\\)/Device: \\\\1, Size: \\\\2, Used: \\\\3, Available: \\\\4, Usage: \\\\5, Mount: \\\\6/'

# === REAL-TIME MONITORING ===
echo "📡 Real-Time Monitoring:"

# Monitor log files in real-time
tail -f /var/log/syslog | \\
grep --line-buffered -E "(error|warning|critical)" | \\
sed 's/^\\\\([^\\\\s]*\\\\s*[^\\\\s]*\\\\s*[^\\\\s]*\\\\) \\\\(.*\\\\)/[\\\\1] \\\\2/' | \\
while read line; do
    echo "$(date): $line"
done

# Monitor network connections
watch -n 1 'netstat -tuln | grep LISTEN | sed "s/.*:\\\\([0-9]*\\\\).*/Port: \\\\1/" | sort -t: -k2 -n'

# === BATCH FILE PROCESSING ===
echo "📁 Batch File Processing:"

# Process multiple log files
for log in /var/log/*.log; do
    echo "Processing: $log"
    grep -c "error" "$log" | sed "s/^/$log: /"
done | sed 's/\\/var\\/log\\///; s/\\.log:/: /'

# Clean up configuration files
find /etc -name "*.conf" -type f | while read file; do
    grep -v "^#" "$file" | grep -v "^$" | sed "s/^/$file: /"
done

# === PERFORMANCE OPTIMIZATION ===
echo "⚡ Performance Optimization:"

# Use grep to filter before sed (more efficient)
grep "pattern" large_file.txt | sed 's/old/new/g'  # Good
# sed 's/old/new/g' large_file.txt | grep "pattern"  # Less efficient

# Use specific patterns to reduce processing
grep "^ERROR" log.txt | sed 's/ERROR: //' | head -10

# Combine multiple sed commands
sed -e 's/old1/new1/g' -e 's/old2/new2/g' -e '/^$/d' file.txt

# === THE POWER DUO CHEAT SHEET ===
echo "💪 Grep + Sed Quick Reference:"
echo "grep pattern file | sed 's/old/new/g'  = Find and replace"
echo "grep -n pattern file | sed 's/:.*//'   = Extract line numbers"
echo "grep pattern file | sed 's/.*/& END/' = Append to matches"
echo "sed -n '/pattern/p' file              = Sed as grep"
echo "grep -v pattern file                  = Exclude pattern"
echo "sed '/pattern/d' file                 = Delete pattern lines"`
      },
      {
        title: '5. Text Processing Mastery - Advanced Workflows 🧙‍♂️',
        content: 'This is where you graduate from text processing user to text processing wizard! Advanced workflows combine grep, sed, and other tools to create powerful data processing pipelines that can handle complex real-world scenarios. We\'re talking about the kind of text processing mastery that makes you indispensable in any technical role - the ability to extract insights from data, automate complex transformations, and solve problems that others think require custom programming.',
        codeExample: `# === ADVANCED TEXT PROCESSING WORKFLOWS ===
echo "🧙‍♂️ Text Processing Mastery Techniques:"

# === MULTI-STAGE DATA PROCESSING ===
echo "🔄 Multi-Stage Data Processing:"

# Complete log analysis pipeline
analyze_logs() {
    local logfile="$1"
    local date_pattern="$2"

    echo "📊 Log Analysis Report for: $logfile"
    echo "Date: $date_pattern"
    echo "================================"

    # Error summary
    echo "🚨 Error Summary:"
    grep "$date_pattern" "$logfile" | \\
    grep -i error | \\
    sed 's/^[^]]*] //' | \\
    sed 's/: .*//' | \\
    sort | uniq -c | sort -nr | head -5

    echo ""

    # Warning summary
    echo "⚠️ Warning Summary:"
    grep "$date_pattern" "$logfile" | \\
    grep -i warning | \\
    sed 's/^[^]]*] //' | \\
    sed 's/: .*//' | \\
    sort | uniq -c | sort -nr | head -5

    echo ""

    # Activity by hour
    echo "📈 Activity by Hour:"
    grep "$date_pattern" "$logfile" | \\
    sed 's/^[^]]*] \\\\([0-9]\\\\{2\\\\}\\\\):.*/\\\\1/' | \\
    sort | uniq -c | \\
    sed 's/^\\\\s*\\\\([0-9]*\\\\)\\\\s*\\\\([0-9]*\\\\)/Hour \\\\2: \\\\1 events/'
}

# === CONFIGURATION FILE PROCESSING ===
echo "⚙️ Configuration File Processing:"

# Extract and format configuration
process_config() {
    local config_file="$1"

    echo "📋 Configuration Summary: $config_file"
    echo "======================================="

    # Remove comments and empty lines, format nicely
    grep -v "^#" "$config_file" | \\
    grep -v "^$" | \\
    sed 's/^\\\\s*//' | \\
    sed 's/\\\\s*=\\\\s*/ = /' | \\
    sed 's/^\\\\([^=]*\\\\) = \\\\(.*\\\\)/Setting: \\\\1\\\\nValue: \\\\2\\\\n---/'
}

# === NETWORK DATA ANALYSIS ===
echo "🌐 Network Data Analysis:"

# Analyze network connections
network_analysis() {
    echo "🔍 Network Connection Analysis:"
    echo "=============================="

    # Active connections by state
    echo "📊 Connections by State:"
    netstat -an | \\
    grep -E "^(tcp|udp)" | \\
    sed 's/^[^\\\\s]*\\\\s*[^\\\\s]*\\\\s*[^\\\\s]*\\\\s*[^\\\\s]*\\\\s*\\\\([^\\\\s]*\\\\).*/\\\\1/' | \\
    sort | uniq -c | \\
    sed 's/^\\\\s*\\\\([0-9]*\\\\)\\\\s*\\\\(.*\\\\)/\\\\2: \\\\1 connections/'

    echo ""

    # Top listening ports
    echo "🔌 Top Listening Ports:"
    netstat -tuln | \\
    grep LISTEN | \\
    sed 's/.*:\\\\([0-9]*\\\\)\\\\s*.*/\\\\1/' | \\
    sort -n | uniq -c | sort -nr | head -10 | \\
    sed 's/^\\\\s*\\\\([0-9]*\\\\)\\\\s*\\\\([0-9]*\\\\)/Port \\\\2: \\\\1 services/'
}

# === CODE ANALYSIS WORKFLOWS ===
echo "💻 Code Analysis Workflows:"

# Analyze code complexity
code_analysis() {
    local directory="$1"

    echo "📊 Code Analysis for: $directory"
    echo "==============================="

    # Function count by file
    echo "🔧 Functions by File:"
    find "$directory" -name "*.py" -o -name "*.js" -o -name "*.sh" | \\
    while read file; do
        count=$(grep -c "^\\\\s*def \\\\|^\\\\s*function \\\\|^[a-zA-Z_][a-zA-Z0-9_]*() {" "$file" 2>/dev/null || echo 0)
        echo "$file: $count functions"
    done | \\
    sed 's|.*/||' | \\
    sort -t: -k2 -nr | head -10

    echo ""

    # TODO/FIXME analysis
    echo "📝 TODO/FIXME Analysis:"
    find "$directory" -type f \\\\( -name "*.py" -o -name "*.js" -o -name "*.sh" \\\\) | \\
    xargs grep -n -E "(TODO|FIXME|HACK|XXX)" 2>/dev/null | \\
    sed 's|^[^:]*||' | \\
    sed 's/:[0-9]*:/: /' | \\
    sed 's/.*\\\\(TODO\\\\|FIXME\\\\|HACK\\\\|XXX\\\\)/\\\\1/' | \\
    sort | uniq -c | sort -nr
}

# === DATA EXTRACTION AND FORMATTING ===
echo "📊 Data Extraction and Formatting:"

# Extract and format system information
system_report() {
    echo "🖥️ System Information Report"
    echo "============================"

    # CPU information
    echo "🔧 CPU Information:"
    grep "model name" /proc/cpuinfo | \\
    head -1 | \\
    sed 's/model name\\\\s*: /CPU: /'

    grep "cpu cores" /proc/cpuinfo | \\
    head -1 | \\
    sed 's/cpu cores\\\\s*: /Cores: /'

    echo ""

    # Memory information
    echo "💾 Memory Information:"
    grep "MemTotal" /proc/meminfo | \\
    sed 's/MemTotal:\\\\s*/Total RAM: /' | \\
    sed 's/ kB/ KB/'

    grep "MemAvailable" /proc/meminfo | \\
    sed 's/MemAvailable:\\\\s*/Available RAM: /' | \\
    sed 's/ kB/ KB/'

    echo ""

    # Disk usage
    echo "💿 Disk Usage:"
    df -h | \\
    grep -v "tmpfs" | \\
    sed '1d' | \\
    sed 's/^\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\(.*\\\\)/Device: \\\\1, Total: \\\\2, Used: \\\\3 (\\\\5), Mount: \\\\6/'
}

# === AUTOMATED REPORTING ===
echo "📈 Automated Reporting:"

# Generate daily system report
daily_report() {
    local report_file="/tmp/daily_report_$(date +%Y%m%d).txt"

    {
        echo "📊 Daily System Report - $(date)"
        echo "================================="
        echo ""

        # System load
        echo "📈 System Load:"
        uptime | sed 's/.*load average: /Load Average: /'
        echo ""

        # Top processes
        echo "🔝 Top CPU Processes:"
        ps aux | \\
        grep -v "\\\\[" | \\
        sort -k3 -nr | \\
        head -5 | \\
        sed 's/^\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*.*\\\\s\\\\(.*\\\\)/User: \\\\1, PID: \\\\2, CPU: \\\\3%, CMD: \\\\5/'

        echo ""

        # Disk usage alerts
        echo "💿 Disk Usage Alerts:"
        df -h | \\
        grep -v "tmpfs" | \\
        sed '1d' | \\
        awk '{if (substr($5,1,length($5)-1) > 80) print $0}' | \\
        sed 's/^\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\([^\\\\s]*\\\\)\\\\s*\\\\(.*\\\\)/⚠️ \\\\1 is \\\\5 full (\\\\6)/'

        echo ""

        # Recent errors
        echo "🚨 Recent System Errors:"
        grep "$(date +%b\\ %d)" /var/log/syslog | \\
        grep -i error | \\
        tail -5 | \\
        sed 's/^[^]]*] //' | \\
        sed 's/^/- /'

    } > "$report_file"

    echo "Report generated: $report_file"
}

# === PERFORMANCE MONITORING ===
echo "⚡ Performance Monitoring:"

# Monitor system performance
performance_monitor() {
    echo "📊 Performance Monitor - $(date)"
    echo "================================"

    # CPU usage
    echo "🔧 CPU Usage:"
    grep 'cpu ' /proc/stat | \\
    awk '{usage=($2+$4)*100/($2+$3+$4)} END {print "CPU Usage: " usage "%"}'

    # Memory usage
    echo "💾 Memory Usage:"
    free | \\
    awk 'NR==2{printf "Memory Usage: %.1f%%\\\\n", $3*100/$2}'

    # Load average
    echo "📈 Load Average:"
    cat /proc/loadavg | \\
    sed 's/^\\\\([^\\\\s]*\\\\s*[^\\\\s]*\\\\s*[^\\\\s]*\\\\).*/Load: \\\\1/'
}

# === THE MASTERY TOOLKIT ===
echo "🧙‍♂️ Text Processing Mastery Toolkit:"
echo "======================================"
echo "analyze_logs logfile date_pattern    = Comprehensive log analysis"
echo "process_config config_file           = Configuration file processing"
echo "network_analysis                     = Network connection analysis"
echo "code_analysis directory              = Code complexity analysis"
echo "system_report                        = System information report"
echo "daily_report                         = Automated daily report"
echo "performance_monitor                  = Real-time performance monitoring"

# === CONGRATULATIONS! ===
echo "🎓 GREP && SED MASTERY COMPLETE!"
echo "================================="
echo "You now understand:"
echo "✅ Grep for powerful text searching and filtering"
echo "✅ Sed for precise text transformation and editing"
echo "✅ Regular expressions for pattern matching mastery"
echo "✅ Combining tools for complex data processing"
echo "✅ Advanced workflows for real-world scenarios"
echo "✅ Performance optimization and best practices"
echo "✅ Automated reporting and monitoring systems"
echo ""
echo "🔎 You are now a TEXT PROCESSING WIZARD!"
echo "Extract insights from any data like a master detective! 🕵️‍♂️"
echo ""
echo "Remember: With great text processing power comes great automation possibilities!"
echo "Use your skills to make data work for you! 💪"`
      }
    ]
  }
}