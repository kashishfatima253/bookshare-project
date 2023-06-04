import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import '../../books.css'
import '../../sidenav.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Feed from "./Feed";
import CatList from "./CatList";



export default function AvailableBooks(){

    const [inactive, setInactive] = React.useState(true);
    

    return(

        
        <div>
            
            <div className="home-page">
                <div>
                
            <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src="./images/book.png" className="book-img"/>
                    <div className="logo-heading">
                        BOOKSHARE
                    </div>
                </div>
                

                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                
                
                <i className = {`${inactive ? "bi bi-arrow-right-square-fill" : "bi bi-arrow-left-square-fill"}`}></i>
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
                <li><NavLink to="/books/" className={`nav-link hover-3 link ${isActive => (isActive ? "active" : "inactive")} `}>Available</NavLink></li>
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

                <nav className="second-nav">
                    <ul>
                        {/* <li> <h2><NavLink className={`nav-link hover-3 link ${isActive => (isActive ? "active" : "inactive")} `}>For You</NavLink></h2> </li>
                        <li> <h2><NavLink  className={`nav-link hover-3 link ${isActive => (isActive ? "active" : "inactive")} `}>New</NavLink></h2></li>
                        <li><h2><NavLink  className={`nav-link hover-3 link ${isActive => (isActive ? "active" : "inactive")} `}>Popular Reads</NavLink></h2></li> */}
                        <li><h2>For You</h2></li>
                        <li><h2>New</h2></li>
                        <li><h2>Popular</h2></li>

                    </ul>
                </nav>
                <hr className="nav-hr"/>

               <Feed/>

                </div>

                

            </div>

            <div className="book-footer">

            </div>
        </div>
       

    )

}