import React from "react";
import { motion } from "framer-motion";
import {pageTransition, pageVariants} from "../assets/framer";
import HeadDiv from "../components/HeadDiv";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

function About(){
    return(
        <motion.div 
        exit="out"
        animate="in" 
        initial="initial"
        variants={pageVariants}
        transition={pageTransition}
        >
            <HeadDiv>
                Myself
            </HeadDiv>
            <div className="about">
            <Paragraph style={{margin: "auto"}}>
                I'm a Full-Stack Developer who ♥ coding. I like listening song, playing outdoor games, binge watching, adventure, dancing, singing and playing games, generally fps games, currently playing Valorant.
            </Paragraph>
            <Paragraph style={{margin: "auto"}}>
                So if you want to play game together, or need some help, or make a team, or just chill out...
            </Paragraph>
            <Link exact to="/contact">
            <Heading>
                Contact Me
            </Heading>
            </Link>
            </div>
        </motion.div>
    )
}

export default About;