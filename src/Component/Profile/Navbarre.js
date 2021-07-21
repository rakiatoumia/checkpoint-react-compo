import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbarre() {
  return (
    <div>
      <div className="barre">
        <Navbar>
          <div className="nav-content">
            <Navbar.Brand className="logo" href="#">
              ProfileBook
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
              </Form>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default Navbarre;
