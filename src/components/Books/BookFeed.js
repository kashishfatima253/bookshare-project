import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AvailableBooks from "./AvailableBooks"
import MyWishList from "./MyWishlist"
import MyBooks from "./MyBooks"
import Share from "./Share"
import BookProfile from "./BookProfile"

export default function BookFeed() {
    return (

        < Routes >
            <Route path="/" element={<AvailableBooks />} />
            <Route path="/mywishlist" element={<MyWishList />} />
            <Route path="/mybooks" element={<MyBooks />} />
            <Route path="/share" element={<Share />} />
            <Route path="/bookprofile/:id" element={<BookProfile/>} />
        </Routes >



    )
}