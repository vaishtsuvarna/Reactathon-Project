import React from 'react';
import './App.css';
import Login from "./Login/login"
import Signup from "./Signup/signup";
// import React, { useEffect } from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './Home/home';
import ProblemStatement from './components/ProbSt/ps';
import About from './About/about';

function App() {
  const route= createBrowserRouter([
    {
      path:"/",
      element:<Home />,
    },
    {
      path:"/probst",
      element:<ProblemStatement />
    },
    {
      path:"/signup",
      element:<Signup />,
    },
    {
      path:"/login",
      element:<Login />,
    },
    {
      path: "/about",
      element:<About />
    }
  ]);
  return (
    <div className="App">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
