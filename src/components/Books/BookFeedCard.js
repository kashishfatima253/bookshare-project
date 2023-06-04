import React from "react"
import Button from "../Button"
import '../../books.css'
import { NavLink, useNavigate } from "react-router-dom"



export default function BookFeedCard(props) {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/books/bookprofile/${props._id}`;
        navigate(path);
    }

    return (
        <div className="book-feed-card" onClick={routeChange}>
            <img src={props.image} className="book-feed-img" />
            <div className="book-details">
                <h3 className="book-feed-name">{props.title}</h3>
                <h4 className="book-feed-author">{props.author}</h4>
                <p className="book-feed-cat">Category : {props.category.join(' ')} </p>

                <p id="book-points">{props.points} Points</p>
                <p className="book-shared-by">Shared By: {props.SharerName}</p>
                {/* <p className="book-avail">{props.isAvailable? "Available" : "Not Available"}</p> */}

                <div className="borrow-btn">
                    <Button text="Borrow" />
                    {
                        props.isAvailable ? <p></p> : <Button text="Remove from Wishlist" />
                    }
                </div>

            </div>


        </div>
    )
}