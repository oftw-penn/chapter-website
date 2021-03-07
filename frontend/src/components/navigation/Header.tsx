/*import React from 'react';
import styled from 'styled-components';
import { NavbarLink } from '../core/Link';

const Content = styled.div`
  height: 50px;
  padding: 20px;
  text-align: center;
`;

const LeftHeader = styled(NavbarLink)`
  float: left;
  margin-left: 50px;
  font-weight: bold;
`;

const RightHeader = styled(NavbarLink)`
  float: right;
  margin-right: 50px;
`;

// Note: Can also create a center header with simply display: inline-block

function Header() {
  return (
    <Content>
      <nav>
        <LeftHeader to="/">
          OFTW @ Penn
        </LeftHeader>
        <RightHeader to="/roadmap">
          Manifesto
        </RightHeader>
      </nav>
    </Content>
  );
}

export default Header;
*/

import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
//import { Button } from "../Button"
import './Header.css'

//class Navbar extends Component {
class Header extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">OFTW @ Penn!{/*<i className="fab fa-react"></i>*/}</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/*<Button>Sign Up</Button>*/}
            </nav>
        )
    }
}

export default Header