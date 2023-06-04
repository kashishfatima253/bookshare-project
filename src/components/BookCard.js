import React from "react"

export default function BookCard(){
    return(
        <div className="book-card first-pc">
                      
            <img src="./images/book1.jpg" className="card-pic" />

            <div className="book-text">
                {/* <img className="star" src={star}/> */}
                
                <p className="book-title"><strong>Obstacle Is The Way</strong></p>
                <p className="book-author">Ryan Holiday</p>

            </div>

        </div>
    )
}