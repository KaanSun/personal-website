import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'react-bootstrap';
import { useState, useEffect, useCallback} from 'react'
import '../styles/App.css'



function LandingPage() {
    const [count, setCount] = useState(0)


    // ------------------------------------- HEADER ANIMATION -------------------------------------

    // this all will look super confusing but it is the way it is due to how terrible css animations are

    const differentHeaders = ["I am your personal website", "What are we doing?"]
    var headerArrayIndex = 0;


    // have to have css visibility states as enum in typescript
    enum visibilityStates {
        visible = "visible",
        hidden = "hidden"
    }
    const [headerText, setHeaderText] = useState(differentHeaders[0]);
    const [fadingState, setFading] = useState("none")             // just to re-render every time the animation ends 
    const [visibilityState, setVisibility] = useState(visibilityStates.visible)

  const changeText = useCallback(() => {
    headerArrayIndex = (headerArrayIndex + 1) % differentHeaders.length;
    setHeaderText(differentHeaders[headerArrayIndex]);
  }, []);  

  useEffect(() => {
    setVisibility(visibilityStates.hidden) // when the animation ends and the text is about to change, we make 
                            // the visibility hidden so that the animation change doesnt cause flickering
    setFading("none");
    
    requestAnimationFrame(()=>{
      setFading("fadeInOut 3s")
      setVisibility(visibilityStates.visible)
    })
    
    const changeTimer = setTimeout(changeText, 3000);
    return () => clearTimeout(changeTimer)
  }, [headerText, changeText]);
    // ----------------------------------------------------------------------------------------


    return (
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

        <h1 className="landing-page-header">
            Empowering future <br />
            leaders{" "}
            {/* <span className={is}> {"landing-page-yellow-header fadeLandingTitle"} */}
            <span className={"landing-page-yellow-header fadeLandingTitle"} style={{animation: fadingState, visibility: visibilityState}}> 
              {headerText}
            </span>
          </h1>

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
    )

    }
    export default LandingPage