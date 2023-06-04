import React from "react"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from "./components/LandingPage"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import BookFeed from "./components/Books/BookFeed"

export default function MainRoutes() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/books/*" element={<BookFeed/>}/>

            </Routes>

        </Router>


    )
}