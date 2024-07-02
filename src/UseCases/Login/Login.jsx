// Login.jsx
import React from 'react';
import './Login.css';

export default  function Login({ dashboard }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    dashboard(); // Calls the dashboard function passed as prop
  };

  return (
    <div className="wrapper login"  >
      <div className="container" >  
        <div className="col-left">
          <div className="login-text">
            <h2>Welcome!</h2>
            <p>Create your account.<br />For Free!</p>
            <a href="#" className="btn">Sign Up</a>
          </div>
        </div>
        <div className="col-right">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <p>
                <label>Username/Email address<span>*</span></label>
                <input type="text" placeholder="Username or Email" required />
              </p>
              <p>
                <label>Password<span>*</span></label>
                <input type="password" placeholder="Password" required />
              </p>
              <p>
                <input type="submit" value="Sign In" />
              </p>
              <p>
                <a href="#">Forgot password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
