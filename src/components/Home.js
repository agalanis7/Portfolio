import React, { Component } from 'react'

export default class Home extends Component{
    render() {
        return( 
            <section id='home'>
                <header>
                    <h1>
                  {/* //this is how you use a local source for a link with react//       */}
                    {/* <img src={require("../images/Storm.jpg")} /> */}
                        Andreas Galanis
                    </h1>
                    <p> this is where the magic happens </p>
                </header>
            </section>
        )
    }
}