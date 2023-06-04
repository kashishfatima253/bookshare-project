import React, { useState } from "react";
import { Navigate, NavLink,useNavigate } from "react-router-dom"
import '../../books.css'
import '../../sidenav.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Feed from "./Feed";
import CatList from "./CatList";
import Button from "../Button";
import axios from 'axios';


export default function Share() {
    const [inactive, setInactive] = React.useState(true);

    const [title, set_title] = useState('');
    const [author, set_author] = useState('');
    const [genre, set_genre] = useState('');
    const [points, set_points] = useState(1);
    const [price, set_price] = useState(0);
    const [name, set_name] = useState('');
    const [city, set_city] = useState('');
    const [area, set_area] = useState('');
    const [phone, set_phone] = useState('');
    const [isAvailable, set_isAvailable] = useState(true);
    const [imageUrl, set_imageUrl] = useState('');
    // console.log(JSON.parse(localStorage.getItem('user')).data['User']._id)

    let navigate = useNavigate();
    const handleSubmit = async (event) => {

        event.preventDefault();

        const data = {
            title: title,
            author: author,
            points: points * 1,
            price: price * 1,
            category: genre,
            image: '',
            isAvailable: true,
            SharerName: name,
            SharerCity: city,
            SharerArea: area,
            SharerPhone: phone
        }
        const book = await axios.post('http://localhost:5000/api/v1/books/addbook', {
            title,
            author,
            points,
            price,
            imageUrl,
            isAvailable,
            genre,
            name,
            city,
            area,
            phone

        });
        const id = JSON.parse(localStorage.getItem('user')).data['User']._id;
        const bookId = book.data['data']._id;
        axios.post('http://localhost:5000/api/v1/user/updateUser',{
            id,
            bookId
        });
        navigate('/books');
    }
    return (
        <div className="book-share">
            <div className="home-page">
                <div>

                    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
                        <div className="top-section">
                            <div className="logo">
                                <img src="./images/book.png" className="book-img" />
                                <div className="logo-heading">
                                    BOOKSHARE
                                </div>
                            </div>


                            <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">


                                <i className={`${inactive ? "bi bi-arrow-right-square-fill" : "bi bi-arrow-left-square-fill"}`}></i>
                            </div>




                        </div>

                        <div className="divider"></div>
                        <form>
                            <input type="search" placeholder="Search here ..." />
                            <i className="fa fa-search"></i>
                        </form>


                        {
                            inactive ? <div className="category-column">
                                <h2>C</h2>
                                <h2>A</h2>
                                <h2>T</h2>
                                <h2>E</h2>
                                <h2>G</h2>
                                <h2>O</h2>
                                <h2>R</h2>
                                <h2>I</h2>
                                <h2>E</h2>
                                <h2>S</h2>
                            </div> : <CatList />
                        }


                    </div>
                </div>

                <div className={`item  ${inactive ? "item-slider" : "book-feed"}`}>
                    <nav className="book-nav">

                        <div className="left-nav-div">
                            <ul className="left-nav-elem">
                                <li><NavLink to="/books" className={`nav-link hover-3 link ${isActive => (isActive ? "active" : "inactive")} `}>Available</NavLink></li>
                                <li><NavLink to="/books/mywishlist" className={`nav-link hover-3 link ${isActive => (isActive ? "active" : "inactive")} `}>Wishlist</NavLink></li>
                                <li><NavLink to="/books/mybooks" className={`nav-link hover-3 link ${isActive => (isActive ? "active" : "inactive")} `}>My Books</NavLink></li>
                                <li><NavLink to="/books/share" className={`nav-link hover-3 link ${isActive => (isActive ? "active" : "inactive")} `}>Share</NavLink></li>




                            </ul>

                        </div>

                        <ul className="right-nav-elem">
                            {/* <li><a></a></li>
                    <li><a></a></li> */}
                            <li>Hello, {JSON.parse(localStorage.getItem('user')).data['User'].name}</li>
                            <li><button className="user-button"><i className="bi bi-person-circle"></i></button></li>

                        </ul>

                    </nav>

                    <div className={`${inactive ? "inactive-share-form" : "inactive-share-form"}`}>
                        <div>
                            <h1>Book Details</h1>
                            {/* <input type="image" placeholder="Upload a Picture"/> */}
                        </div>
                        {/* {`item  ${inactive ? "item-slider" : "book-feed"}`} */}

                        <form className="share-form">
                            <input type="text" placeholder="Book Title" onChange={(e) => set_title(e.target.value)} />
                            <input type="text" placeholder="Book Author" onChange={(e) => set_author(e.target.value)} />
                            <input type="text" placeholder="Category/Genre" onChange={(e) => set_genre(e.target.value)} />
                            <input type="text" placeholder="Image Url" onChange={(e) => set_imageUrl(e.target.value)} />
                            <input type="text" placeholder="Points" onChange={(e) => set_points(e.target.value)} />
                            <input type="text" placeholder="Price" onChange={(e) => set_price(e.target.value)} />

                        </form>


                        <div>
                            <h1>Sharer Details</h1>
                            {/* <input type="image" placeholder="Upload a Picture"/> */}
                        </div>


                        <form className="share-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" onChange={(e) => set_name(e.target.value)} />
                            <input type="text" placeholder="City" onChange={(e) => set_city(e.target.value)} />
                            <input type="text" placeholder="Area of Residence" onChange={(e) => set_area(e.target.value)} />
                            <input type="text" placeholder="Phone Number" onChange={(e) => set_phone(e.target.value)} />
                            <div className="share-button">
                                <Button onClick={handleSubmit} text="Share" />
                            </div>
                        </form>



                    </div>
                </div>








            </div>
        </div>
    )
}