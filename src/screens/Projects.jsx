import React from "react";
import { motion } from "framer-motion";
import {pageTransition, pageVariants} from "../assets/framer";
import HeadDiv from "../components/HeadDiv";
import Project from "../components/Project";
import { Grid } from "@mui/material";

import projects from "../assets/projects";

function Projects(){
    const styles = {
        marginTop: "4%",
        padding: "0 5%"
    }
    const mapped = item =>{
        return(
            <Grid style={styles} item xs={7} sm={6} md={6} lg={4} xl={4} >
                <Project 
                name={item.name}
                image={item.image}
                description={item.description}
                tech={item.tech}
                code={item.code}
                demo={item.demo}
                />
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
        >
            <HeadDiv>ShowCase</HeadDiv>
            <Grid style={styles} container spacing={1}>
                    {projects.map(mapped)}
                </Grid>
        </motion.div>
    )
}

export default Projects;