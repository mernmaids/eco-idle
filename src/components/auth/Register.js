import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createUser, usernameUsed, emailUsed, } from "../../services/AuthService.js";
import Form from "./Form.js";


const Register = () => {
    const history = useHistory();
    // blank user template to be filled in
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

    const [add, setAdd] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [unusedUsername, setUnusedUsername] = useState(true);
    const [unusedEmail, setUnusedEmail] = useState(true);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (newUser && add && passwordsMatch && unusedUsername && unusedEmail) {
            createUser(newUser).then((userCreated) => {
                if (userCreated) {
                    alert(`New user created!`);
                    setDone(true);
                }
                setAdd(false);
            });
        }
    }, [newUser, add, passwordsMatch, unusedUsername, unusedEmail]);

    useEffect(() => {
        setPasswordsMatch(newUser['password'] === newUser['confirmPassword']);
        usernameUsed(newUser).then((result) => setUnusedUsername(!result));
        emailUsed(newUser).then((result) => setUnusedEmail(!result));
    }, [newUser])

    useEffect(() => {
        if (done) history.push("/auth/login");
    }, [done, history]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        setNewUser({
          ...newUser,
          [name]: newValue
        });
      };
    
      const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
      };

    return (
        <div>
            {passwordsMatch ? "" : (<div>"Passwords do not match!"<br /></div> )}
            {unusedUsername ? "" : (<div>"Username has already been used!"<br /></div>)}
            {unusedEmail ? "" : (<div>"Email has already been used!"<br /></div>)}
            <div>
                <Form
                    user={newUser}
                    onChange={onChangeHandler}
                    onSubmit={onSubmitHandler}
                    newUser={true}
                />
            </div>
        </div>
    );
}

export default Register;