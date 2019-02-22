import React, { Component } from 'react'
import projects from '../data/projects.json'
import Project from './Project'
import video from '../images/TagAlong.mp4'
import video2 from '../images/g2p.mov'


export default class Projects extends Component{
    render() {
        return( 
            <div>
                <h1>Projects</h1>
                <h2>g2p</h2> 
                <h4>A React.js app that pulls data from the Refuge Restrooms API and renders bathroom locations on a map</h4>
                    <h3>
                      <section id="projects">
                        <video autoPlay muted loop id="bVideo" >
                          <source src={ video2 } type="video/mp4"/>
                        </video>
                      </section>
                    </h3>

            <div>
                <h2>TagAlong</h2>
                <h4>A React.js app with a Rails database that allows users to create and/or join sports pickup games</h4>
                  <h3>
                    <section id="projects">
                      <video autoPlay muted loop id="bVideo" >
                        <source src={ video } type="video/mp4"/>
                      </video>
                    </section>
                  </h3>
            </div>
            </div>
        )
    } 
}

{/* <div>
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
          </div> */}