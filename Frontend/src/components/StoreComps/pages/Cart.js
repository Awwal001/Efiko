import React from "react";
import Header from '../components/Header';
import { Container } from 'react-bootstrap'
import CartScreen from '../screens/CartScreen';

export default function Cart() {
  return (
	<div>
		<Container>
			<Header/>
			<CartScreen/>
		</Container>
	</div>
	);
}
