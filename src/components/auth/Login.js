import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "./Form.js";
import { logInUser, checkCurrentUser } from "../../services/AuthService.js";

const Login = () => {
    const history = useHistory();

    const [loginFailed, setLoginFailed] = useState(false);
    const [user, setUser] = useState({
        username: "",
        password: ""
      });
    
      // flags in the state to watch for add/remove updates
      const [submit, setSubmit] = useState(false);
      const [loggedIn, setLoggedIn] = useState(checkCurrentUser());
    
      // user submits their info
      useEffect(() => {
        if (user && submit) {
          logInUser(user).then((userLoggedIn) => {
            if (userLoggedIn) {
              setLoggedIn(true);
              setLoginFailed(false);
            } else {
              setLoginFailed(true);
            }
            setSubmit(false);
          });
        }
      }, [user, submit]);

      // redirects user after logging in
      useEffect(() => {
        if (loggedIn) {
          history.push("/"); 
          window.location.reload();
        }
      }, [loggedIn, history]);
    
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
        <>
          <div>
              {
                loginFailed ? (
                  <span className="text-rose-500">Invalid username or password.</span>
                ) : ""
              }
              <Form
                  user={user}
                  onChange={onChangeHandler}
                  onSubmit={onSubmitHandler}
                  newUser={false}
              />
          </div>
        </>
    );
}

export default Login;