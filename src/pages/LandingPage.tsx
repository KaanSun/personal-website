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
                        <div className='generic-card'>
                            <p> Computer Science Student with a strong interest in software development, artificial intelligence, and physics</p>
                            <img className="profile-picture-big" src="/assets/ks.png" alt="a picture of me" />
                        </div>
                    </div>       
                    <div className='col'>
                        <div className='generic-card items-center'>
                            <p>Currently attending School of Computing at:</p>
                            <br />
                            <a href="https://www.cs.queensu.ca/"><h2>Queen's University</h2></a>                          
                            <br />
                            <br />
                            <p>GitHub account can be found <a href="https://github.com/KaanSun">here</a> or bottom right side of this page.</p>
                            <br />
                            <p>Thank you for visiting!</p>
                        </div>
                    </div>
                </div>
            </div>
                        <a className=" " href="https://github.com/KaanSun/">
                        <img className="github-link" src="/assets/github-white.png" alt="My Github Account" />
                        </a>
           

            
        </div>
      </div>
    )

    }
    export default LandingPage