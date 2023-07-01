import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnteredPassword: "",
    })
    const navigate = useNavigate();
    const handleRegister = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const register = async (e) => {
        e.preventDefault();
        const { name, email, password, reEnteredPassword } = user;

        if (name && email && password && password === reEnteredPassword) {
            try {
                await axios
                    .post("https://user-register-login-backend.onrender.com/register", user)
                    .then((res) => alert(res.data.message))

                navigate("/login");
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("Invalid Data")
        }
    }
    return (
        <form className="container mt-5">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" value={user.name} onChange={handleRegister}></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleRegister}></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handleRegister}></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Your Password</label>
                <input type="password" className="form-control" id="reEnteredPassword" name="reEnteredPassword" value={user.reEnteredPassword} onChange={handleRegister}></input>
            </div>
            <button type="submit" className="btn btn-primary m-2" onClick={register}>Register</button>
            <button type="submit" className="btn btn-primary m-2" onClick={() => { navigate("/login") }}>Login</button>
        </form>
    );
}

export default Register;