import React, { Component } from 'react'

export default class Footer extends Component{
    render() {
        return( 
      <footer>
        <a href="https://facebook.com" target="_blank">
          <i class="fab fa-facebook-square fa-3x"></i>
        </a>
        <a href="https://twitter.com" target="_blank">
          <i class="fab fa-twitter-square fa-3x"></i>
        </a>
        <a href="https://github.com" target="_blank">
          <i class="fab fa-github-square fa-3x"></i>
        </a>
    </footer>
        )
    }
}