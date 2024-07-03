import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../App.css';
import '../CSS/Aboutus.css';

import abimg1 from '../assets/hero2.png'
import vd1 from '../assets/back2.mp4'
import post1 from '../assets/image3.jpg'
import post2 from '../assets/image4.jpg'
import post3 from '../assets/image5.jpg'
import per1 from '../assets/person1.jpg'
import per2 from '../assets/person2.jpg'
import per3 from '../assets/person3.jpg'

function Aboutus() {
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
        <div className='ab-body'>
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

            <div className='abt-img'>
                <img src={abimg1} alt="aboutus" />
                <h1>ABOUT US</h1>
            </div>
            <div className='comp'>
                <div>
                    <h2>About Us</h2>
                    <p>
                        We are dedicated to providing a streamlined, efficient way for car owners to book car wash services online. Our platform not only simplifies the booking process for customers but also provides car wash service providers with an effective tool for managing appointments and customer information.
                    </p>
                    <p>
                        In the modern era, the convenience of online services has become paramount. Many car wash businesses still rely on traditional methods of appointment booking, such as phone calls or in-person scheduling. These methods can be inefficient, leading to miscommunications, double bookings, and a lack of detailed service information for customers. The absence of an integrated system makes it challenging for businesses to manage customer information and service schedules effectively.
                    </p>
                    <p>
                        Recognizing this gap, BRIGHTWASH was founded to revolutionize the car wash industry by introducing a comprehensive online platform. Our journey began with a small team of tech enthusiasts and car lovers who envisioned a future where booking a car wash would be as simple as a few clicks. Today, we have grown into a trusted service provider, known for our reliability and customer-centric approach.
                    </p>
                </div>
                <div>
                    <video autoPlay loop muted>
                        <source src={vd1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className='mission'>
                <h2>Our Mission</h2>
                <div>
                    <img src={post1}></img>
                    <img src={post2}></img>
                    <img src={post3}></img>
                </div>
                <p>
                    BRIGHTWASH is designed to cater to the need for convenience by offering a streamlined, efficient way for car owners to book car wash services online. By leveraging the latest web technologies, we deliver a secure, responsive, and interactive user experience.
                </p>
                <p>
                    Our mission is to enhance the car wash experience for both customers and service providers. We strive to make the booking process as smooth as possible, ensuring that customers can easily select their preferred wash package and schedule appointments at their convenience. For service providers, we offer tools to manage appointments, customer data, and service details efficiently, minimizing the chances of errors and maximizing customer satisfaction.
                </p>
            </div>
            <div className='values'>
                <h2>Our Values</h2>
                <ul>
                    <li>Innovation: Constantly seeking new ways to improve our service.</li>
                    <li>Efficiency: Making the booking process as quick and easy as possible.</li>
                    <li>Customer Satisfaction: Ensuring our customers are happy with our service.</li>
                </ul>
                <p>
                    At BRIGHTWASH, we believe in continuous improvement and staying ahead of industry trends. Our commitment to innovation drives us to incorporate the latest technological advancements into our platform. We prioritize efficiency in all aspects of our operations, from the user interface to backend processes, to provide a seamless experience for our users.
                </p>

            </div>
            <section id="team" class="section-team">
                <h2>Meet Our Team</h2>
                <div class="team-member">
                    <img src={per1} alt="John Doe" />
                    <h3>Eva</h3>
                    <p>Experienced Technician</p>
                    <p>Eva is a skilled technician with over 10 years of experience in the car wash industry. Her expertise ensures that every car gets the best care possible.</p>
                </div>
                <div class="team-member">
                    <img src={per2} alt="Jane Smith" />
                    <h3>Jane Smith</h3>
                    <p>Customer Service Representative</p>
                    <p>Jane has a passion for helping customers and ensuring they have a positive experience. She is dedicated to addressing any questions or concerns.</p>
                </div>
                <div class="team-member">
                    <img src={per3} alt="Alice Johnson" />
                    <h3>Alice Johnson</h3>
                    <p>Technology Expert</p>
                    <p>Alice is our tech guru, constantly innovating to keep our platform running smoothly and efficiently. Her work behind the scenes makes our service possible.</p>
                </div>
            </section>




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

export default Aboutus
