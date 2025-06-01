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
import { chapter21 } from './chapters/chapter-21.js'
import { chapter22 } from './chapters/chapter-22.js'
import { chapter23 } from './chapters/chapter-23.js'
import { chapter24 } from './chapters/chapter-24.js'
import { chapter25 } from './chapters/chapter-25.js'
import { chapter26 } from './chapters/chapter-26.js'
import { chapter27 } from './chapters/chapter-27.js'
import { chapter28 } from './chapters/chapter-28.js'
import { chapter29 } from './chapters/chapter-29.js'
import { chapter30 } from './chapters/chapter-30.js'
import { chapter31 } from './chapters/chapter-31.js'
import { chapter32 } from './chapters/chapter-32.js'
import { chapter33 } from './chapters/chapter-33.js'
import { chapter34 } from './chapters/chapter-34.js'

// Complete list of all 34 LinuxBuddy chapters
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
  chapter20,
  chapter21,
  chapter22,
  chapter23,
  chapter24,
  chapter25,
  chapter26,
  chapter27,
  chapter28,
  chapter29,
  chapter30,
  chapter31,
  chapter32,
  chapter33,
  chapter34
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
