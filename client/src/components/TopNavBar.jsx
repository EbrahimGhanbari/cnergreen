// import React from "react";
import "./TopNavBar.scss";

// import Dropdown from "./Animation/Dropdown";

// function TopNavBar(props) {
//   return (
//     <section className="topNav">
//       <div>
//         <img id="logo" src="cnergreenlogo.png" alt="Italian Trulli" />
//       </div>
//       <nav className="stroke topButtonGroup">
//         <ul>
//           <li>
//             <a className="topButton" href="/">
//               Home
//             </a>
//           </li>
//           <li>
//             {/* <a className="topButton" href="/team"> */}

//             <Dropdown />
//             {/* </a> */}
//           </li>
//           <li>
//             <a className="topButton" href="/team">
//               Team
//             </a>
//           </li>
//           <li>
//             <a className="topButton" href="/contact">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </section>
//   );
// }

// export default TopNavBar;
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

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <img id="logo" src="logoNoText.png" alt="Italian Trulli" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="navbar_bootstrap" navbar>
            <NavItem>
              <NavLink href="/components/">Solution</NavLink>
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
};

export default Example;
