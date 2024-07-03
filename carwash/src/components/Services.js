import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../App.css';
import '../CSS/Services.css'

import interior from "../assets/interior.mp4"
import exterior from "../assets/exterior.mp4"
import Premium from "../assets/Premium.mp4"
import express from "../assets/express.mp4"
import carousel from "../assets/carousel-2.jpg"

function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


  return (
    <div>
      <header>
        <nav>
          <div class="nav-content" id='navbar1'>
            <div class="logo">
              <a href="#"><NavLink to={"/Home#navbar1"}>BrightWash</NavLink></a>
            </div>
            <ul class="nav-links">
              <li><NavLink to={"/Home#navbar1"}><a href="#">Home</a></NavLink></li>
              <li><NavLink to={"/Services#navbar1"}><a href="#">Services</a></NavLink></li>
              <li><NavLink to={"/Home#contact-form"}><a href="#">Contact</a></NavLink></li>
              <li><NavLink to={"/Aboutus#navbar1"}><a href="#">About Us</a></NavLink></li>
              <li><NavLink to={"/Booking#navbar1"}><a href="#">Booking</a></NavLink></li>
              <li><NavLink to={"/FAQs#navbar1"}><a href="#">FAQs</a></NavLink></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className='services-body'>
        <section class="intro">
          <h2>Welcome to BRIGHTWASH</h2>
          <p>At BRIGHTWASH, we pride ourselves on delivering top-notch car wash and detailing services that cater to your every need. Explore our range of services designed to keep your vehicle looking pristine.</p>
        </section>
        <section class="services">
          <h2>Our Services</h2>

          <div class="service">
            <div className='service-para'>
              <h3>Interior Cleaning</h3>
              <ul>
                <li>Thorough Vacuuming: Remove dirt and debris from seats, carpets, and floor mats.</li>
                <li>Upholstery Cleaning: Deep clean fabric or leather seats for a fresh look.</li>
                <li>Dashboard and Console: Dust and polish surfaces for a spotless finish.</li>
                <li>Window Cleaning: Streak-free cleaning for all interior windows.</li>
              </ul>
            </div>
            <div className="video1">
              <video autoPlay loop muted>
                <source src={interior} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div class="service">
            <div className='service-para'>
              <h3>Exterior Detailing</h3>
              <ul>
                <li>Hand Wash: Gentle and effective hand washing to remove dirt and grime.</li>
                <li>Wax and Polish: Enhance the shine and protect your car’s paintwork.</li>
                <li>Wheel and Tire Cleaning: Restore the look of your wheels and add tire shine.</li>
                <li>Clay Bar Treatment: Remove contaminants for a smooth surface.</li>
              </ul>
            </div>
            <div className="video1">
              <video autoPlay loop muted>
                <source src={exterior} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div class="service">
            <div className='service-para'>
              <h3>Premium Packages</h3>
              <ul>
                <li>Ultimate Detail Package: Comprehensive interior and exterior detailing for the ultimate shine.</li>
                <li>Luxury Protection Package: Long-lasting protection with premium wax and sealant applications.</li>
                <li>Showroom Finish Package: Perfect for car shows or special events, ensuring your car stands out.</li>
              </ul>
            </div>
            <div className="video1">
              <video autoPlay loop muted>
                <source src={Premium} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div class="service">
            <div className='service-para'>
              <h3>Express Services</h3>
              <ul>
                <li>Quick Wash: Fast and efficient exterior wash for those on the go.</li>
                <li>Express Interior: Speedy interior cleaning to refresh your car in minutes.</li>
                <li>Wash & Go: Combination of exterior wash and interior vacuuming for a quick clean.</li>
              </ul>
            </div>
            <div className="video1">
              <video autoPlay loop muted>
                <source src={express} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div class="service2">
            <div className='service-para2'>
              <h3>Add-On Options</h3>
              <ul>
                <li>Odor Removal: Eliminate unwanted smells with our advanced deodorizing treatments.</li>
                <li>Engine Bay Cleaning: Detailed cleaning of the engine bay to remove grease and grime.</li>
                <li>Headlight Restoration: Improve visibility and appearance with headlight polishing.</li>
                <li>Ceramic Coating: Advanced protection for your car’s paint, lasting up to several years.</li>
              </ul>
            </div>
            <div className="video2">
              <h4>For Add-On Option<br></br>
                Do Contact US</h4>
              <NavLink to={"/Home#contact-form"}><button>Contact Us</button></NavLink>
            </div>
          </div>
        </section>
        <section class="why-choose">
          <h2>Why Choose BRIGHTWASH?</h2>
          <ul>
            <li>Professional Service: Our experienced team uses top-quality products and techniques.</li>
            <li>Convenience: Easy online booking and flexible service options.</li>
            <li>Satisfaction Guaranteed: We strive for excellence in every service we provide.</li>
          </ul>
        </section>
        <section class="booking">
          <h2>Book Your Service Today!</h2>
          <p>Ready to experience the BRIGHTWASH difference? Book your service online now or contact us for more information.</p>
          <NavLink to={"/Booking#navbar1"}><a href="#" class="button">Book Now</a></NavLink>
        </section>
        
      </div>



      <footer class="footer">
        <div className='footercontact'>
          <div className='footertext'>
            <h1>BrightWash</h1>
            <h3>About Us</h3>
            <p>"BRIGHTWASH simplifies car wash bookings by providing an efficient online platform for customers and service providers. Traditional booking methods like phone calls and in-person scheduling often lead to inefficiencies and miscommunications. Our platform addresses these issues, offering a seamless, integrated system for managing appointments and customer information. Founded by a team of tech enthusiasts and car lovers, BRIGHTWASH is now a trusted, customer-centric service revolutionizing the car wash industry."</p>
          </div>
          <div className='footertext'>
            <h3>Contact Us</h3>
            <p><b>Call us:</b> +91 99459 92358<br></br>
              <b>Email :</b> contact@brightwash.com<br></br>
              <b>Address:</b> No. 345, 2nd Floor, Sri Krishna Towers, 17th Cross, HSR Layout Sector 4, Bangalore - 560102, Karnataka, India.</p>
          </div>
        </div>
        <div class="footer-container">
          <div class="footer-left">

            <ul class="footer-links">
              <li><NavLink to={"/Home#navbar1"}><a href="#">Home</a></NavLink></li>
              <li><NavLink to={"/Services#navbar1"}><a href="#">Services</a></NavLink></li>
              <li><NavLink to={"/Home#contact-form"}><a href="#">Contact</a></NavLink></li>
              <li><NavLink to={"/Aboutus#navbar1"}><a href="#">About Us</a></NavLink></li>
              <li><NavLink to={"/Booking#navbar1"}><a href="#">Booking</a></NavLink></li>
              <li><NavLink to={"/FAQs#navbar1"}><a href="#">FAQs</a></NavLink></li>
            </ul>
          </div>
        </div>
        <p className='cop'>&copy; 2023 BRIGHTWASH. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Services
