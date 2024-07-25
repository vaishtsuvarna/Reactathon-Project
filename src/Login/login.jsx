import React from 'react';
import "./login.css";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className='login'>
    <div className="container">
    <div className="card adduser bg-orange">
        <div className="card-body">
            <h3 className="card-title text-center font-weight-bold text-uppercase text-light">Sign In<span className='orange-dot'></span></h3>
            <form className="addUserForm">
                <div className="form-group mt-3">
                    <label htmlFor="email" className='text-light'>E-mail:</label>
                    <input type="email" id='email' autoComplete='off' placeholder="Enter your email" className="form-control mt-2 bg-black"/>
                </div>
                <div className="form-group mt-3 text-light">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' autoComplete='off' placeholder="Enter your password" className="form-control mt-2 bg-black"/>
                </div>
                <button type="submit" className="btn btn-primary mt-4 w-100">Login</button>
            </form>
            <div className="signup text-center mt-4 text-danger">
                <p>Don't have an account?</p>
                <Link to="/signup" className="btn btn-success w-50">Sign-Up</Link>
            </div>
        </div>
    </div>
</div>
</div>
  );
}

export default login