import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const { loginUser, setUser } = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleLogin = (event) => {
        const { name, value } = event.target;
        setUser({ ...loginUser, [name]: value })
    }

    const login = async (e) => {
        e.preventDefault();
        const { email, password } = loginUser;

        if (email && password) {
            try {
                await axios
                    .post("https://user-register-login-backend.onrender.com/login", loginUser)
                    .then((res) => { alert(res.data.message) }
                    )
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Invalid username or password")
        }

    }
    return (
        <>
            <h1>hi</h1>
            <form className="">
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        value={loginUser.email}
                        onChange={handleLogin}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={loginUser.password}
                        onChange={handleLogin}>

                    </input>
                </div>
                <button type="submit" className="btn btn-primary m-2" onClick={() => login}>Login</button>
                <button type="submit" className="btn btn-primary m-2" onClick={() => { navigate("/register") }}>Register</button>
            </form>
        </>
    );
}

export default Login;