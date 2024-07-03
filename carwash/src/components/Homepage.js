import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../App.css';
import '../CSS/Home.css';
import axios from "axios";

import homev from "../assets/home video.mp4"
import eqp from "../assets/section_bg02.png"
import icon from "../assets/washicon.png"
import cm1 from "../assets/comment_1.png"
import cm2 from "../assets/comment_2.png"
import cm3 from "../assets/comment_3.png"



function Homepage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


  const [data, setdata] = useState({
    c_name: "",
    c_email: "",
    c_message: ""
  });

  const [errors, setErrors] = useState({
    c_name: "",
    c_email: "",
    c_message: ""
  });

  function handleinput3(e) {

    const { name, value } = e.target;
    setdata({ ...data, [name]: value })
    validateInput(name, value);
  }
  function validateInput(name, value) {
    if (name === 'c_name' && value.trim() === "") {
      setErrors({ ...errors, c_name: "Name is required" });
    } else if (name === 'c_email' && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      setErrors({ ...errors, c_email: "Invalid email address" });
    } else if (name === 'c_message' && value.trim() === "") {
      setErrors({ ...errors, c_message: "Message is required" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  }

  function contactinfo(e) {
    e.preventDefault();
    console.log(data)
    if (Object.values(errors).every(error => error === "")) {
      axios.post("http://localhost:9000/contactinfo", data).then(
        (res) => {
          alert(res.data)
        }).catch(
          (err) => {
            console.log(err)
          }
        )
    } else {
      alert("Please fill in all fields correctly");
    }
}

  return (
    <div className='h-body'>
      
      <header>
        <nav>
          <div class="nav-content" id='navbar1'>
            <div class="logo">
              <a ><NavLink to={"/Home#navbar1"}>BrightWash</NavLink></a>
            </div>
            <ul class="nav-links">
              <li><NavLink to={"/Home#navbar1"}><a >Home</a></NavLink></li>
              <li><NavLink to={"/Services#navbar1"}><a >Services</a></NavLink></li>
              <li><NavLink to={"/Home#contact-form"}><a >Contact</a></NavLink></li>
              <li><NavLink to={"/Aboutus#navbar1"}><a >About Us</a></NavLink></li>
              <li><NavLink to={"/Booking#navbar1"}><a >Booking</a></NavLink></li>
              <li><NavLink to={"/FAQs#navbar1"}><a >FAQs</a></NavLink></li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="homebody">

        <div className="video-container">
          <video autoPlay loop muted>
            <source src={homev} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 class="maintitle">BRIGHTWASH</h1>
      </div>



      <div className='equip'>
        <img src={eqp}></img>
        <div className='latestequip'>
          <h2>We have the latest equipment</h2>
          <p>At our state-of-the-art car wash, we use the latest equipment to ensure your
            vehicle gets the best care. Our advanced technology includes high-pressure water
            jets, precision brushes, and eco-friendly cleaning agents to remove dirt and
            protect your car's finish. With cutting-edge drying systems and automated detailing
            tools, we guarantee a thorough, efficient cleaning that leaves your car spotless and
            shining like new. Visit us today for car wash services that exceed your expectations.</p>
        </div>
      </div>
      <div class="price-list">
        <h1>We offer best services <br></br>to our customer</h1>
        <div class="card">
          <img src={icon}></img>
          <h2>Exterior Cleaning</h2>
          <p>Starting at<br></br><span>₹2,500</span></p>
          Wash and dry exterior
          Remove dirt and grime
          Clean wheels and tires
          Use of eco-friendly cleaning products
          Gentle cleaning to avoid scratches
          Exterior trim and moldings cleaned
          Tires dressed to a high shine
          <button><NavLink to={"/Services#navbar1"}>Learn more.</NavLink></button>
        </div>
        <div class="card">
          <img src={icon}></img>
          <h2>Premium Packages</h2>
          <p>Starting at<br></br><span>₹5,000</span></p>
          Exterior cleaning
          Interior vacuuming and wiping down
          Glass treatment
          Tire dressing
          Leather conditioning and protection
          Carpet and upholstery stain removal
          Odor removal and deodorizing
          Headlight restoration
          Paint correction and protection
          <button><NavLink to={"/Services#navbar1"}>Learn more.</NavLink></button>
        </div>
        <div class="card">
          <img src={icon}></img>
          <h2>Express Services</h2>
          <p>Starting at<br></br><span>₹800</span></p>
          Quick exterior wash
          Interior vacuuming
          Window cleaning
          Tire shine
          Exterior trim cleaning
          Quick interior wipe down
          Glass treatment
          Headlight cleaning
          Brake dust removal
          <button><NavLink to={"/Services#navbar1"}>Learn more.</NavLink></button>
        </div>
        <div class="card">
          <img src={icon}></img>
          <h2>Interior Cleaning</h2>
          <p>Starting at<br></br><span>₹1,500</span></p>
          Vacuuming and wiping down interior
          Cleaning of upholstery and carpets
          Glass treatment
          Leather conditioning and protection
          Stain removal and odor elimination
          Interior trim and molding cleaning
          Carpet and upholstery shampooing
          Fabric protection and stain resistance
          Sanitizing and disinfecting
          <button><NavLink to={"/Services#navbar1"}>Learn more.</NavLink></button>
        </div>
        <div class="card2" >
          <NavLink to={"/Booking#navbar1"}><button>BOOK NOW</button></NavLink>
        </div>
      </div>


      <div className="testimonials">
        <h1>What Our Customers Say</h1>
        <div className="testimonial-container">
          <div className="testimonial">
            <img src={cm1} alt="Customer Testimonial" />
            <p>"I've been using BrightWash for months now and I'm always impressed with the quality of their service. My car looks brand new every time!"</p>
            <span>- John Doe</span>
          </div>
          <div className="testimonial">
            <img src={cm2} alt="Customer Testimonial" />
            <p>"I was blown away by the attention to detail and the friendly staff at BrightWash. I'll never go anywhere else for my car wash needs!"</p>
            <span>- Jane Smith</span>
          </div>
          <div className="testimonial">
            <img src={cm3} alt="Customer Testimonial" />
            <p>"BrightWash is the best car wash in town, hands down. Their prices are unbeatable and the service is top-notch."</p>
            <span>- Bob Johnson</span>
          </div>
        </div>
      </div>
      <div className='formdiv' id='contact-form'>
        <div className="contact-form" >
          <h1>Get in Touch</h1>
          <form >
            <label>
              Name:</label><br></br>
            <input type="text" name='c_name' onChange={handleinput3} required />
            {errors.c_name && <div style={{ color: 'red' }}>{errors.c_name}</div>}

            <br />
            <label>
              Email:</label><br></br>
            <input type="email" name='c_email' onChange={handleinput3} required />
            {errors.c_email && <div style={{ color: 'red' }}>{errors.c_email}</div>}

            <br />
            <label>
              Message: </label><br></br>
            <textarea name='c_message' onChange={handleinput3} required />
            {errors.c_message && <div style={{ color: 'red' }}>{errors.c_message}</div>}

            <br /><center>
              <button type="submit" onClick={contactinfo}>Send Message</button>
            </center>

          </form>
        </div>
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
              <li><NavLink to={"/Home#navbar1"}><a >Home</a></NavLink></li>
              <li><NavLink to={"/Services#navbar1"}><a >Services</a></NavLink></li>
              <li><NavLink to={"/Home#contact-form"}><a >Contact</a></NavLink></li>
              <li><NavLink to={"/Aboutus#navbar1"}><a >About Us</a></NavLink></li>
              <li><NavLink to={"/Booking#navbar1"}><a >Booking</a></NavLink></li>
              <li><NavLink to={"/FAQs#navbar1"}><a>FAQs</a></NavLink></li>
            </ul>
          </div>
        </div>
        <p className='cop'>&copy; 2023 BRIGHTWASH. All rights reserved.</p>
      </footer>

      
    </div>
  );
}

export default Homepage;