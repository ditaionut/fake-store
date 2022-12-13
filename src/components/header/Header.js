import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Header.scss";

function Header() {
  return (
    <div className="navbar-container">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold py-3 fs-4" href="/">
            FAKE store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="fw-bold nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <NavLink className="nav-link" to="/contact">Contact us</NavLink>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div className=" ml-5 buttons">
              <a href="" className="fs-8 ml-5 btn-outline-dark ms-2">
                <LoginIcon /> Login
              </a>
              <a href="" className=" btn-outline-dark ms-2">
                <ExitToAppIcon /> Register
              </a>
              <a href="" className=" ml-5 btn-outline-dark ms-2">
                <FavoriteBorderIcon /> (0)
              </a>
              <a href="" className="ml-5 btn-outline-dark ms-2">
                <LocalMallIcon />
                (0)
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
