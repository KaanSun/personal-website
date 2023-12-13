import { useState, useEffect, useCallback} from 'react'
import { messages } from '../data/messages';

import "../styles/Background.css";
function Background() {


  // ------------------------------------- SHUFFLE LIST -------------------------------------

  function shuffleList(list: string[]): string[] {
    const shuffledList = [...list];
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }
    return shuffledList;
  }




  // ------------------------------------- HEADER ANIMATION -------------------------------------

    // this all will look super confusing but it is the way it is due to how terrible css animations are

    
    const differentHeaders = shuffleList(messages);
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
      setFading("fadeInOut 4s")
      setVisibility(visibilityStates.visible)
    })
    
    const changeTimer = setTimeout(changeText, 4000);
    return () => clearTimeout(changeTimer)
  }, [headerText, changeText]);
    // ----------------------------------------------------------------------------------------


    return (
        <div className='bg'>
            <img id="bg" src="src/assets/stars.jpg" alt="hi" />
            <h1 className="landing-page-header">

            {/* <span className={is}> {"landing-page-yellow-header fadeLandingTitle"} */}
            <span className={"landing-page-yellow-header fadeLandingTitle"} style={{animation: fadingState, visibility: visibilityState}}> 
            {headerText}
            </span>
            </h1>
        </div>
        
    );
}
export default Background