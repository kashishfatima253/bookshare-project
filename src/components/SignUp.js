import React, { useState, useEffect } from "react"
import Button from "./Button"
import axios from "axios";
import { Navigate,useNavigate } from "react-router-dom";

export default function SignUp() {
    const [name, setname] = useState('');
    const [city, setcity] = useState('');
    const [area, setarea] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [ConfirmPassword, setconfirmpassword] = useState('');
    let navigate = useNavigate();
    useEffect(()=>{
        localStorage.clear();
    },[])

    const HandleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('http://localhost:5000/api/v1/user/signup',{
            name,
            city,
            area,
            email,
            password,
            ConfirmPassword
        });
        console.log(response);
        navigate('/login');
    }
    return (
        <div className="login-page">
            <img src="./images/reading.svg" className="login-img" />
            <form className="login-form" onSubmit={HandleSubmit}>
                <img src="./images/book.png" className="login-logo" />
                <h1>Sign Up</h1>
                <input type="text" placeholder="Full Name" onChange={(e) => setname(e.target.value)} />
                <input type="text" placeholder="City" onChange={(e) => setcity(e.target.value)} />
                <input type="text" placeholder="Area of Residence" onChange={(e) => setarea(e.target.value)} />
                <input type="email" placeholder="email" onChange={(e) => setemail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                <input type="password" placeholder="Re-enter Password" onChange={(e) => setconfirmpassword(e.target.value)} />
                <div className="login-button">
                    <Button text="Sign Up" onClick={HandleSubmit} />
                </div>

            </form>


        </div>
    )
}