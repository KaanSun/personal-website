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
                    <div className='col'>
                        <p> Computer Science Student with a strong interest in software development, artificial intelligence, and physics</p>
                        <img className="profile-picture-big" src="src/assets/ks.png" alt="a picture of me" />
                    </div>       
                    <div className='col'>
                        <p>Currently attending School of Computing at:</p>
                        <a href="https://www.cs.queensu.ca/"><h1>Queen's University</h1></a>
                        <br />
                        <br />
                        <p>GitHub account can be found <a href="https://github.com/KaanSun">here</a> or bottom right side of this page.</p>
                        <br />
                        <br />
                        <p>Thank you for visiting!</p>
                        <br />
                        <br />
                    </div>
                    
                </div>
            </div>
                        <a className=" " href="https://github.com/KaanSun/">
                        <img className="github-link" src="src/assets/github-white.png" alt="My Github Account" />
                        </a>
           

            
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