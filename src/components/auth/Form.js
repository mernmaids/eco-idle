import React from "react";
import { Link } from "react-router-dom";

const Form = ({ user, onChange, onSubmit, newUser }) => {
    return (
      <div className="pt-10 text-xl text-center">
        <form onSubmit={onSubmit} autoComplete="off">
        <div>
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              id="username-input"
              value={user.username}
              onChange={onChange}
              name="username"
              placeholder="username"
              required
            />
          </div>
          <div className="my-2"/>
          {newUser ? (
          <div>
            <label>Email: </label>
            <input
              type="email"
              className="form-control"
              id="email-input"
              value={user.email}
              onChange={onChange}
              name="email"
              placeholder="email"
              required
            />
          </div>
          ) : ""}
          <div className="my-4"/>
          <div>
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              id="password-input"
              value={user.password}
              onChange={onChange}
              name="password"
              placeholder="password"
              required
            />
          </div>
          <div className="my-2"/>
          {newUser ? (
            <div>
              <div>
                <label>Confirm Password: </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password-input"
                  onChange={onChange}
                  name="confirmPassword"
                  placeholder="password"
                  required
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="my-5">
            <button className="text-l border-solid border-2 border-slate-900 rounded bg-light-blue-darken-hover p-2 m-2" type="submit" onSubmit={onSubmit}>
              Submit
            </button>
          </div>
            <div className="text-left text-md">
              { newUser ? (<>
                <h3>Already have an account? Log in here!</h3>
                <Link to="/auth/login">
                    <button className="border-solid border-2 border-slate-900 rounded bg-light-blue-darken-hover p-2 m-2">
                        Log in
                </button></Link>
              </>) : (<>
                <h3>Don't have an account? Register here!</h3>
                <Link to="/auth/register">
                    <button className="border-solid border-2 border-slate-900 rounded bg-light-blue-darken-hover p-2 m-2">
                        Register
                </button></Link>
              </>)}
            </div>
        </form>
      </div>
    );
  };
  
  export default Form;