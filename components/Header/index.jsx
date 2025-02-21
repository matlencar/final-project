// import React, { useState } from "react";

import logo from "../../assets/monder_pets.png";

import { Link } from 'react-router-dom';

import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink
} from "reactstrap";
  

export function Header() {

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
                        Sobre - CUP
                    </NavLink>
                </NavItem>
               
                
            </Nav>
        
    </Navbar>
    </>
    );
}
