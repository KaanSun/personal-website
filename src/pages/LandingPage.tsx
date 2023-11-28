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
            <div className="container ">
                <div className='row justify-content-center'>
                    <div className='col'></div>
                    <a className="col">asdasdasdasdasddas</a>
                </div>
            </div>
           

            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
      </div>
    )

    }
    export default LandingPage