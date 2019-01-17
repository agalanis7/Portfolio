import React, { Component } from 'react'

export default class AboutMe extends Component{
    render() {
        return(
            <main id="about-me">
      <a href="#">
        <i class="far fa-arrow-alt-circle-up"></i>
      </a>
      <h1>About Me</h1>

      <picture>
      <source media="(min-width: 300px)" srcset="https://pbs.twimg.com/profile_images/739109952212467713/Vr_n84CJ.jpg"></source>  
      <source media="(min-width: 500px)" srcset="http://all4desktop.com/data_images/original/4246355-happy.jpg"></source>
      <img src="https://pbs.twimg.com/profile_images/739109952212467713/Vr_n84CJ.jpg" alt="my profile picture"/>
      </picture>

      <div>
        <p>This is the AboutMe section.</p>
      </div>

    </main>

        )
    }
}