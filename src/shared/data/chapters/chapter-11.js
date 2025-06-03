export const chapter11 = {
  id: '11',
  icon: '📃',
  title: 'TEXT EDITORS',
  description: 'Essential text editors for Linux',
  slug: 'text-editors',
  content: {
    overview: 'Welcome to TEXT EDITORS - where your relationship with code and text files goes from painful to powerful! 📃 If you\'ve ever tried to edit a file in Linux and ended up trapped in vim, unable to exit, or struggled with nano\'s confusing shortcuts, this chapter is your salvation. Text editors in Linux aren\'t just tools - they\'re extensions of your mind, productivity multipliers, and for many developers, almost religious choices. We\'re talking about the great editor wars: vim vs emacs vs nano vs modern alternatives. Think of this as your guide to finding your perfect text editing soulmate. Whether you want to become a vim wizard who can edit text at the speed of thought, or just need a simple editor that won\'t make you want to throw your computer out the window, we\'ve got you covered. By the end of this chapter, you\'ll understand why some developers swear by 40-year-old editors and others prefer modern alternatives! 🚀',
    sections: [
      {
        title: '1. Nano - The Friendly Neighborhood Editor 🏠',
        content: 'Nano is like the golden retriever of text editors - friendly, approachable, and perfect for beginners. While vim users might scoff and emacs users might roll their eyes, nano gets the job done without requiring a computer science degree to understand. It\'s the editor that shows you the shortcuts right at the bottom of the screen, doesn\'t trap you in mysterious modes, and lets you edit text like a normal human being. Think of nano as training wheels for Linux text editing - except these training wheels are actually pretty fast and reliable.',
        codeExample: `# === NANO BASICS ===
nano filename.txt                   # "Open file in nano"
nano                                # "Open nano with empty file"
sudo nano /etc/hosts                # "Edit system file with nano"

# === NANO INTERFACE EXPLAINED ===
echo "🏠 Nano Interface:"
echo "Top: File name and status"
echo "Middle: Your text content"
echo "Bottom: Available shortcuts (^ means Ctrl)"

# === ESSENTIAL NANO SHORTCUTS ===
echo "⌨️ Essential Nano Shortcuts:"
echo "Ctrl+O = Save file (WriteOut)"
echo "Ctrl+X = Exit nano"
echo "Ctrl+G = Help (Get Help)"
echo "Ctrl+K = Cut line"
echo "Ctrl+U = Paste (UnCut)"
echo "Ctrl+W = Search (Where Is)"
echo "Ctrl+\\\\ = Replace"
echo "Ctrl+C = Show cursor position"
echo "Ctrl+V = Next page"
echo "Ctrl+Y = Previous page"

# === NANO NAVIGATION ===
echo "🧭 Nano Navigation:"
echo "Arrow keys = Move cursor"
echo "Ctrl+A = Beginning of line"
echo "Ctrl+E = End of line"
echo "Ctrl+F = Forward one character"
echo "Ctrl+B = Backward one character"
echo "Alt+A = Select text (start selection)"
echo "Ctrl+6 = Copy selected text"

# === NANO SEARCH AND REPLACE ===
echo "🔍 Nano Search & Replace:"
echo "Ctrl+W = Search for text"
echo "Alt+W = Search next occurrence"
echo "Ctrl+\\\\ = Search and replace"
echo "Alt+R = Replace current match"
echo "Alt+A = Replace all matches"

# === NANO FILE OPERATIONS ===
echo "📁 Nano File Operations:"
echo "Ctrl+O = Save file"
echo "Ctrl+R = Read/Insert another file"
echo "Ctrl+T = To Files (file browser)"
echo "Alt+B = Backup file"

# === NANO EDITING FEATURES ===
echo "✏️ Nano Editing Features:"
echo "Ctrl+K = Cut entire line"
echo "Ctrl+U = Paste cut text"
echo "Alt+6 = Copy current line"
echo "Ctrl+J = Justify paragraph"
echo "Alt+U = Undo"
echo "Alt+E = Redo"
echo "Ctrl+D = Delete character under cursor"
echo "Ctrl+H = Delete character before cursor"

# === NANO CONFIGURATION ===
# Create nano config file
echo "⚙️ Nano Configuration (~/.nanorc):"
cat << 'EOF'
# Enable syntax highlighting
include "/usr/share/nano/*.nanorc"

# Show line numbers
set linenumbers

# Enable mouse support
set mouse

# Set tab size
set tabsize 4

# Convert tabs to spaces
set tabstospaces

# Enable auto-indentation
set autoindent

# Show whitespace
set whitespace

# Enable word wrapping
set softwrap
EOF

# === NANO TIPS AND TRICKS ===
echo "💡 Nano Pro Tips:"
echo "1. Ctrl+G shows help - use it!"
echo "2. Ctrl+O then Enter saves quickly"
echo "3. Ctrl+X asks to save if modified"
echo "4. Alt+Shift+# toggles line numbers"
echo "5. Ctrl+T opens file browser"
echo "6. Use -w flag to disable word wrap: nano -w file"
echo "7. Use -m flag to enable mouse: nano -m file"

# === NANO COMMAND LINE OPTIONS ===
echo "🚀 Nano Command Line Options:"
echo "nano -w file     = Disable word wrapping"
echo "nano -m file     = Enable mouse support"
echo "nano -i file     = Auto-indent new lines"
echo "nano -E file     = Convert tabs to spaces"
echo "nano -T 4 file   = Set tab width to 4"
echo "nano +10 file    = Open file at line 10"
echo "nano -B file     = Create backup of original"

# === NANO VS OTHER EDITORS ===
echo "🥊 Nano vs Others:"
echo "Nano pros:"
echo "  ✅ Beginner-friendly"
echo "  ✅ Shows shortcuts on screen"
echo "  ✅ No modes to get stuck in"
echo "  ✅ Works like expected"
echo ""
echo "Nano cons:"
echo "  ❌ Limited advanced features"
echo "  ❌ Not as powerful as vim/emacs"
echo "  ❌ Can be slow with very large files"

# === NANO WORKFLOW EXAMPLE ===
echo "📝 Typical Nano Workflow:"
echo "1. nano myfile.txt"
echo "2. Type your content"
echo "3. Ctrl+O to save"
echo "4. Enter to confirm filename"
echo "5. Ctrl+X to exit"
echo "Done! No mysterious modes or complex commands."

# === THE NANO CHEAT SHEET ===
echo "🏠 Nano Quick Reference:"
echo "nano file        = Open file"
echo "Ctrl+O          = Save"
echo "Ctrl+X          = Exit"
echo "Ctrl+W          = Search"
echo "Ctrl+\\\\          = Replace"
echo "Ctrl+K          = Cut line"
echo "Ctrl+U          = Paste"
echo "Ctrl+G          = Help"`
      },
      {
        title: '2. Vim - The Legendary Modal Editor ⚔️',
        content: 'Vim is the legendary samurai sword of text editors - incredibly powerful in the right hands, but it takes dedication to master. Born from the ancient vi editor, vim (Vi IMproved) is the editor that strikes fear into the hearts of beginners and inspires devotion in experts. It\'s modal, meaning it has different modes for different tasks, which is either brilliant efficiency or confusing torture depending on your perspective. Learning vim is like learning a martial art - difficult at first, but once you achieve mastery, you\'ll edit text faster than anyone thought possible.',
        codeExample: `# === VIM BASICS ===
vim filename.txt                    # "Open file in vim"
vim                                 # "Open vim with empty file"
sudo vim /etc/hosts                 # "Edit system file with vim"

# === VIM MODES EXPLAINED ===
echo "⚔️ Vim Modes (The Key to Everything):"
echo "Normal Mode  = Default mode, for navigation and commands"
echo "Insert Mode  = For typing text (like normal editors)"
echo "Visual Mode  = For selecting text"
echo "Command Mode = For running commands (:w, :q, etc.)"

# === ESCAPING VIM (THE MOST IMPORTANT SKILL!) ===
echo "🚪 How to Exit Vim (Save Your Sanity):"
echo ":q          = Quit (if no changes)"
echo ":q!         = Quit without saving (force quit)"
echo ":w          = Save (write)"
echo ":wq         = Save and quit"
echo ":x          = Save and quit (shorter)"
echo "ZZ          = Save and quit (even shorter)"
echo "ZQ          = Quit without saving"

# === VIM BASIC NAVIGATION ===
echo "🧭 Vim Navigation (Normal Mode):"
echo "h = Left"
echo "j = Down"
echo "k = Up"
echo "l = Right"
echo "w = Next word"
echo "b = Previous word"
echo "e = End of word"
echo "0 = Beginning of line"
echo "$ = End of line"
echo "gg = Go to first line"
echo "G = Go to last line"
echo "5G = Go to line 5"

# === ENTERING INSERT MODE ===
echo "✏️ Entering Insert Mode:"
echo "i = Insert before cursor"
echo "a = Insert after cursor"
echo "I = Insert at beginning of line"
echo "A = Insert at end of line"
echo "o = Open new line below"
echo "O = Open new line above"
echo "s = Delete character and insert"
echo "S = Delete line and insert"

# === VIM EDITING COMMANDS ===
echo "✂️ Vim Editing (Normal Mode):"
echo "x = Delete character"
echo "dd = Delete line"
echo "dw = Delete word"
echo "d$ = Delete to end of line"
echo "yy = Copy line"
echo "yw = Copy word"
echo "p = Paste after cursor"
echo "P = Paste before cursor"
echo "u = Undo"
echo "Ctrl+r = Redo"

# === VIM SEARCH AND REPLACE ===
echo "🔍 Vim Search & Replace:"
echo "/pattern = Search forward"
echo "?pattern = Search backward"
echo "n = Next search result"
echo "N = Previous search result"
echo ":s/old/new = Replace first occurrence in line"
echo ":s/old/new/g = Replace all in line"
echo ":%s/old/new/g = Replace all in file"
echo ":%s/old/new/gc = Replace all with confirmation"

# === VIM VISUAL MODE ===
echo "👁️ Vim Visual Mode:"
echo "v = Visual mode (character selection)"
echo "V = Visual line mode (line selection)"
echo "Ctrl+v = Visual block mode (column selection)"
echo "After selecting:"
echo "  d = Delete selection"
echo "  y = Copy selection"
echo "  c = Change selection"

# === VIM FILE OPERATIONS ===
echo "📁 Vim File Operations:"
echo ":w = Save file"
echo ":w filename = Save as filename"
echo ":r filename = Read/insert file"
echo ":e filename = Edit new file"
echo ":bn = Next buffer"
echo ":bp = Previous buffer"
echo ":ls = List buffers"

# === VIM ADVANCED FEATURES ===
echo "🚀 Vim Advanced Features:"
echo ". = Repeat last command"
echo "* = Search for word under cursor"
echo "% = Jump to matching bracket"
echo ">> = Indent line"
echo "<< = Unindent line"
echo "== = Auto-indent line"
echo "gg=G = Auto-indent entire file"

# === VIM CONFIGURATION ===
echo "⚙️ Vim Configuration (~/.vimrc):"
cat << 'EOF'
" Enable syntax highlighting
syntax on

" Show line numbers
set number

" Enable mouse support
set mouse=a

" Set tab settings
set tabstop=4
set shiftwidth=4
set expandtab

" Enable auto-indentation
set autoindent
set smartindent

" Show matching brackets
set showmatch

" Enable incremental search
set incsearch

" Highlight search results
set hlsearch

" Enable file type detection
filetype on
filetype plugin on
filetype indent on
EOF

# === VIM PLUGINS (MODERN VIM) ===
echo "🔌 Popular Vim Plugins:"
echo "vim-plug     = Plugin manager"
echo "NERDTree     = File explorer"
echo "fzf.vim      = Fuzzy finder"
echo "vim-airline  = Status line"
echo "YouCompleteMe = Auto-completion"
echo "vim-fugitive = Git integration"

# === VIM SURVIVAL GUIDE ===
echo "🆘 Vim Survival Guide:"
echo "1. Press Esc to get to Normal mode"
echo "2. Type :q! to quit without saving"
echo "3. Type :wq to save and quit"
echo "4. Use hjkl for navigation"
echo "5. Press i to start typing"
echo "6. When in doubt, press Esc and start over"

# === VIM LEARNING PATH ===
echo "📚 Vim Learning Path:"
echo "1. Learn to exit vim (:q, :wq, :q!)"
echo "2. Master basic navigation (hjkl, w, b, 0, $)"
echo "3. Learn insert mode (i, a, o)"
echo "4. Practice basic editing (x, dd, yy, p)"
echo "5. Learn search (/pattern, n, N)"
echo "6. Master visual mode (v, V, Ctrl+v)"
echo "7. Learn advanced commands (., *, %, >>, <<)"
echo "8. Customize with .vimrc"
echo "9. Explore plugins"
echo "10. Achieve vim enlightenment"

# === THE VIM CHEAT SHEET ===
echo "⚔️ Vim Quick Reference:"
echo "vim file        = Open file"
echo "i               = Insert mode"
echo "Esc             = Normal mode"
echo ":w              = Save"
echo ":q              = Quit"
echo ":wq             = Save and quit"
echo "hjkl            = Navigation"
echo "dd              = Delete line"
echo "yy              = Copy line"
echo "p               = Paste"`
      },
      {
        title: '3. Emacs - The Operating System Disguised as an Editor 🌌',
        content: 'Emacs is less of a text editor and more of a way of life. Some joke that Emacs is a great operating system that just happens to lack a decent text editor, but Emacs users know better - it\'s the Swiss Army knife of computing. While vim focuses on efficient text editing, Emacs focuses on being extensible and customizable to the point where you can do literally anything within it. Email, web browsing, games, file management, and yes, even text editing. Learning Emacs is like learning to pilot a spaceship - complex, but incredibly powerful once mastered.',
        codeExample: `# === EMACS BASICS ===
emacs filename.txt                  # "Open file in emacs"
emacs                               # "Open emacs with empty buffer"
sudo emacs /etc/hosts               # "Edit system file with emacs"

# === EMACS KEY NOTATION ===
echo "🌌 Emacs Key Notation:"
echo "C-x = Ctrl+x"
echo "M-x = Alt+x (or Esc then x)"
echo "C-x C-s = Ctrl+x then Ctrl+s"
echo "C-g = Cancel current command"

# === ESSENTIAL EMACS SHORTCUTS ===
echo "⌨️ Essential Emacs Shortcuts:"
echo "C-x C-s = Save file"
echo "C-x C-c = Exit emacs"
echo "C-g = Cancel command"
echo "C-x C-f = Open file"
echo "C-x C-w = Save as"
echo "C-x u = Undo"
echo "C-s = Search forward"
echo "C-r = Search backward"

# === EMACS NAVIGATION ===
echo "🧭 Emacs Navigation:"
echo "C-f = Forward character"
echo "C-b = Backward character"
echo "C-n = Next line"
echo "C-p = Previous line"
echo "C-a = Beginning of line"
echo "C-e = End of line"
echo "M-f = Forward word"
echo "M-b = Backward word"
echo "M-< = Beginning of buffer"
echo "M-> = End of buffer"
echo "C-v = Page down"
echo "M-v = Page up"

# === EMACS EDITING ===
echo "✏️ Emacs Editing:"
echo "C-d = Delete character"
echo "M-d = Delete word"
echo "C-k = Kill (cut) to end of line"
echo "C-w = Kill region"
echo "M-w = Copy region"
echo "C-y = Yank (paste)"
echo "M-y = Cycle through kill ring"
echo "C-x C-t = Transpose lines"
echo "M-t = Transpose words"

# === EMACS REGIONS AND MARKS ===
echo "📍 Emacs Regions and Marks:"
echo "C-Space = Set mark (start selection)"
echo "C-x C-x = Exchange point and mark"
echo "C-w = Kill region"
echo "M-w = Copy region"
echo "C-x h = Select all (mark whole buffer)"

# === EMACS BUFFERS ===
echo "📄 Emacs Buffers:"
echo "C-x b = Switch buffer"
echo "C-x C-b = List buffers"
echo "C-x k = Kill buffer"
echo "C-x C-f = Find file (open in new buffer)"
echo "C-x 4 f = Find file in other window"

# === EMACS WINDOWS ===
echo "🪟 Emacs Windows:"
echo "C-x 2 = Split window horizontally"
echo "C-x 3 = Split window vertically"
echo "C-x 1 = Delete other windows"
echo "C-x 0 = Delete current window"
echo "C-x o = Switch to other window"

# === EMACS SEARCH AND REPLACE ===
echo "🔍 Emacs Search & Replace:"
echo "C-s = Incremental search forward"
echo "C-r = Incremental search backward"
echo "M-% = Query replace"
echo "M-x replace-string = Replace all"
echo "During search:"
echo "  C-s = Next occurrence"
echo "  C-r = Previous occurrence"
echo "  Enter = Stop search"

# === EMACS HELP SYSTEM ===
echo "❓ Emacs Help System:"
echo "C-h ? = Help menu"
echo "C-h k = Describe key"
echo "C-h f = Describe function"
echo "C-h v = Describe variable"
echo "C-h m = Describe mode"
echo "C-h t = Tutorial"

# === EMACS CONFIGURATION ===
echo "⚙️ Emacs Configuration (~/.emacs or ~/.emacs.d/init.el):"
cat << 'EOF'
;; Enable line numbers
(global-linum-mode t)

;; Enable syntax highlighting
(global-font-lock-mode t)

;; Show matching parentheses
(show-paren-mode t)

;; Enable auto-indentation
(electric-indent-mode t)

;; Set tab width
(setq-default tab-width 4)

;; Use spaces instead of tabs
(setq-default indent-tabs-mode nil)

;; Enable column number mode
(column-number-mode t)

;; Disable startup screen
(setq inhibit-startup-screen t)

;; Enable recent files
(recentf-mode t)
EOF

# === EMACS MODES ===
echo "🎭 Emacs Modes:"
echo "Major modes (one per buffer):"
echo "  text-mode     = Plain text"
echo "  python-mode   = Python code"
echo "  js-mode       = JavaScript"
echo "  org-mode      = Organization/notes"
echo ""
echo "Minor modes (multiple per buffer):"
echo "  auto-fill-mode = Automatic line wrapping"
echo "  flyspell-mode  = Spell checking"
echo "  linum-mode     = Line numbers"

# === EMACS PACKAGES ===
echo "📦 Popular Emacs Packages:"
echo "package.el   = Package manager"
echo "helm         = Completion framework"
echo "magit        = Git interface"
echo "org-mode     = Organization and notes"
echo "company      = Auto-completion"
echo "flycheck     = Syntax checking"
echo "projectile   = Project management"

# === EMACS VS OTHER EDITORS ===
echo "🥊 Emacs vs Others:"
echo "Emacs pros:"
echo "  ✅ Extremely extensible"
echo "  ✅ Built-in everything (email, calendar, games)"
echo "  ✅ Powerful for complex editing tasks"
echo "  ✅ Excellent for programming"
echo ""
echo "Emacs cons:"
echo "  ❌ Steep learning curve"
echo "  ❌ Can be slow to start"
echo "  ❌ Requires significant customization"
echo "  ❌ Key bindings conflict with modern conventions"

# === THE EMACS CHEAT SHEET ===
echo "🌌 Emacs Quick Reference:"
echo "emacs file      = Open file"
echo "C-x C-s         = Save"
echo "C-x C-c         = Exit"
echo "C-s             = Search"
echo "M-%             = Replace"
echo "C-Space         = Start selection"
echo "C-w             = Cut"
echo "M-w             = Copy"
echo "C-y             = Paste"`
      },
      {
        title: '4. Modern Alternatives - The New Generation 🚀',
        content: 'While the old guard of nano, vim, and emacs still rule the terminal, a new generation of editors has emerged that bridges the gap between traditional command-line editing and modern development needs. These editors bring features like syntax highlighting, auto-completion, and plugin ecosystems while maintaining the efficiency of terminal-based editing. Think of them as the best of both worlds - the power of traditional editors with the convenience of modern tools.',
        codeExample: `# === MICRO - THE MODERN NANO ===
echo "🔬 Micro - Modern Terminal Editor:"
echo "Installation:"
echo "curl https://getmic.ro | bash"
echo "sudo apt install micro"
echo "brew install micro"

# Micro usage
micro filename.txt                  # "Open file in micro"
micro                               # "Open micro with empty file"

echo "🔬 Micro Features:"
echo "✅ Intuitive key bindings (Ctrl+S, Ctrl+C, Ctrl+V)"
echo "✅ Syntax highlighting for 75+ languages"
echo "✅ Mouse support"
echo "✅ Plugin system"
echo "✅ Multiple cursors"
echo "✅ Split panes"

echo "⌨️ Micro Shortcuts:"
echo "Ctrl+S = Save"
echo "Ctrl+Q = Quit"
echo "Ctrl+C = Copy"
echo "Ctrl+V = Paste"
echo "Ctrl+X = Cut"
echo "Ctrl+Z = Undo"
echo "Ctrl+Y = Redo"
echo "Ctrl+F = Find"
echo "Ctrl+H = Find and replace"

# === HELIX - THE VIM KILLER? ===
echo "🧬 Helix - Modern Modal Editor:"
echo "Installation:"
echo "cargo install helix-term"
echo "brew install helix"

# Helix usage
hx filename.txt                     # "Open file in helix"

echo "🧬 Helix Features:"
echo "✅ Modal editing like vim"
echo "✅ Built-in LSP support"
echo "✅ Tree-sitter syntax highlighting"
echo "✅ Multiple selections"
echo "✅ No configuration needed"
echo "✅ Modern key bindings"

echo "⌨️ Helix Shortcuts:"
echo "i = Insert mode"
echo "Esc = Normal mode"
echo ":w = Save"
echo ":q = Quit"
echo "/ = Search"
echo "Space = Command palette"
echo "g = Go to commands"

# === KAKOUNE - THE VIM ALTERNATIVE ===
echo "🦘 Kakoune - Selection-First Editor:"
echo "Installation:"
echo "sudo apt install kakoune"
echo "brew install kakoune"

# Kakoune usage
kak filename.txt                    # "Open file in kakoune"

echo "🦘 Kakoune Features:"
echo "✅ Selection-first editing"
echo "✅ Multiple cursors"
echo "✅ Client-server architecture"
echo "✅ Powerful text objects"
echo "✅ Orthogonal design"

# === NEOVIM - VIM REBORN ===
echo "🆕 Neovim - Vim for the Modern Age:"
echo "Installation:"
echo "sudo apt install neovim"
echo "brew install neovim"
echo "pip install neovim"

# Neovim usage
nvim filename.txt                   # "Open file in neovim"

echo "🆕 Neovim Features:"
echo "✅ Async plugin support"
echo "✅ Built-in terminal"
echo "✅ Lua configuration"
echo "✅ Better defaults"
echo "✅ LSP support"
echo "✅ Tree-sitter integration"

# === VISUAL STUDIO CODE (TERMINAL) ===
echo "💻 VS Code in Terminal:"
echo "code filename.txt               # Open in VS Code"
echo "code .                          # Open current directory"
echo "code --wait filename.txt        # Wait for file to close"

# === CHOOSING THE RIGHT EDITOR ===
echo "🎯 Choosing Your Editor:"
echo ""
echo "Choose Nano if:"
echo "  • You're a beginner"
echo "  • You need quick edits"
echo "  • You want simplicity"
echo ""
echo "Choose Vim if:"
echo "  • You want maximum efficiency"
echo "  • You edit text frequently"
echo "  • You like modal editing"
echo ""
echo "Choose Emacs if:"
echo "  • You want an all-in-one environment"
echo "  • You like extensive customization"
echo "  • You work with complex documents"
echo ""
echo "Choose Micro if:"
echo "  • You want modern features"
echo "  • You like familiar key bindings"
echo "  • You need syntax highlighting"
echo ""
echo "Choose Helix if:"
echo "  • You want vim-like editing"
echo "  • You need built-in LSP"
echo "  • You prefer zero configuration"

# === EDITOR INSTALLATION COMMANDS ===
echo "📥 Editor Installation Commands:"
echo "# Ubuntu/Debian"
echo "sudo apt install nano vim emacs micro"
echo "sudo apt install neovim kakoune"
echo ""
echo "# macOS"
echo "brew install nano vim emacs micro"
echo "brew install neovim helix kakoune"
echo ""
echo "# From source/package managers"
echo "curl https://getmic.ro | bash    # Micro"
echo "cargo install helix-term         # Helix"

# === EDITOR BENCHMARKS ===
echo "⚡ Editor Performance (Subjective):"
echo "Startup Speed:"
echo "  nano > micro > vim > neovim > helix > emacs"
echo ""
echo "Learning Curve:"
echo "  nano < micro < helix < vim < kakoune < emacs"
echo ""
echo "Customization:"
echo "  nano < micro < vim < helix < neovim < emacs"
echo ""
echo "Features:"
echo "  nano < vim < micro < helix < neovim < emacs"

# === THE MODERN EDITORS CHEAT SHEET ===
echo "🚀 Modern Editors Quick Reference:"
echo "micro file      = User-friendly editor"
echo "hx file         = Helix modal editor"
echo "kak file        = Kakoune selection-first"
echo "nvim file       = Modern vim"
echo "code file       = VS Code"
echo "All support:"
echo "  • Syntax highlighting"
echo "  • Plugin systems"
echo "  • Modern features"`
      },
      {
        title: '5. Editor Mastery - Becoming a Text Editing Ninja 🥷',
        content: 'This is where we separate the casual file editors from the text manipulation masters! Editor mastery isn\'t just about knowing shortcuts - it\'s about developing muscle memory, understanding workflows, and choosing the right tool for each task. We\'re going to cover advanced techniques, productivity tips, and the kind of editor wizardry that makes other developers wonder how you edit text so fast. This is your graduation from "person who edits files" to "text editing ninja."',
        codeExample: `# === EDITOR WORKFLOW OPTIMIZATION ===
echo "🥷 Text Editing Ninja Techniques:"

# === UNIVERSAL EDITOR SKILLS ===
echo "🌟 Universal Editor Skills:"
echo "1. Learn keyboard shortcuts (avoid mouse)"
echo "2. Master search and replace with regex"
echo "3. Use multiple cursors/selections"
echo "4. Learn text objects (words, sentences, paragraphs)"
echo "5. Master copy/paste/cut operations"
echo "6. Use bookmarks/marks for navigation"
echo "7. Learn macro recording (if available)"

# === ADVANCED SEARCH TECHNIQUES ===
echo "🔍 Advanced Search Mastery:"
echo "Regular expressions in different editors:"
echo ""
echo "Vim regex examples:"
echo ":%s/\\\\(\\\\w\\\\+\\\\)/\\\\U\\\\1/g        # Uppercase all words"
echo ":%s/^\\\\s\\\\+//g                    # Remove leading whitespace"
echo ":%s/\\\\s\\\\+$//g                    # Remove trailing whitespace"
echo ""
echo "Emacs regex examples:"
echo "M-x replace-regexp"
echo "\\\\([a-z]\\\\+\\\\) -> \\\\,(upcase \\\\1)   # Uppercase matches"
echo ""
echo "Universal regex patterns:"
echo "[0-9]+ = One or more digits"
echo "\\\\w+ = One or more word characters"
echo "^\\\\s* = Start of line + optional whitespace"
echo "\\\\s*$ = Optional whitespace + end of line"

# === MULTI-FILE EDITING ===
echo "📚 Multi-File Editing Mastery:"
echo ""
echo "Vim multi-file techniques:"
echo ":args *.txt                     # Load all .txt files"
echo ":argdo %s/old/new/g | w         # Replace in all files"
echo ":bufdo %s/old/new/g | w         # Replace in all buffers"
echo ":tabnew file.txt                # Open in new tab"
echo "gt / gT                         # Switch tabs"
echo ""
echo "Emacs multi-file techniques:"
echo "C-x C-f                         # Find file"
echo "C-x 4 f                         # Find file in other window"
echo "C-x b                           # Switch buffer"
echo "M-x dired                       # File manager"
echo "M-x grep                        # Search across files"

# === PRODUCTIVITY WORKFLOWS ===
echo "⚡ Productivity Workflows:"
echo ""
echo "Quick file editing workflow:"
echo "1. Use fuzzy file finding (fzf, helm, etc.)"
echo "2. Jump to specific lines quickly"
echo "3. Use bookmarks for frequently edited sections"
echo "4. Master block selection for column editing"
echo "5. Use macros for repetitive tasks"
echo ""
echo "Code editing workflow:"
echo "1. Use syntax highlighting"
echo "2. Enable auto-indentation"
echo "3. Use code folding for large files"
echo "4. Master bracket matching"
echo "5. Use LSP for auto-completion"

# === EDITOR CUSTOMIZATION MASTERY ===
echo "🎨 Editor Customization Mastery:"
echo ""
echo "Essential customizations:"
echo "• Set up consistent indentation (spaces vs tabs)"
echo "• Configure syntax highlighting for your languages"
echo "• Set up auto-save or backup files"
echo "• Configure line numbers and column indicators"
echo "• Set up project-specific settings"
echo "• Install essential plugins/packages"
echo "• Configure key bindings for your workflow"

# === COLLABORATIVE EDITING ===
echo "👥 Collaborative Editing:"
echo ""
echo "Version control integration:"
echo "• Learn git integration in your editor"
echo "• Use diff/merge tools effectively"
echo "• Set up blame/annotation viewing"
echo "• Configure conflict resolution"
echo ""
echo "Remote editing:"
echo "• SSH + terminal editors (vim, emacs, nano)"
echo "• VS Code remote development"
echo "• Emacs TRAMP mode"
echo "• Vim over SSH with tmux/screen"

# === EDITOR PERFORMANCE OPTIMIZATION ===
echo "🚀 Editor Performance Optimization:"
echo ""
echo "For large files:"
echo "• Disable syntax highlighting if needed"
echo "• Use streaming/paging modes"
echo "• Avoid loading entire file into memory"
echo "• Use specialized tools (less, more, head, tail)"
echo ""
echo "For many files:"
echo "• Use session management"
echo "• Configure lazy loading"
echo "• Optimize startup time"
echo "• Use project-based configurations"

# === EDITOR DEBUGGING AND TROUBLESHOOTING ===
echo "🔧 Editor Debugging:"
echo ""
echo "Common issues and solutions:"
echo "• Slow startup: Check plugins/configurations"
echo "• Memory usage: Disable heavy features"
echo "• Key binding conflicts: Check mode-specific bindings"
echo "• Encoding issues: Set UTF-8 explicitly"
echo "• Plugin conflicts: Disable and test incrementally"

# === EDITOR MIGRATION STRATEGIES ===
echo "🔄 Editor Migration Strategies:"
echo ""
echo "Switching editors successfully:"
echo "1. Learn basic operations first"
echo "2. Migrate key bindings gradually"
echo "3. Find equivalent plugins/features"
echo "4. Practice with non-critical files"
echo "5. Keep old editor available during transition"
echo "6. Focus on muscle memory development"

# === SPECIALIZED EDITING TASKS ===
echo "🎯 Specialized Editing Tasks:"
echo ""
echo "Log file analysis:"
echo "• Use grep/awk for filtering"
echo "• Tail -f for real-time monitoring"
echo "• Use less for large file navigation"
echo "• Configure syntax highlighting for logs"
echo ""
echo "Configuration file editing:"
echo "• Always backup before editing"
echo "• Use syntax checking when available"
echo "• Understand file format (JSON, YAML, INI)"
echo "• Test changes incrementally"
echo ""
echo "Code refactoring:"
echo "• Use search and replace with regex"
echo "• Leverage LSP for symbol renaming"
echo "• Use multiple cursors for similar changes"
echo "• Test changes frequently"

# === THE ULTIMATE EDITOR TOOLKIT ===
echo "🛠️ The Ultimate Editor Toolkit:"
echo ""
echo "Essential tools to complement any editor:"
echo "• fzf - Fuzzy file finder"
echo "• ripgrep - Fast text search"
echo "• fd - Fast file finder"
echo "• bat - Better cat with syntax highlighting"
echo "• exa - Better ls with colors"
echo "• tmux/screen - Terminal multiplexing"
echo "• git - Version control"
echo "• ctags - Code navigation"

# === EDITOR MASTERY ASSESSMENT ===
echo "📊 Editor Mastery Assessment:"
echo ""
echo "Beginner level:"
echo "✅ Can open, edit, save, and close files"
echo "✅ Knows basic navigation"
echo "✅ Can search for text"
echo ""
echo "Intermediate level:"
echo "✅ Uses keyboard shortcuts efficiently"
echo "✅ Can search and replace with patterns"
echo "✅ Manages multiple files/buffers"
echo "✅ Has customized configuration"
echo ""
echo "Advanced level:"
echo "✅ Uses advanced features (macros, plugins)"
echo "✅ Can edit efficiently without mouse"
echo "✅ Handles large files and projects"
echo "✅ Integrates with development workflow"
echo ""
echo "Master level:"
echo "✅ Teaches others editor techniques"
echo "✅ Contributes to editor ecosystem"
echo "✅ Adapts quickly to new editors"
echo "✅ Optimizes workflows continuously"

# === CONGRATULATIONS! ===
echo "🎓 TEXT EDITOR MASTERY COMPLETE!"
echo "================================="
echo "You now understand:"
echo "✅ Nano for beginner-friendly editing"
echo "✅ Vim for efficient modal editing"
echo "✅ Emacs for extensible computing"
echo "✅ Modern alternatives for best of both worlds"
echo "✅ Advanced techniques for text manipulation mastery"
echo "✅ Workflow optimization and productivity tips"
echo "✅ Editor selection based on use case"
echo ""
echo "📃 You are now a TEXT EDITING NINJA!"
echo "Choose your weapon and edit at the speed of thought! 🥷"
echo ""
echo "Remember: The best editor is the one you know well!"
echo "Master your chosen tool and become unstoppable! 💪"`
      }
    ]
  }
}