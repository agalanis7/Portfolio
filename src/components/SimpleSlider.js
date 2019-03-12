import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import video from '../images/TagAlong.mp4'
import video2 from '../images/g2p.mov'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    }
    return (
      <div>   
      <h2>Portfolio</h2>
      <Slider {...settings}>
           <div>
            <h3>g2p, a react.js site that pulls data from the Refuge Restrooms API and renders bathroom locations on a map</h3>
               <h3>
                 <div>
                   <video class="video" autoPlay muted loop id="bVideo" >
                     <source src={ video2 } type="video/mp4"/>
                   </video>
                 </div>
               </h3>
           </div>
          
           <div>
             <h3>TagAlong, a React app with a Rails database that allows users to create and/ or join sports pickup games.</h3>
               <h3>
                 <div>
                   <video autoPlay muted loop id="bVideo" >
                     <source src={ video } type="video/mp4"/>
                   </video>
                 </div>
               </h3>
           </div>

         </Slider>
       </div>
     )
   }
   }