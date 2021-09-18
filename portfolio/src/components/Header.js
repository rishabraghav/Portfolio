import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import {Link} from "react-scroll"


function Header() {
    return <header>
        <div className="ul">
        <Link className="li" to="home" offset={-60} smooth={true} duration={500}><HomeRoundedIcon />  Home</Link>
        <Link className="li" to="skills" offset={-60} smooth={true} duration={500}> <DeveloperModeIcon />  Skill</Link>
        <Link className="li" to="projects" offset={-60} smooth={true} duration={500}> <SportsEsportsRoundedIcon />  Projects </Link>
        <Link className="li" to="contact" offset={-60} smooth={true} duration={500} > <ContactMailRoundedIcon />  Contact </Link>
        </div>
    </header>
}

export default Header;