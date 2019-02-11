import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
    <div>
      <div>   
<section id="portfolio">
      <a href="#">
        <i class="far fa-arrow-alt-circle-up"></i>
      </a>

    </section>
    </div>
      <div>
        <h1>PORTFOLIO</h1>
        <Slider {...settings}>
          <div>
            <h2>g2p, a react.js site that pulls data from the Refuge Restrooms API and renders bathroom locations on a map</h2>
            <h3>
              <iframe width="1020" height="630" src="https://www.youtube.com/embed/dHsItCAbETA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}