import { useState, useEffect, useCallback} from 'react'

import "../styles/Background.css"
function FlashingTextDemo() {

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
        <div className='bg'>

            {/* <span className={is}> {"landing-page-yellow-header fadeLandingTitle"} */}
            <span className={"landing-page-yellow-header fadeLandingTitle"} style={{animation: fadingState, visibility: visibilityState}}> 
            {headerText}
            </span>
        </div>
        
    );
}
export default FlashingTextDemo