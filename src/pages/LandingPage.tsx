import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Background from '../components/Background.tsx'
import '../styles/App.css'




function LandingPage() {


   
    return (

        <div className="landing bg-grey">
                <Background />
            <div className="master ">
     
            
            <h1>About Me</h1>
            <h3>Kaan Sun</h3>
            <div className="container ">
                <div className='row justify-content-center'>
                    <div className='col'>Computer Science Student with a strong interest in software development, artificial intelligence, and
physics</div>
                    <a className="col" href="https://github.com/KaanSun/personal-website">
                    <img className="github-link landing" src="src/assets/github-white.png" alt="Github Repository of this Website" />
                    </a>
                </div>
            </div>
           

            
        </div>
        <a className="link" href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a className="link" href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
      </div>
    )

    }
    export default LandingPage