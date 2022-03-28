import React from "react";
import { Link } from "react-router-dom";


const Login = () => {

    return (
        <div>
            <h1>Eco Idle</h1>
            <p>Email, password forms, login box here</p>
            <h3>Don't have an account? Register here!</h3>
            <Link to="/register"><button>Register</button></Link>
        </div>
    );
}

export default Login;