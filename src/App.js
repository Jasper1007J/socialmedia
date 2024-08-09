import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';

const App = () => {
  return (

      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route  path="/login" element={<Login/>} />
              <Route  path="/register" element={<Register/>} />
              {/* <Route  path="/profile" element={<PrivateRoute/>} Component={Profile} /> */}
              <Route  path="/post" element={<PrivateRoute/>} Component={PostForm} />
            </Routes>
          </div>
        </div>
      </Router>
    
  );
}

export default App;
