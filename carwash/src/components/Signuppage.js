import React, { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "../App.css"
import '../CSS/LoginSignup.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import back1 from "../assets/back1.mp4"


function Signuppage() {

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
        username: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: ""
    });
    function handleinput(e) {

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
        } else if (name === "email") {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
                setErrors({...errors, email: "Invalid email address" });
            } else {
                setErrors({...errors, email: "" });
            }
        } else if (name === "password") {
            if (value.length !== 8) {
                setErrors({ ...errors, password: "Password must be exactly 8 characters" });
            } else {
                setErrors({ ...errors, password: "" });
            }
        }
    }

    function signupnow(e) {
        e.preventDefault();
        console.log(data)
        // Check for errors before submitting
        if (errors.username || errors.email || errors.password) {
            alert("Invalid. Please try again.");
            return;
        }
        axios.post("http://localhost:9000/Signup", data).then(
            (res) => {
                if (res.data === "Account created successfully!!") {
                    alert(res.data)
                    navigateTo("/")
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
    return (
        <div >

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
                        <div class="container-reg">

                            <h2>REGISTER</h2>
                            <label for="">Name</label>
                            <input type="text" placeholder="Username" name="username" onChange={handleinput} required />
                            {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
                            <label for="">Email</label>
                            <input type="email" placeholder="Email" name="email" onChange={handleinput} required />
                            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                            <label for="">Password</label>
                            <input type="password" placeholder="create password" name="password" onChange={handleinput} required />
                            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
                            <button class="btn-login" type="submit" value="Sign Up" onClick={signupnow}>Sign Up</button>
                            <p class="signin">
                                already have account <a href="./login.html" class="link"><NavLink to={"/"}>Login</NavLink></a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signuppage;