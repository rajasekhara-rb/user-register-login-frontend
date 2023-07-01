import React from "react";
import { useNavigate } from "react-router-dom";

function Home({setLoggedIn}) {
    const navigate = useNavigate();
    return (
        < >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/" >Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item" onClick={() => { navigate("/login") }}>
                            <a className="nav-link" href="/" >Login</a>
                        </li>
                        <li className="nav-item" onClick={() => { navigate("/register") }}>
                            <a className="nav-link" href="/">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="bg-dark text-light d-flex flex-column jusify-content-center align-items-center" style={{ width: "100vw", height: "100vh" }}>
                <h1 className="mt-5"> Welcome to the home page after login</h1>
                <button className="btn btn-danger w-25" onClick={()=>{setLoggedIn({})}}>Logout</button>
            </div>
        </>
    );
}

export default Home;