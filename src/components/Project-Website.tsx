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
  }, [headerText, changeText]);`
    
    

    return (
        <div className="bg-grey standard-margin">
            <h2 className="text-white ">This Website</h2>
            <p className=" ">This website was primarily made to display my projects, and act as a journal to keep track of what 
            I have learned. However, there was a lot of cool things I came across so I would like to share some of them.</p>

            <p>The website is open source. You can check it out <a href="https://github.com/KaanSun/personal-website">here</a> or at the bottom right side of this page</p>
            
            <h3 className="text-white">Some Cool Snippets</h3>

            <SyntaxHighlighter className="standard-code-block" language="javascript" style={atomOneDark}>
            {code}
            </SyntaxHighlighter>


            <a href="https://github.com/KaanSun/personal-website">
             <img className="github-link" src="src/assets/github-white.png" alt="Github Repository of this Website" />
             </a>
        </div>
    );
}

export default ProjectWebsite;