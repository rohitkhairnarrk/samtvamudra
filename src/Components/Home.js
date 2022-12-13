import React from 'react'
import './Home.css';
import $ from 'jquery';
import Activity from './Activity'
import Advertise from './Images/advertise.jpg'
// import Advertise1 from './Images/advertise1.jpg'
// import Advertise2 from './Images/advertise2.jpg'
// import Advertise3 from './Images/advertise3.jpg'
import First1 from './Images/Bitmap.jpg'

$(function(){
  var tickerLength = $('.container ul li').length;
  var tickerHeight = $('.container ul li').outerHeight();
  $('.container ul li:last-child').prependTo('.container ul');
  $('.container ul').css('marginTop',-tickerHeight);
  function moveTop(){
    $('.container ul').animate({
      top : -tickerHeight
    },600, function(){
     $('.container ul li:first-child').appendTo('.container ul');
      $('.container ul').css('top','');
    });
   }
  setInterval( function(){
    moveTop();
  }, 1500);
  });


function Home() {
  return (
    <>
    <div className="mainHome">
      <div id="slider">
        <div className="slides">
          <div className="slide">
          <div className="info">
            <h2>Info Title1</h2>
            <p>This line use information of ImageThis line use information of ImageThis line use </p>
          </div>
            <img src={Advertise} width="100%" height="443px" />
           </div>
          
          </div>
      </div>

      <div className="homebuttons">
        
        <ul>
          <li><a href="/">Classes</a></li>
          <li><a href="/">Notice</a></li>
          <li><a href="/">Edcuation Notes</a></li>
          <li><a href="/">Organization</a></li>
          <li><a href="/">&nbsp;Teachers</a></li>
        </ul>
      </div>
            <div className="org">
            <div className="frames">
              <div className="block1">
              <div className="images"><img src={First1} alt="This an frame images" />
              <div className="pos">
              <h2>Rohidas patil</h2><h5> Founder of Organization</h5>
              </div>
              </div>
              <div className="images"><img src={First1} alt="This an frame images" />
              <div className="pos">
              <h2>Manohar patil</h2><h5> Founder of Organization</h5>
              </div>
              </div>
              </div>
              <div className="block2">
              <div className="images"><img src={First1} alt="This an frame images" />
              <div className="pos">
              <h2>Rajendra patil</h2><h5> Founder of Organization</h5>
              </div>
              </div>
              <div className="images"><img src={First1} alt="This an frame images" />
              <div className="pos">
              <h2>Roshan patil</h2><h5> Founder of Organization</h5>
              </div>
              </div>

              </div>
            </div>
<div className="news">
  <h1>News and Announcement</h1>
            <div class="container">
              
              
  <ul>

    <li>
      
      <p>News detail just a line jhghdsbd hsdssdhjhdjshdjsahdjs</p>
    </li>
    <li>
      
      <p id='red'>News detail just a line jhghdsbd hsdssdhjhdjshdjsahdjsNews 
      detail just a line jhghdsbd hsdssdhjhdjshdjsahdjsNews detail just a line j
            </p>
    </li>
    <li>
      
      <p>News detail just a line jhghdsbd hsdssdhjhdjshdjsahdjs</p>
    </li>
    <li>
      
      <p>News detail just a line jhghdsbd hsdssdhjhdjshdjsahdjs</p>
    </li>
    <li>
      
      <p>News detail just a line jhghdsbd hsdssdhjhdjshdjsahdjs</p>
    </li>
    <li>
      
      <p>News detail just a line jhghdsbd hsdssdhjhdjshdjsahdjs</p>
    </li>
    <li>
      
      <p>News detail just a line jhghdsbd hsdssdhjhdjshdjsahdjs</p>
    </li>
    <li>
      
      <p>News detail just a line jhghdsbd hsdssdhjhdjshdjsahdjs</p>
    </li>
    
  </ul>
</div>
</div>

            </div>
      </div>
      
   <Activity/>
    </>
  );
    
}

export default Home