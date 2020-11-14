import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  height: 150px;
  width: 100vw;
  background-color: #5746f1;
  position: relative;
  z-index: 1;
`;

const NavContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0 auto;
  max-width: 1500px;
  justify-content: space-between;
  padding: 0 2rem;
`;

const NavTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: white;
`;

const BackgroundTriangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 200px solid white;
  border-radius: 60px;
  opacity: 0.2;
  left: 0;
  transform: rotate(45deg);
  z-index: -1;
`;

export default function Navbar() {
  return (
    <Nav>
      <NavContent>
        <BackgroundTriangle />
        <Link to='/'>
          <NavTitle>devjobs</NavTitle>
        </Link>
        <div>
          <i class='far fa-sun' />
          <i class='far fa-moon' />
        </div>
      </NavContent>
    </Nav>
  );
}
