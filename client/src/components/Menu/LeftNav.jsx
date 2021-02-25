import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionTypes';

import styled from 'styled-components';

const Menu = styled.div`
  z-index: 10;
  list-style: none;
  margin-block-start: 0;
  font-weight: bold;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-200%)'};
  top: 0;
  left: 0;
  width: 250px;
  padding-left: 3rem;
  padding-top: .5rem;
  transition: transform 0.3s ease-in-out;

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .menu {
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #5d6888;
    font-size: 18px;
    margin: .5rem ;
    padding: 7px;
    

    &:hover {
      cursor: pointer;
    }

  }

  .logout {
    cursor: pointer;
  }

  img {
    padding-right: 5px;
    width: 35px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    padding-top: 5rem;
    padding-left: 0rem;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: #44bac4;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    .nav {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    .menu {
      z-index: 10;
      width: 50%;
      margin: .5rem;
      background-color: #ffffff;
      border-radius: 5px;
      font-size : 22px;
    }
    
  }
  

`;

const LeftNav = ({ open, setOpen }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {

    const logout = () => {
      dispatch({ type: actionType.LOGOUT });
      setUser(null);
      history.push('/');
    }
    logout();
  };


  return (
    <Menu open={open}>
      <div className="nav">
        <NavLink className="menu" onClick={() => setOpen(!open)} to='/'>Accueil</NavLink>
        <NavLink className="menu" onClick={() => setOpen(!open)} to='/contact'>Contact</NavLink>
        {user && (
          <div>
            <ExitToAppIcon className='logout' onClick={handleLogout}/>
          </div>
        )}
      </div>
    </Menu>
  )
}

export default LeftNav
;