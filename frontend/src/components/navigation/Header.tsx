import React from 'react';
import styled from 'styled-components';
import { NavbarLink } from '../core/Link';

const Content = styled.div`
  height: 50px;
  padding: 8vh 20vw 0vh 20vw;
  text-align: center;
`;

const LeftHeader = styled(NavbarLink)`
  float: left;
  font-weight: bold;
`;

const RightHeader = styled(NavbarLink)`
  float: right;
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
