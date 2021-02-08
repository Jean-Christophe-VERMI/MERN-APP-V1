import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Menu = styled.div`
  width: 100%;
  list-style: none;
  margin-block-start: 0;
  margin: 0;
  padding: 0;
  font-weight: bold;
  flex-flow: column nowrap;
  justify-content: flex-start;
  background-color: #44bac4;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;

  .menu {
    border: none;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #000000;
    margin: 1rem;
    padding: 5px 10px;
    

    &:hover {
      cursor: pointer;
      color: #ffffff;
    }

  }

  img {
    padding-right: 5px;
    width: 35px;
  }
  

`;

const LeftNav = ({ open, setOpen }) => {
  return (
    <Menu open={open}>
      <NavLink className="menu" onClick={() => setOpen(!open)} to='/'>Accueil</NavLink>
      <NavLink className="menu" onClick={() => setOpen(!open)} to='/projets'>Projets</NavLink>
      <NavLink className="menu" onClick={() => setOpen(!open)} to='/blog'>Blog</NavLink>
      <NavLink className="menu" onClick={() => setOpen(!open)} to='/contact'>Contact</NavLink>
    </Menu>
  )
}

export default LeftNav
;