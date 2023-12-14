import FlashingText from '../components/Flashing-Text-Demo'
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

            <p>The website is open source. You can check it out <a href="https://github.com/KaanSun/personal-website">here</a> or 
            at the bottom right side of this page. This website was made using React framework using Typescript.</p>
            
            <h3 className="text-white">Some Cool Snippets</h3>

            <p>Background.tsx</p>
            <SyntaxHighlighter className="standard-code-block" language="javascript" style={atomOneDark}>
            {code}
            </SyntaxHighlighter>
            <p>Background.css</p>
            <SyntaxHighlighter className="standard-code-block" language="css" style={atomOneDark}>
            {code2}
            </SyntaxHighlighter>

            <h6>This is the typescript code that runs the flashing texts at the landing page. </h6>

            <h5>This animation uses no external 
              libraries. Pure CSS and Javascript.
              </h5>
            
            <h1>Basics</h1>
            <p> The initial code version is very straightforward. The TypeScript component set a 3-second timeout and utilized a 
              callback function to cycle through an array of different messages, updating the text every 3 seconds. These messages
               were stored either as a constant directly in the TSX file or in an external database. The accompanying CSS file featured
                a custom animation lasting 3 seconds, adjusting the text's opacity to make it invisible during each transition. 
                This ensured that users couldn't see the text changing while it was visible.
              </p>
              <h1><FlashingText /></h1>

              <h3> The expected model: </h3>

              <img className="profile-picture-big" src="/assets/Slide1.jpeg" alt="Figure 1.1" />


            <p> There's a minor problem in this system. The way CSS time functions is simple, it plays the animation
               every 3 seconds, starting from when the page loads. Initially, the text change and the opacity animation sync up 
               perfectly, concealing the text change while it's visible. However, over time, it falls out of sync with the 
               animation. The reason behind this is clear: JavaScript sets a timeout for 3 seconds, triggers the state 
               function that alters the text, and only after that function completes does it set another 3-second timeout. 
               So, the actual time the text remains on screen is the 3-second timeout <b>plus</b> the time it takes for the function 
               to run. This occurs because we're using callback functions instead of a loop that invokes a specific 
               function every 3 seconds.
            </p>
            <h3> Actual Model &#40;Before fix&#41;	: </h3>

            <img className="profile-picture-big" src="/assets/Slide2.jpeg" alt="Figure 1.2" />

            <p> There are several solutions that can be utilized to fix this problem. However, there is one particular solution
              that will make sure this animation works as intended on all machines. Whenever the timeout ends and the function is ran,
              the text element will be assigned 'visibility:none'. When the text is changed, React will force CSS to re-render
              the animation. This will make sure the text change is hidden, no matter what problem occurs in the client system. The
              visual animation will run as long as the React runs. This way, the animation doesn't depend on a particular measurement of time.
              It will run as fast as the client machine can handle, plus the 3-second timeout.
            </p>

            <h3> Revised Model: </h3>

            <img className="profile-picture-big" src="/assets/Slide3.jpeg" alt="Figure 1.3" />

            <a href="https://github.com/KaanSun/personal-website">
             <img className="github-link" src="/assets/github-white.png" alt="Github Repository of this Website" />
             </a>
        </div>
    );
}

export default ProjectWebsite;