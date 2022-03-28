import React from "react";

const Form = ({ user, onChange, onSubmit, newUser }) => {
    return (
      <div>
        <form onSubmit={onSubmit} autoComplete="off">
        <div>
            <label>Username</label>
            <br />
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
          {newUser ? (
          <div>
            <label>Email</label>
            <br />
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
          <div>
            <label>Password</label>
            <br />
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
          {newUser ? (
            <div>
              <div>
                <label>Confirm Password</label>
                <br />
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
          <div>
            <button type="submit" onSubmit={onSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Form;