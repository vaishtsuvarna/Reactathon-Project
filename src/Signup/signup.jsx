import React from 'react';
import "./signup.css";
import { Link} from "react-router-dom";

const signup = () => {
  return (
    <div className='Signup'>
    <div className="container">
    <div className="card addUser bg-orange">
        <div className="card-body">
            <h3 className="card-title text-center font-weight-bold text-uppercase text-light text-shadow">Sign Up <span className='orange-dot'></span></h3>
            <form className="addUserForm ">
                <div className="form-group inputGroup">
                    <label htmlFor="name" className='text-light'>Name:</label>
                    <input type="text" className="form-control bg-black" id='name' autoComplete='off' placeholder="Enter your name"/>
                    <label htmlFor="email" className="mt-3 text-light">E-mail:</label>
                    <input type="email" className="form-control bg-black" id='email' autoComplete='off' placeholder="Enter your email"/>
                    <label htmlFor="password" className="mt-3 text-light">Password:</label>
                    <input type="password" className="form-control bg-black" id='password' autoComplete='off' placeholder="Enter your password"/>
                    <button type="submit" className="btn btn-success mt-3 w-100">Sign-Up</button>
                </div>
            </form>
            <div className="Login mt-4 text-center text-primary">
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-primary w-50">Login</Link>
            </div>
        </div>
    </div>
</div>
</div>
);
}

export default signup