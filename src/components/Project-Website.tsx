//import Prism from "prismjs";
import "../index.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "../styles/Project-Website.css"



function ProjectWebsite() {

    const code = ` const differentHeaders = ["I am your personal website", "What are we doing?"]
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
    
);`
    
  const code2 = `

  .fadeLandingTitle {
    animation: fadeInOut 3s;
  }

.landing-page-header {
    position: absolute;
    top: 50%;
    width: 100%;
    color: aliceblue;
    font-size: 5vw;
  }

  @keyframes fadeInOut {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
    
  }
  
  `
    

    return (
        <div className="bg-grey standard-margin">
            <h2 className="text-white ">This Website</h2>
            <p className=" ">This website was primarily made to display my projects, and act as a journal to keep track of what 
            I have learned. However, there was a lot of cool things I came across so I would like to share some of them.</p>

            <p>The website is open source. You can check it out <a href="https://github.com/KaanSun/personal-website">here</a> or at the bottom right side of this page</p>
            
            <h3 className="text-white">Some Cool Snippets</h3>

            <p>Background.tsx</p>
            <SyntaxHighlighter className="standard-code-block" language="javascript" style={atomOneDark}>
            {code}
            </SyntaxHighlighter>
            <p>Background.css</p>
            <SyntaxHighlighter className="standard-code-block" language="css" style={atomOneDark}>
            {code2}
            </SyntaxHighlighter>

            <p>This is the typescript code that runs the flashing texts at the landing page. You will realize there are many odd things about this code, so I will go over them with you:</p>
            <h3>Basics</h3>
            <p>The first version of the code was very simple. The typescript component would define a timeout for 3 seconds and change the 
              text every 3 seconds using a callback function (it would iterate through an array of cool messages). All of the different cool messages were either stored in the tsx file itself
              as a const, or in a database elsewhere. In the css file, there would be a custom css animation that would have a length of 3 seconds and would change
              the opacity of the text so it is invisible at every time when the text was changing (so that user cannot see the text changing while it was visible).
              </p>

            <p> There is one slight issue with this system. The way css time works is simple. It would run the animation at exactly
              every 3 seconds starting from when the page renders. At the first run, the text change and the animation opacity would perfectly 
              align and you wouldn't be able to see the text changing while it was visible. But as time goes on, it would get out of sync with the
              animation. The reason for this is simple. Javascript sets a timeout for 3 seconds, it runs the state function that changes the text, and
              only when that funcion has executed, it would set another timeout for 3 seconds. So the exact time the text stays on screen is the 
              3 second timeout <b>plus</b> the time it takes for the function to execute. This is because we are using callback functions instead
              of a loop that calls a cerain function every 3 seconds.
            </p>
            <a href="https://github.com/KaanSun/personal-website">
             <img className="github-link" src="src/assets/github-white.png" alt="Github Repository of this Website" />
             </a>
        </div>
    );
}

export default ProjectWebsite;