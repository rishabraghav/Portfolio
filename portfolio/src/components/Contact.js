import React, { useState } from "react";
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import axios from "axios";


function Contact() {

    const [form, setForm] = useState({name: "", email: "", text:""});
    // const [sent, setSent] = useState(false);

    const handleChange = Event => {
        const {name, value} = Event.target;
        setForm(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        });
         
    }
    const send = () => {
        document.getElementById("button").innerHTML = "Sent!";
        setTimeout(function(){ document.getElementById("button").innerHTML = "SEND"; }, 3000);
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://rishabhraghav-portfolio.herokuapp.com/api', {
            form
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }
    return <section>
    <div id="contact" className="card">
        <h2><ContactMailRoundedIcon /> Contact</h2>
        <div className="contactsection">
        <form  className="contact-form" onSubmit={handleSubmit} >
            <input name="name"  onChange={handleChange} value={form.name} className="contact-elements contact-name"  placeholder="Enter your Name"/>
            <input name="email" onChange={handleChange} value={form.email} className="contact-elements contact-email"  placeholder="Enter your Email"/>
            <textarea name="text" onChange={handleChange} className="contact-elements contact-textarea" value={form.text} placeholder="Write your message"></textarea>
            <button id="button" className="contact-elements contact-button" onClick={send} type="submit">SEND</button>
        </form>
    </div>
    </div>
    <hr className="page" />
    
    </section>
}
export default Contact;