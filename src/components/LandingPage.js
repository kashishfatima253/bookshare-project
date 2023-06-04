import React, { useEffect } from "react"
// import '../landing.css'

import BookCard from "./BookCard"
import Button from "./Button"
import Login from "./Login"
import '../index.css'
import { NavLink, useNavigate } from "react-router-dom"


export default function LandingPage() {
    const [login, setLogin] = React.useState(false)

    let navigate = useNavigate();
    useEffect(() => {
        localStorage.clear();
    }, [])
    const routeChange = () => {
        let path = `/signup`;
        navigate(path);
    }


    return (
        <section className="landing-page">
            <div className="hero-section">
                <div className="nav">

                    <div className="logo">
                        <img src="./images/book.png" className="logo-img" />
                        <h1 className="logo-heading">
                            BOOKSHARE
                        </h1>
                    </div>



                    <nav className="nav-bar">
                        <ul className="center-nav">
                            <li className="link-wrapper"> <NavLink to="/" className={`nav-link hover-3 link  ${login ? "disabled-link" : "nav-link hover-3 link"}`}>About</NavLink> </li>
                            <li className="link-wrapper"> <NavLink to="/login" className={`nav-link hover-3 link  ${login ? "disabled-link" : "nav-link hover-3 link"}`}>Books</NavLink> </li>
                            <li className="link-wrapper"> <NavLink to="/login" className={`nav-link hover-3 link  ${login ? "disabled-link" : "nav-link hover-3 link"}`}>Login</NavLink> </li>
                            <li> <Button text="Register" isLogin={login} onclick={routeChange} /> </li>
                        </ul>
                    </nav>
                </div>

                <div className="hero-text">
                    <h2>
                        Borrow. Read. Share.
                    </h2>

                    <p>
                        From textbooks to novels, BookShare strives to
                        create a one-stop where you can share books with
                        anyone, anywhere, anytime.
                    </p>
                </div>


            </div>

            {/* <div className="about-section grid-container">
            <div className="grid-item">
            <img src="./images/book-shop.svg" className="about-img" />
            </div>
            

            <div className="about-text grid-item">
                <h2>About Us</h2>
                <p className="about-para">Do you ever find yourself stuck in a mess of books? From course books that 
                    you read in grade 10 and 11 to story books that you have literally memorized by 
                    now. BookShare introduces a platform that can host your books which you would
                    like to give away. Instead of selling the books off to some book market which leaves
                    the books unattended for days, a reader can instead share their book online with other 
                    readers who are perhaps on the lookout for that specific book.
                </p>
                
            </div>
        </div>

        
            <div className="slider-heading">
                <h1>
                    Explore Newly Shared Books
                </h1>
            </div>

        <div className="books-div">
        <section className="books-list">
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                        <BookCard/>
                    </section>
        </div>
            */}



            <div className="footer-section">
                <p>
                    © BookShare 2022
                </p>

            </div>
            {/* <Login trigger={login} setTrigger={setLogin}  className="login-landing"/> */}
        </section>
    )
}