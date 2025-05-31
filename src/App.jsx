
import Header from './components/Header'
import Hero from './components/Hero'
import CourseOverview from './components/CourseOverview'
import ChapterGrid from './components/ChapterGrid'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <CourseOverview />
      <ChapterGrid />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
