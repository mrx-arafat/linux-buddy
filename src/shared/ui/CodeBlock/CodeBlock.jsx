import { useState } from 'react'

const CodeBlock = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  // Parse and style code lines to differentiate commands from comments
  const parseCodeLine = (line, lineNumber) => {
    const trimmedLine = line.trim()

    // Empty lines
    if (!trimmedLine) {
      return (
        <div key={lineNumber} className="flex min-w-0">
          <span className="text-gray-500 select-none mr-4 text-xs leading-7 font-mono w-10 text-right flex-shrink-0">
            {lineNumber}
          </span>
          <span className="leading-7">&nbsp;</span>
        </div>
      )
    }

    // Comment lines (starting with #)
    if (trimmedLine.startsWith('#')) {
      return (
        <div key={lineNumber} className="flex min-w-0">
          <span className="text-gray-500 select-none mr-4 text-xs leading-7 font-mono w-10 text-right flex-shrink-0">
            {lineNumber}
          </span>
          <span className="text-gray-400 italic leading-7 font-mono whitespace-pre-wrap break-all flex-1 min-w-0">
            {line}
          </span>
        </div>
      )
    }

    // Command lines - detect different types
    let commandClass = 'text-green-400'
    let commandIcon = null

    // Sudo commands (elevated privileges)
    if (trimmedLine.startsWith('sudo ')) {
      commandClass = 'text-red-400 font-semibold'
      commandIcon = (
        <span className="text-red-500 mr-1" title="Requires elevated privileges">⚡</span>
      )
    }
    // Package management commands
    else if (trimmedLine.match(/^(apt|dnf|pacman|yum|brew|pip|npm|yarn)\s/)) {
      commandClass = 'text-blue-400 font-medium'
      commandIcon = (
        <span className="text-blue-500 mr-1" title="Package management">📦</span>
      )
    }
    // File operations
    else if (trimmedLine.match(/^(cp|mv|rm|mkdir|touch|chmod|chown)\s/)) {
      commandClass = 'text-yellow-400 font-medium'
      commandIcon = (
        <span className="text-yellow-500 mr-1" title="File operation">📁</span>
      )
    }
    // Network commands
    else if (trimmedLine.match(/^(ping|curl|wget|ssh|scp|rsync)\s/)) {
      commandClass = 'text-purple-400 font-medium'
      commandIcon = (
        <span className="text-purple-500 mr-1" title="Network operation">🌐</span>
      )
    }
    // System monitoring
    else if (trimmedLine.match(/^(ps|top|htop|free|df|lscpu|uptime|who|w)\s?/)) {
      commandClass = 'text-cyan-400 font-medium'
      commandIcon = (
        <span className="text-cyan-500 mr-1" title="System monitoring">📊</span>
      )
    }

    return (
      <div key={lineNumber} className="flex group hover:bg-gray-800 hover:bg-opacity-50 rounded px-2 -mx-2 min-w-0">
        <span className="text-gray-500 select-none mr-4 text-xs leading-7 font-mono w-10 text-right flex-shrink-0">
          {lineNumber}
        </span>
        <span className={`leading-7 flex items-start min-w-0 flex-1 ${commandClass}`}>
          {commandIcon}
          <span className="font-mono whitespace-pre-wrap break-all">{line}</span>
        </span>
      </div>
    )
  }

  const codeLines = code.split('\n')
  const parsedLines = codeLines.map((line, index) => parseCodeLine(line, index + 1))

  return (
    <div className="relative group">
      <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-600">
          <div className="flex items-center space-x-3">
            {/* Terminal window controls */}
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer" title="Close"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer" title="Minimize"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer" title="Maximize"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm font-mono">{language}</span>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <span className="text-gray-500 text-xs">{codeLines.length} lines</span>
            </div>
          </div>

          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-all duration-200 text-sm px-3 py-1.5 rounded-md hover:bg-gray-700 cursor-pointer group/btn"
            title={copied ? "Copied to clipboard!" : "Copy to clipboard"}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="relative">
          <div className="p-6 overflow-x-auto bg-gray-900 min-w-0">
            <pre className="text-sm leading-7 whitespace-pre">
              <code className="font-mono block text-gray-300">
                {parsedLines}
              </code>
            </pre>
          </div>

          {/* Syntax highlighting legend (appears on hover) */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 border border-gray-600 rounded-lg p-3 text-xs z-10 shadow-xl">
            <div className="text-gray-300 font-semibold mb-2">Syntax Guide:</div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">Comments</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">•</span>
                <span className="text-green-400">Commands</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">⚡</span>
                <span className="text-red-400">Sudo (elevated)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">📦</span>
                <span className="text-blue-400">Package mgmt</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">📁</span>
                <span className="text-yellow-400">File operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">🌐</span>
                <span className="text-purple-400">Network</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400">📊</span>
                <span className="text-cyan-400">System monitor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeBlock
