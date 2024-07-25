import React from "react";
import "./about.css";
import Navbar from '../components/Navbar/nav';
import reactathonImage from '../assets/images/imgsrc.jpg'; // Adjust the path as necessary

const About = () => {
    return (
        <>
            <Navbar />
            <section id="about" className="bg-black text-white d-flex align-items-center justify-content-center">
                <div className="container text-center">
                    <h2>About React-a-thon</h2>
                    <img src={reactathonImage} alt="React-a-thon" className="responsive-image my-4" />
                    <p>Welcome to React-a-thon, where developers come together to innovate with React!</p>
                    <p>Join us for a weekend of coding challenges, workshops, and networking.</p>
                </div>
            </section>
            {/* Uncomment the footer if needed */}
            {/* 
            <footer className="bg-white text-center py-4">
                <p>&copy; 2024 React-a-thon. All rights reserved.</p>
            </footer>
            */}
        </>
    );
};

export default About;
