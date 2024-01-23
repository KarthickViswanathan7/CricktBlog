import "./blog.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import ToHome, { ToFinal, Tolist } from "./link/link";
import { Link } from "react-router-dom";
function NavScrollExample() {
  return (
    <div className="Navv">
      <Navbar fixed="top" expand="lg" className="navbg" style={{
        backgroundImage: `url(${'https://img.freepik.com/free-photo/white-painted-wall-texture-background_53876-138197.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Container fluid className="cont">
          <img
            class="logo-img"
            alt="IMGG"
            src="https://i.ibb.co/9t6tCnf/Swing-And-Seam-logos-black.png"
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div
                className="navbar-link"
                style={{
                  marginTop: "7px",
                  marginLeft: "-5px",
                  fontSize: "13px",
                }}
              >
                {" "}
                <ToHome />
              </div>
              <div
                className="navbar-link"
                style={{
                  marginTop: "7px",
                  fontSize: "13px",
                }}
              >
                {" "}
                <Tolist />
              </div>
              <div
                className="navbar-link"
                style={{
                  marginTop: "7px",
                  fontSize: "13px",
                }}
              >
                {" "}
                <ToFinal />
              </div>

            </Nav>
            <Button><Link to='/login' style={{
              textDecoration: 'none', color: "#fff"
            }}>Login or Signup</Link></Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
//DropDown Link code 
/*<Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline">Search</Button>
            </Form>


<NavDropdown title="Link" id="navbarScrollingDropdown" style={{
                backgroundColor:'transparent'
              }}>
                <div className="navbardropdown-item"> <ToHome/></div>
                <NavDropdown.Item>Home</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>*/
