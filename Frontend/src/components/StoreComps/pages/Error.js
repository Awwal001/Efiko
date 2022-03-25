import React from "react";
import {Link} from 'react-router-dom';
import classes from './Error.module.css';
import Header from '../components/Header';
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function Error() {
  return ( 
	  
	  <section className={classes.page}>
		<div className={classes.container}>
			<Header/>
			<h1>oops! it's a dead end</h1>
			<LinkContainer to="/store/home" className={classes.btn}>
				<Nav.Link ><i ></i>Back home</Nav.Link>
			</LinkContainer>
		</div>
	  </section>
  );
}
