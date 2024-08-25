import { Button } from '@mui/material'
import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    
    <div style={main}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
            <div>
                <h5>Projects in Bawadia Kalan, Bhopal</h5>
                <p>Inspired by your search preferences</p>
            </div>
            <Button>View All</Button>
        </div>
        <ProjectCard/>
        
    </div>
  )
}

const main = {
    backgroundColor: "#dcdede",
    padding:0,
    margin:10
}

export default Projects