import React from 'react';
import Header from '../components/Header/header';
import {  } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <main className="home">
            <Header />
            <h2>Home</h2>
            <p>This is the home page.</p>
        </main>
    );
};

export default Home;