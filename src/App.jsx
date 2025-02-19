import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container 
} from "reactstrap"


import './App.css'
import { Home } from './components/Home';
import Users from './components/Users';
import Header from './components/Header';

function App() {


  return (
    <Router>
      <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
        <Header/>
        <Container className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<Users/>} />
          </Routes>
        </Container>
        <footer className="bg-dark text-white text-center p-3">
          Infnet - projeto final
        </footer>
      </div>
    </Router>
  );
}

export default App