import React, { Component } from 'react'

export default class Contact extends Component{
    render() {
        return( 
            <div>
                <aside id="contact-me">
                    <a href="#">
                        <i class="far fa-arrow-alt-circle-up"></i>
                    </a>
                    <header>
                        <h1>Contact Me</h1>
                        <p>Please feel free to drop a line with compliments and good vibes!</p>
                    </header>

                    <form action="#" method="post">
                        <div class="form-field">
                            <label for="user_name">Name</label> 
                            <input type="text" name="user_name" required=""></input>
                        </div>

                        <div class="form-field">
                            <label for="user_email">Email</label>
                            <input type="email" name="user_email" required=""></input>
                        </div>

                        <div class="form-field">
                            
                            {/* <input type="message" name="message" required=""></input> */}
                            {/* <div class="form-field"> */}
                            <textarea name="message"></textarea>
                        </div>
                        {/* </div> */}
                        <button class="submit-button" type="submit">Submit</button> 
                        
                    </form>
                    <footer id="footer">
                        <div>
                            <a href="https://facebook.com/drenomaly" target="_blank">
                                <i class="fab fa-facebook-square fa-3x"></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://twitter.com/@GalanisAndreas" target="_blank">
                                <i class="fab fa-twitter-square fa-3x"></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/agalanis7" target="_blank">
                                <i class="fab fa-github-square fa-3x"></i>
                            </a>
                        </div>
                    </footer>
                </aside>
            </div>
    

        )
    }
}