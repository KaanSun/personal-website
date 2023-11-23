import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'react-bootstrap';
import { useState,} from 'react'
import '../styles/App.css'
import Background from '../components/Background.tsx'



function LandingPage() {
    const [count, setCount] = useState(0)


   
    return (

        <div>
                <Background />
            <div className="master">
            <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <Button> Hello</Button>
            </div>
            <h1>Vite + React</h1>

           

            <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            </div>
            <p className="read-the-docs">
            Click on the Vite and React logos to learn more
            </p>
        </div>
      </div>
    )

    }
    export default LandingPage