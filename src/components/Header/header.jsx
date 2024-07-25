import React from 'react';
import Navbar from '../Navbar/nav';
// import { Link } from 'react-router-dom';
import './header.css';
import teamImage from '../../images/team1.jpg';
import teamImage1 from '../../images/team.jpg';


const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={teamImage1} className="d-block w-100" alt="Team" />
                    </div>
                    <div className="carousel-item">
                        <img src={teamImage} className="d-block w-100" alt=''  />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </header>
    );
};

export default Header;