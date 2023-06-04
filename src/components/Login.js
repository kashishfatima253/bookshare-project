import React,{useState,useEffect} from "react"
import Button from "./Button"
import axios from "axios"
import { Navigate,useNavigate } from "react-router-dom";


export default function Login(){

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    let navigate = useNavigate();
    useEffect(()=>{
        localStorage.clear();
    },[])

    const HandleSubmit = async (event) => {
        event.preventDefault();
        // localStorage.removeItem(localStorage.data['Token']);
        const response = await axios.post('http://localhost:5000/api/v1/user/login',{
            email,
            password,
        });
        console.log(response);
        if(response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response));
            navigate('/books');
        }
        else{
            navigate('/login');
        }
    }


    return(
        <div className="login-page">
            
           <form className="login-form" onSubmit={HandleSubmit}>
               <img src="./images/book.png" className="login-logo"/>
               <h1>Login</h1>
                <input type="text" placeholder="Email" onChange={(e) => setemail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
                <div className="login-button">
                <Button text="Login"/>
                </div>
                
            </form> 

            <img src="./images/bookshelfves.svg" className="login-img"/>
        </div>
    )
}