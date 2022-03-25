import React from 'react';

import classes from './NavigationItem.module.css';
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavigationItem = (props) => (
    <LinkContainer className={classes.NavigationItem}>
        <Nav.Link 
            className={props.active ? classes.active : null}>{props.children}</Nav.Link>
    </LinkContainer>
)

export default NavigationItem;