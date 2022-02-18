import React from "react";
import { motion } from "framer-motion";
import {pageTransition, pageVariants} from "../assets/framer";
import SkillCard from "../components/SkillCard";
import HeadDiv from "../components/HeadDiv";
import { Grid } from "@mui/material";
import "./Skills.css";

import skills from "../assets/skills";

function Skills(){
    const styles = {
        marginTop: "4%",
        padding: "0 5%",
    }
    function mapped(item){
        return(
            <Grid item xs={6} sm={4} md={3} lg={2.4} xl={2.4} >
                <SkillCard img={item.img} alt={item.alt} text={item.text} />
            </Grid>
        )
    }
    return(
        <motion.div 
        exit="out"
        animate="in" 
        initial="initial"
        variants={pageVariants}
        transition={pageTransition}
        className="motionDiv"
        >
            <HeadDiv>Skills</HeadDiv>
                <Grid style={styles} container spacing={1}>
                    {skills.map(mapped)}
                </Grid>
            
        </motion.div>
    )
}

export default Skills;