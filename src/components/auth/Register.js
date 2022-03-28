import React from "react";
import { Link } from "react-router-dom";


const Register = () => {

    return (
        <div>
            <h1>Eco Idle</h1>
            <p>Email, password, confirm password forms, register box here</p>
            <h3>Already have an account? Log in here!</h3>
            <Link to="/login"><button>Log in</button></Link>
        </div>
    );
}

export default Register;