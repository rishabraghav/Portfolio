import React from "react"
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';


function Home() {
    return (
        <section>
        <div id="home" className="card">
        
        <div className="name">
        <h1 >Hi! I'm Rishabh</h1> 
        </div>
    
        <hr className="home"/>

        <div className="aboutme">
            <h2><PersonRoundedIcon className="icons"/> About me</h2>
            <p className="aboutme-text">I'm Rishabh self-taught Front-end web developer stationed in India<img alt="India" className="india" src="https://img.icons8.com/office/40/000000/india--v2.png"/>. . I like to make simple, user-friendly, responsive & fast web apps.</p>
        </div>
        
        </div>
        <hr className="page" />
        </section>
    )
}

export default Home;