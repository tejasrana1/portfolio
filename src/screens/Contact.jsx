import React, { useState } from "react";
import { motion } from "framer-motion";
import {pageTransition, pageVariants} from "../assets/framer";
import HeadDiv from "../components/HeadDiv";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import TextareaAutosize from 'react-textarea-autosize';

function Contact(){
    const [info,setInfo] = useState({
        name: "",
        email: "",
        message: ""
    })
    function handleChange(e){
        const {name, value} = e.target;
        setInfo(prevValue=>{
            return{
                ...prevValue,
                [name]: value
            }
        })
    }
    // function handleClick(){
    //     document.querySelector(".toggled").classList.toggle("activeMedia");
    // }
    function sendEmail(e){
        e.preventDefault();
        console.log(info);
        emailjs.send('service_mgw37en', 'template_8opmtl8', info, "user_P89FQiDW1tGPqTf4IFWp3")
      .then((result) => {
          return alert("Email Sent Successfully!")
      }, (error) => {
          return alert("Something Went Wrong! Try Again.")
      });
      setInfo({
        name: "",
        email: "",
        message: ""
      })
    
    }
    return(
        <motion.div 
        exit="out"
        animate="in" 
        initial="initial"
        variants={pageVariants}
        transition={pageTransition}
        >
        <HeadDiv>
            Reach Out
        </HeadDiv>
        <div className="main">
        <div className="form">
        <form onSubmit={sendEmail} action="">
            <input type="text" required name="name" placeholder="Name" value={info.name} onChange={handleChange} /><br />
            <input type="email" required name="email" placeholder="Email" value={info.email} onChange={handleChange} /><br />
            <TextareaAutosize required name="message" placeholder="Message" value={info.message} minRows={3} maxRows={6} onChange={handleChange} /><br />
            <button>Submit</button>
        </form>
        </div>
        {/* <div className="social">
            <div onClick={handleClick}>Social Media</div>
            <div className="toggled">
                <div className="icons">FaceBook</div>
                <div className="icons">Instagram</div>
                <div className="icons">LinkedIn</div>
                <div className="icons">Github</div>
        </div>
        </div> */}
        
        </div>
        </motion.div>
    )
}

export default Contact;