import React, { useEffect, useState } from "react"
import '../../books.css'

import BookFeedCard from "./BookFeedCard"
import bookdetails from "./bookdetails"
import axios from 'axios';



export default function Feed() {
    const [resData, getResData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = `Bearer ${JSON.parse(localStorage.getItem('user')).data['Token']}`;
            console.log(token);
            const result = await axios.get(
                'http://localhost:5000/api/v1/books/getbook', {
                    headers: { 'Authorization': token }
                }
            );

            getResData(result.data['data']);
            console.log(resData)
            // console.log(JSON.parse(localStorage.getItem('user')).data['Token'])
        };

        fetchData();
    }, []);
    const bookcard = resData.map(book => {
        return (
            <BookFeedCard
                key={book._id}
                {...book}
            />
        )
    })
    return (
        <div className="book-display">
            {bookcard}

        </div>
    )
}