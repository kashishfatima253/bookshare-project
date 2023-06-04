import React from "react"
import { NavLink } from "react-router-dom"
import '../index.css'
import SignUp from "./SignUp"

export default function Button(props){
    return(
        
            <button className={`register-btn ${props.isLogin} ? "non-register-btn" : "register-btn"`} onClick={props.onclick}>
                {props.isLogin ? 
            <NavLink to="/signup" element={<SignUp/>} />:
                <>{props.text}</>
            }
                </button>

    )
}