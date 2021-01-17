import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-scroll";
import "./MobileNavBar.scss";

export default function (props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="navbar_mobile">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <img src="logoNoText.png" alt="Italian Trulli" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="navbar_bootstrap" navbar>
            <NavItem>
              <NavLink>
                <Link
                  activeClass="active"
                  to="application"
                  spy={true}
                  smooth={true}
                >
                  Application
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  activeClass="active"
                  to="solution"
                  spy={true}
                  smooth={true}
                >
                  Solution
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/team">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
