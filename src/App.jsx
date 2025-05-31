
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './shared/ui/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ChapterPage from './pages/ChapterPage/ChapterPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="chapter/:slug" element={<ChapterPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
