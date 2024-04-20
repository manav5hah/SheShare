import  *  as React from "react";
import { 
    BrowserRouter as Router,
    Routes,
    Route
   } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function Main() {
    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <AppBar />
                <Routes>
                    <Route excat path="/" element={<Home />} ></Route>
                    <Route path="/login" element={<Login />} ></Route>
                    <Route path="/signup" element={<Signup />} ></Route>
                    {/* <Route excat path="/register" element={<Register />} ></Route>
                    <Route excat path="/s" element={<Search />} ></Route> */}
                </Routes>
            </Router>
        </div>
    );
}

export default Main;