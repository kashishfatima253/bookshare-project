import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import '../../books.css'
import '../../sidenav.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Feed from "./Feed";
import CatList from "./CatList";
import Button from "../Button";
import axios from "axios";


export default function BookProfile() {
    const [inactive, setInactive] = React.useState(true);

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/books`;
        navigate(path);
    }

    const [resData, getResData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const token = `Bearer ${JSON.parse(localStorage.getItem('user')).data['Token']}`;
            console.log(token);
            const path = window.location.pathname
            const id = path.split('/')[3]
            console.log(id)
            const result = await axios(
                'http://localhost:5000/api/v1/books/getbook', {
                headers: { 'Authorization': token }
            }
            );

            const Data = result.data['data'];

            getResData(Data.find(x => x._id === id))
            console.log("Res data", resData)
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="home-page">
                <div>

                    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
                        <div className="top-section">
                            <div className="logo">
                                <img src="../images/book.png" className="book-img" />
                                <div className="logo-heading">
                                    BOOKSHARE
                                </div>
                            </div>


                            <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">


                                <i class={`${inactive ? "bi bi-arrow-right-square-fill" : "bi bi-arrow-left-square-fill"}`}></i>
                            </div>




                        </div>

                        <div className="divider"></div>
                        <form className="search-form">
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
                            <li><button className="user-button"><i class="bi bi-person-circle"></i></button></li>

                        </ul>

                    </nav>

                    <div className="book-profile">
                        <button className="back-button" onClick={routeChange} ><i class="bi bi-arrow-left"></i></button>
                        <img  src={resData.image} className="book-feed-img" />
                        <div className="book-dets">
                            <h1>{resData.title}</h1>
                            <hr />
                            <h2>{resData.author}</h2>
                            <p><strong>Categories:</strong>{resData.category} </p>
                            <p><strong>Points:</strong> {resData.points}</p>
                            <p><strong>Shared by:</strong> {resData.SharerName}</p>
                            <p><strong>Location:</strong> {resData.SharerArea}</p>
                            <div className="borrow-btn">
                                <Button text="Borrow" />
                            </div>

                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}