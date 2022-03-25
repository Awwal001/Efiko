import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo.svg';
import classes from './Header.module.css';
import SearchBox from './SearchBox';
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header() {
  return (
	<header  className={classes.header}>
		<img src={logo} alt="vintage tech logo" className={classes.logo}/>
		<nav>
			<ul>
				<div >
					<LinkContainer to="/store/home">
						<Nav.Link ><i ></i>Home</Nav.Link>
					</LinkContainer>
				</div>
				<div>
					<LinkContainer to="/store/filter">
						<Nav.Link ><i ></i>Filter</Nav.Link>
					</LinkContainer>
				
				</div>
				<div >
					<SearchBox/>
				</div>
				<div>
					<LinkContainer to="/store/cart">
						<Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
					</LinkContainer>
				</div>
			</ul>
		</nav>
	</header>
  );
}
