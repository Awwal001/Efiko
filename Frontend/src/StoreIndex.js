import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Cart from "./components/StoreComps/pages/Cart";
import Checkout from "./components/StoreComps/pages/Checkout";
import Error from "./components/StoreComps/pages/Error";
import Home from "./components/StoreComps/pages/Home";
import Filter from "./components/StoreComps/pages/Filter";
import ProductScreen from "./components/StoreComps/screens/ProductScreen";
import ShippingScreen from "./components/StoreComps/screens/ShippingScreen";
import PaymentScreen from "./components/StoreComps/screens/PaymentScreen";
import PlaceOrderScreen from "./components/StoreComps/screens/PlaceOrderScreen";
import OrderScreen from "./components/StoreComps/screens/OrderScreen";
import UserListScreen from "./components/StoreComps/screens/UserListScreen";
import UserEditScreen from "./components/StoreComps/screens/UserEditScreen";
import ProductEditScreen from "./components/StoreComps/screens/ProductEditScreen";
import ProductListScreen from "./components/StoreComps/screens/ProductListScreen";
import OrderListScreen from "./components/StoreComps/screens/OrderListScreen";
import Header from "./components/StoreComps/components/Header";


export default function StoreIndex() {
    return ( 
	
		<Switch>
			<Route exact path="/store/home/" component={Home} exact/>
			<Route exact path="/store/cart/:id?" component={Cart} />
			<Route path="/store/checkout" component={Checkout} />
			<Route path="/store/filter" component={Filter} />
			<Route path="/store/product/:id" component={ProductScreen} />
			<Route path="/store/shipping" component={ShippingScreen} />
			<Route path="/store/payment" component={PaymentScreen} />
			<Route path="/store/placeorder" component={PlaceOrderScreen} />
			<Route path="/store/order/:id" component={OrderScreen} />
			<Route path="/admin/users" component={UserListScreen} />
			<Route path="/admin/products" component={ProductListScreen} />
			<Route path="/admin/orders" component={OrderListScreen} />
			<Route path="/admin/user/:id/edit" component={UserEditScreen} />
			<Route path="/admin/product/:id/edit" component={ProductEditScreen} />
			<Route path="*" component={Error} />
		</Switch>

	);
}