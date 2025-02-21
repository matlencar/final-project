import React, {useState} from "react";

import 
logo from "../../assets/monder_pets.png"

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink, 
  } from "reactstrap"
  

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
    <>
    <Navbar style={{ backgroundColor: '#52d552' }}>
        <NavbarBrand style={{ color: '#FFFFFF' }}>
        <img src={logo} width="50px;" style={{paddingRight: "5px"}}/>
        Cadastro unico de pets - CUP
        </NavbarBrand>
            <Nav className="ms-auto" navbar>
                <NavItem className="d-flex" style={{ flexDirection: 'row' ,justifyContent: 'flex-end', marginRight: '6px', gap: '10px' }}>
                    <NavLink style={{  color: '#FFF' }} tag={Link} to="/">
                        Home
                    </NavLink>
                    <NavLink style={{  color: '#FFF' }} tag={Link} to="/pets">
                        Sobre - Pets
                    </NavLink>
                </NavItem>
               
                
            </Nav>
        
    </Navbar>
    </>
    );
}


export default Header;