import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "../App.css"
import '../CSS/Booking.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Booking() {

  const { hash } = useLocation();
  const navigateTo = useNavigate()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const [data, setdata] = useState({
    b_name: "",
    mobile_number: "",
    b_email: "",
    date_time: "",
    car_type: "",
    service_type: ""
  });

  // const [cancelEmail, setCancelEmail] = useState("");
  const [errors, setErrors] = useState({
    b_name: "",
    mobile_number: "",
    b_email: "",
    date_time: "",
    car_type: "",
    service_type: ""
  });

  function handleinput4(e) {

    const { name, value } = e.target;
    setdata({ ...data, [name]: value })
    validateInput(name, value);
  }
  function validateInput(name, value) {
    if (name === "b_name" && value.trim() === "") {
      setErrors({ ...errors, b_name: "Name is required" });
    } else if (name === "mobile_number" && (value.trim() === "" || value.length !== 10)) {
      setErrors({ ...errors, mobile_number: "Invalid mobile number" });
    } else if (name === "b_email" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      setErrors({ ...errors, b_email: "Invalid email" });
    } else if (name === "date_time" && value.trim() === "") {
      setErrors({ ...errors, date_time: "Date and time is required" });
    } else if (name === "car_type" && value.trim() === "") {
      setErrors({ ...errors, car_type: "Car type is required" });
    } else if (name === "service_type" && value.trim() === "") {
      setErrors({ ...errors, service_type: "Service type is required" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  }

  function handleCancelInput(e) {
    // setCancelEmail(e.target.value);
    const { name, value } = e.target;
    setdata({ ...data, [name]: value })
  }

  function bookinginfo(e) {
    e.preventDefault();
    console.log(data)
    // Check for errors before submitting
    if (errors.b_name || errors.mobile_number || errors.b_email || errors.date_time || errors.car_type || errors.service_type) {
      alert("Invalid. Please try again.");
      return;
  }
    axios.post("http://localhost:9000/bookinginfo", data).then(
      (res) => {
        alert(res.data)
        if (res.data === "Booking done!!"){
          const bookingInfoHTML = `
          <h2>Booking Information:</h2>
          <p><strong>Name:</strong> ${data.b_name}</p>
          <p><strong>Mobile Number:</strong> ${data.mobile_number}</p>
          <p><strong>Email:</strong> ${data.b_email}</p>
          <p><strong>Date and Time:</strong> ${data.date_time}</p>
          <p><strong>Car Type:</strong> ${data.car_type}</p>
          <p><strong>Service Type:</strong> ${data.service_type}</p>
        `;
        const bookingInfoContainer = document.getElementById('booking-info-container');
        bookingInfoContainer.innerHTML = bookingInfoHTML;
        }
        else {
          alert("Invalid \n Please try again.");
        }
      }).catch(
        (err) => {
          console.log(err)
          alert("An error occurred. Please try again later.");

        })     
}
function cancelBookings(e) {
  e.preventDefault();
  console.log(data)
  axios.post("http://localhost:9000/cancelbooking", data)
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert("An error occurred");
    });
}
  return (
    <div >
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
      <div className='bookingbg'>
        <div className='bookingbg2'>
          <form className='bookingcontainer'>
            <div className='bookingheader'>
              <h1>BRIGHTWASH <br></br>Car Wash Booking Service</h1>
            </div>
            <input type="text" id="name" name="b_name" placeholder='Name' onChange={handleinput4} required />
            {errors.b_name && <p className='error'>{errors.b_name}</p>}
            <input type="tel" id="mobile-number" name="mobile_number" placeholder='Mobile Number' pattern="[0-9]{10}" title="Please enter a 10-digit mobile number" onChange={handleinput4} required />
            {errors.mobile_number && <p className='error'>{errors.mobile_number}</p>}
            <input type="email" id="email" name="b_email" placeholder='Email' onChange={handleinput4} required />
            {errors.b_email && <p className='error'>{errors.b_email}</p>}
            <input type="datetime-local" name="date_time" id="date&time" placeholder='Date and Time' onChange={handleinput4} required />
            {errors.date_time && <p className='error'>{errors.date_time}</p>}
            <select id="car-type" name="car_type" onChange={handleinput4} required>
              <option value="car-type">Car Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="bus">Bus/Truck</option>
            </select>
            {errors.car_type && <p className='error'>{errors.car_type}</p>}
            <select id="service-type" name="service_type" onChange={handleinput4} required>
              <option value="car-type">Service Type</option>
              <option value="Interior Cleaning">Interior Cleaning (₹1,500)</option>
              <option value="Exterior Cleaning">Exterior Cleaning (₹2,500)</option>
              <option value="Express Services">Express Services (₹800)</option>
              <option value="Premium Packages">Premium Packages (₹5,000)</option>
            </select>
            {errors.service_type && <p className='error'>{errors.service_type}</p>}

            <button type='submit' onClick={bookinginfo}>Book Now</button>
          </form>
          
        </div>
        <div id="booking-info-container">
          <h3>Booking Information will be displayed here..</h3>
        </div>
      </div>
      <form className='cancelcontainer'>
            <div className='cancelheader'>
              <h2>CANCEL BOOKING</h2>
            </div>
            <input type="email" id="cancel-email" name="b_email" placeholder='Enter your Email to Cancel' onChange={handleCancelInput} required />
            <button type='submit' onClick={cancelBookings} className='canbtn'>Cancel Booking</button>
          </form>
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

export default Booking;
