import React, { Component } from 'react'

export default class Resume extends Component{
    render() {
        return( 
            <section id='resume'>
                <header>
                <a href="#">
                    <i class="far fa-arrow-alt-circle-up"></i>
                </a>
                    <h1>
                        Andreas Galanis
                    </h1>
                    <p> 
Junior Developer with finance and project management background.

<h2>EXPERIENCE</h2>
<h3>Project Manager, Daystar Contracting, LLC, Joppa, MD —2012 - 2018</h3>
<h4>Manage all aspects of residential construction projects, including:</h4>
    <ul>
        <li>Budgeting</li>
        <li>Material acquisition</li>
        <li>Personnel management</li>
        <li>Customer relationship management</li>
    </ul>
<h3>Staff Accountant, Affinity Mortgage Corp., Bel Air, MD — 2006 - 2012</h3>
    <ul>
        <li>Manage AR/AP</li>
        <li>Reconcile bank Statements</li>
        <li>Prepare payroll</li>
    </ul>
<h2>EDUCATION</h2>
<h3>Wyncode Academy, Miami, FL — Full Stack Web Immersive,  2018</h3>
<h3>Hack Reactor, San Francisco, CA — Full Stack Structured Study Program, 2017</h3>
<h3>University of Maryland, College Park, MD — BS Finance, 2006</h3>
<h2>SKILLS</h2>
<h4>Finance, Management Javascript, HTML, CSS, Ruby</h4>
        </p>
    </header>
</section>
        )
    }
}