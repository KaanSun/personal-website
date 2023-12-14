
import { createBrowserRouter,
   Route, 
   createRoutesFromElements,
   RouterProvider} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar.tsx'
import ProjectWebsite from "./pages/Project-Website.tsx";
import NLPHackathon from "./pages/NLP-Hackathon.tsx";
import './index.css'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
          <Route path="/" element={<LandingPage/>} />
          <Route path="/this-website" element={<ProjectWebsite/>} />
          <Route path="/nlp-hackathon" element={<NLPHackathon/>} />
          <Route path="/leadership" />
          <Route path="/our-story" element={<div>our-story</div>} />
          <Route path="/blog" element={<div>blog</div>} />
        </Route>
    )
  );

  return (
    <>
        <Navbar />
        <RouterProvider router={router} />  
    </>
  )
}

export default App
