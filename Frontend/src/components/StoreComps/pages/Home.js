import React from "react";
import Header from '../components/Header';
import { Container } from 'react-bootstrap'
import HomeScreen from '../screens/HomeScreen';

export default function Home() {
  return (
	<div>
		<Container>
			<Header/>
			<HomeScreen/>
		</Container>
	</div>
	);
}

