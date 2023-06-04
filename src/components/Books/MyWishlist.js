import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import '../../books.css'
import '../../sidenav.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Feed from "./Feed";
import CatList from "./CatList";
import Button from "../Button";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';



export default function MyWishList(){

    const [inactive, setInactive] = React.useState(true);
    console.log(JSON.parse(localStorage.getItem('user')).data['User'].name);
    

    return(
        <>
        <div className="home-page">
                <div>
                
            <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src=  {`./images/book.png`} className="book-img"/>
                    <div className="logo-heading">
                        BOOKSHARE
                    </div>
                </div>
                

                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                
                
                <i class = {`${inactive ? "bi bi-arrow-right-square-fill" : "bi bi-arrow-left-square-fill"}`}></i>
                </div>

                


            </div>

            <div className="divider"></div>
            <form className="search-form">
                    <input type="search" placeholder="Search here ..."/>
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
                </div> : <CatList/>
            }
            

                </div>
               </div>

                <div className = {`item  ${inactive ? "item-slider" : "book-feed"}`}>
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

                <h1 className="wishlist-h1">Wish List</h1>
                {/* <hr className="nav-hr"/> */}
                <div className="books-list">

                <div className="book-list-i">
                    <div className="book-list-item">
                    <img src="https://th.bing.com/th/id/OIP.4zygV7JXARRma1FeXBTxtgHaL0?pid=ImgDet&rs=1" className="book-feed-img"/>
                    <div className="book-list-item-det">
                    <h3>The Wonder</h3>
                    <h3>Emma Donoghue</h3>
                   
                    </div>
                    </div>
                    <div className="wishlist-btn"> 

                    <Button text="Remove from Wishlist"/>
                    </div>
                    
                </div>

                <div className="book-list-i">
                    <div className="book-list-item">
                    <img src="https://th.bing.com/th/id/R.4ae85e17c737981da34ca9185f867118?rik=8USwi0dF7NQrNA&riu=http%3a%2f%2fbloximages.chicago2.vip.townnews.com%2femissourian.com%2fcontent%2ftncms%2fassets%2fv3%2feditorial%2f3%2f16%2f316e97a8-8116-11e6-94b6-2384465bf5a6%2f57e45f23ec984.image.jpg&ehk=%2bUunUdMRWDZnf%2bzdF8qFiiR%2fJ0pZPam%2fUI960sduk%2fg%3d&risl=&pid=ImgRaw&r=0" className="book-feed-img"/>
                    <div className="book-list-item-det">
                    <h3>The Wonder</h3>
                    <h3>Emma Donoghue</h3>
                   
                    </div>
                    </div>
                    <div className="wishlist-btn"> 

                    <Button text="Remove from Wishlist"/>
                    </div>
                    
                </div>

                
                
                </div>

                </div>

                

            </div>
        </>
    )
}