import React, { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "../App.css"
import '../CSS/LoginSignup.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import back1 from "../assets/back1.mp4"


function Loginpage() {

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);



    const navigateTo = useNavigate()

    const [data, setdata] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });

    function handleinput2(e) {

        const { name, value } = e.target;
        setdata({ ...data, [name]: value })
        // Validate input
        if (name === "username") {
            if (value.length < 3) {
                setErrors({ ...errors, username: "Username must be at least 3 characters" });
            } else if (value.length > 10) {
                setErrors({ ...errors, username: "Username must be less than 10 characters" });
            } else {
                setErrors({ ...errors, username: "" });
            }
        } else if (name === "password") {
            if (value.length !== 8) {
                setErrors({ ...errors, password: "Password must be exactly 8 characters" });
            } else {
                setErrors({ ...errors, password: "" });
            }
        }
    }

    function logincheck(e) {
        e.preventDefault();
        console.log(data)

        // Check for errors before submitting
        if (errors.username || errors.password) {
            alert("Invalid username or password. Please try again.");
            return;
        }
        axios.post("http://localhost:9000/Login", data).then(
            (res) => {

                if (res.data === "welcome") {
                    // alert(res.data)
                    navigateTo("/Home#navbar1")
                } else {
                    alert("Invalid username or password. \n Please try again.");
                }
            }).catch(
                (err) => {
                    console.log(err)
                    alert("An error occurred. Please try again later.");
                })
    }
    return (
        <div  >

            <div className="loginbody">
                <div className="video-container2">
                    <video autoPlay loop muted>
                        <source src={back1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h1>BRIGHTWASH</h1>
                <div class="logbg">
                    <form className="dataform">
                        <div class="container">

                            <h2>LOGIN</h2>
                            <label for="">Username</label>
                            <input type="text" placeholder="Username" name="username" onChange={handleinput2} required />
                            {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
                            <label for="">Password</label>
                            <input type="password" placeholder="password" name="password" onChange={handleinput2} required />
                            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
                            <button class="btn-login" type="" value="Sign In" onClick={logincheck} >Login</button>
                            <p class="signup">
                                don't have account <a href="./register.html" class="link"><NavLink to={"/Signup"}>Register</NavLink></a>
                            </p>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}
export default Loginpage;