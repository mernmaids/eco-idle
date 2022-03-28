import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "./Form.js";
import { logInUser, checkCurrentUser } from "../../services/AuthService.js";

const Login = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        username: "",
        password: ""
      });
    
      // flags in the state to watch for add/remove updates
      const [submit, setSubmit] = useState(false);
      const [loggedIn, setLoggedIn] = useState(checkCurrentUser());
    
      useEffect(() => {
        if (user && submit) {
          logInUser(user).then((userLoggedIn) => {
            if (userLoggedIn) {
              alert(`Logged in!`);
              setLoggedIn(true);
            } else {
              alert("Login failed!");
            }
            setSubmit(false);
          });
        }
      }, [user, submit]);

      useEffect(() => {
          if (loggedIn) history.push("/sector");
      }, [loggedIn]);
    
      const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        setUser({
          ...user,
          [name]: newValue
        });
      };
    
      const onSubmitHandler = (e) => {
        e.preventDefault();
        setSubmit(true);
      };

    return (
        <div>
            <h1>Eco Idle</h1>
            <div>
                <Form
                    user={user}
                    onChange={onChangeHandler}
                    onSubmit={onSubmitHandler}
                    newUser={false}
                />
            </div>
            <h3>Don't have an account? Register here!</h3>
            <Link to="/register"><button>Register</button></Link>
        </div>
    );
}

export default Login;