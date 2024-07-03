import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../App.css';
import '../CSS/FAQs.css';

function FAQs() {
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
        <div className='faq-body'>
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

            <div class="faq-container">
                <h1>BRIGHTWASH FAQs</h1>

                <div class="faq-section">
                    <h2>For Customers</h2>
                    <details>
                        <summary>What is BRIGHTWASH?</summary>
                        <p>BRIGHTWASH is an online platform designed to simplify the process of booking car wash services. It allows car owners to easily schedule and manage their car wash appointments through a secure, responsive, and interactive website.</p>
                    </details>
                    <details>
                        <summary>How do I book a car wash service on BRIGHTWASH?</summary>
                        <p>You can book a car wash service by visiting our website, selecting your preferred car wash provider, choosing a suitable date and time, and confirming your appointment. The process is quick and straightforward.</p>
                    </details>
                    <details>
                        <summary>Is my personal information secure on BRIGHTWASH?</summary>
                        <p>Absolutely. We use the latest web technologies to ensure your personal information is protected. Our platform is designed with robust security measures to keep your data safe.</p>
                    </details>
                    <details>
                        <summary>What if I have a specific request for my car wash?</summary>
                        <p>During the booking process, you can add any special requests or notes for your car wash provider. This ensures that your specific needs are communicated clearly and accurately.</p>
                    </details>
                </div>

                <div class="faq-section">
                    <h2>For Car Wash Service Providers</h2>
                    <details>
                        <summary>How can BRIGHTWASH benefit my car wash business?</summary>
                        <p>BRIGHTWASH offers an efficient tool for managing appointments and customer information. It helps reduce miscommunications, double bookings, and provides a detailed view of your service schedules, making your operations more streamlined and effective.</p>
                    </details>
                    <details>
                        <summary>How do I sign up as a service provider on BRIGHTWASH?</summary>
                        <p>To sign up as a service provider, visit our website and register your business. Once registered, you can set up your profile, list your services, and start accepting bookings from customers.</p>
                    </details>
                    <details>
                        <summary>Can I manage my appointments and customer information through BRIGHTWASH?</summary>
                        <p>Yes, BRIGHTWASH provides a comprehensive management system where you can view and manage all your appointments and customer details. This integrated system helps you keep track of your schedule and customer preferences.</p>
                    </details>
                    <details>
                        <summary>Is there support available if I encounter any issues?</summary>
                        <p>Yes, we offer dedicated support for all our service providers. If you encounter any issues or have questions, you can contact our support team for assistance.</p>
                    </details>
                </div>

                <div class="faq-section">
                    <h2>General</h2>
                    <details>
                        <summary>What makes BRIGHTWASH different from traditional booking methods?</summary>
                        <p>BRIGHTWASH offers a streamlined and efficient online booking process, reducing the inefficiencies of traditional methods like phone calls or in-person scheduling. It minimizes miscommunications and double bookings, providing detailed service information and a better overall experience.</p>
                    </details>
                    <details>
                        <summary>Is there a cost to use BRIGHTWASH?</summary>
                        <p>Signing up and browsing the platform is free for customers. Service providers can check our website for any applicable subscription or transaction fees.</p>
                    </details>
                    <details>
                        <summary>How do I know if a car wash service is reputable?</summary>
                        <p>BRIGHTWASH allows customers to leave reviews and ratings for service providers. You can check these reviews and ratings to gauge the quality and reliability of a car wash service before booking.</p>
                    </details>
                    <details>
                        <summary>Can I book multiple cars for washing at the same time?</summary>
                        <p>Yes, you can book services for multiple cars in a single appointment. Just specify the number of cars and their details during the booking process.</p>
                    </details>
                    <details>
                        <summary>What if I have additional questions not covered here?</summary>
                        <p>If you have any additional questions, please feel free to contact our customer support team. We're here to help!</p>
                    </details>
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

export default FAQs
