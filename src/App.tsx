
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar.tsx'
import ProjectWebsite from "./components/Project-Website.tsx";
import './index.css'

function App() {

  return (
    <>
        <Navbar />

    <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/this-website" element={<ProjectWebsite/>} />
          <Route path="/leadership" />
          <Route path="/our-story" element={<div>our-story</div>} />
          <Route path="/blog" element={<div>blog</div>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
