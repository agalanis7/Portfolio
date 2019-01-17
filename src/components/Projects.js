import React, { Component } from 'react'
import projects from '../data/projects.json'
import Project from './Project'


export default class Projects extends Component{
    render() {
        return( 
            <div>
                <h1>Projects</h1>
            <section id="portfolio">
            <a href="#">
              <i class="far fa-arrow-alt-circle-up"></i>
            </a>
            {
                projects.allProjects.map((project, i) => {
                    return (
                        <Project imgName={project.imgName} title={project.title} description={project.description} key={i} />
                    )
                })
            }
            </section>
          </div>
        )
    } 
}