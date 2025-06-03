// Import all individual chapter files
import { chapter1 } from './chapters/chapter-1.js'
import { chapter2 } from './chapters/chapter-2.js'
import { chapter3 } from './chapters/chapter-3.js'
import { chapter4 } from './chapters/chapter-4.js'
import { chapter5 } from './chapters/chapter-5.js'
import { chapter6 } from './chapters/chapter-06.js'
import { chapter7 } from './chapters/chapter-07.js'
import { chapter8 } from './chapters/chapter-08.js'
import { chapter9 } from './chapters/chapter-09.js'
import { chapter10 } from './chapters/chapter-10.js'
import { chapter11 } from './chapters/chapter-11.js'
import { chapter12 } from './chapters/chapter-12.js'
import { chapter13 } from './chapters/chapter-13.js'
import { chapter14 } from './chapters/chapter-14.js'
import { chapter15 } from './chapters/chapter-15.js'
import { chapter16 } from './chapters/chapter-16.js'
import { chapter17 } from './chapters/chapter-17.js'
import { chapter18 } from './chapters/chapter-18.js'
import { chapter19 } from './chapters/chapter-19.js'
import { chapter20 } from './chapters/chapter-20.js'

// Complete list of all 20 completed LinuxBuddy chapters
const allChaptersArray = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9,
  chapter10,
  chapter11,
  chapter12,
  chapter13,
  chapter14,
  chapter15,
  chapter16,
  chapter17,
  chapter18,
  chapter19,
  chapter20
]

// Export the combined chapters array
export const allChapters = allChaptersArray

// Helper functions for chapter navigation
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
