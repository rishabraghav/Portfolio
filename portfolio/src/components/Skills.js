import React from "react"
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

function Skills() {
    return(<section>
    <div className="card" id="skills">
        <h2><DeveloperModeIcon /> Skills</h2>
        
        <div className="skillicons">

        <div className="skilltop">
        <img className="animate__animated animate__backInLeft skillsicon" alt="html" src="https://img.icons8.com/color/144/000000/html-5--v1.png"/>
        <img className="animate__animated animate__backInDown skillsicon" alt="css" src="https://img.icons8.com/color/144/000000/css3.png"/>
        <img className="animate__animated animate__backInRight skillsicon" alt="javascript" src="https://img.icons8.com/color/144/000000/javascript--v2.png"/>
        </div>

        <div className="skillbottom">
        <img className="animate__animated animate__backInLeft skillsicon" alt="react" src="https://img.icons8.com/plasticine/144/000000/react.png"/>
        <img className="animate__animated animate__backInUp skillsicon" alt="node" src="https://img.icons8.com/color/144/000000/nodejs.png"/>
        <img className="animate__animated animate__backInRight skillsicon" alt="mongoDb" src="https://img.icons8.com/color/144/000000/mongodb.png"/>
        </div>
        
        </div>

    </div>
    <hr className="page" />
    </section>);
}

export default Skills   