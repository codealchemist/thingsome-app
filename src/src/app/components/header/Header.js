import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Logo from './Logo.js';
import theme from './DarkAppBar.scss';

const Header = ({ children, ...other }) => (
  <AppBar {...other} theme={theme}>
    <Logo /> Thingsome App
    {children}
  </AppBar>
);

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
