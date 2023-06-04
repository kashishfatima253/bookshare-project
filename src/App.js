import React from "react";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import BookFeed from "./components/Books/BookFeed";
import AvailableBooks from "./components/Books/AvailableBooks";
import MyBooks from "./components/Books/MyBooks";
import SignUp from "./components/SignUp";
import MainRoutes from "./Routes";


function App() {
  return (
    <div className="App">

      <MainRoutes />


    </div>
  );
}

export default App;
