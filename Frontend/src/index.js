import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Single from './components/Posts/Single';
import Filter from './components/Posts/Filter';
import University from './components/Posts/University';
import Category from './components/Posts/Category';
import Calculator from './containers/Calculator/Calculator';
import Dashboard from './containers/Dashboard/Dashboard';
import Layout from './hoc/Layout/Layout';
import Footer from './hoc/Layout/Footer';
import Admin from './Admin';
import Create from './components/Admin/Create';
import Edit from './components/Admin/Edit';
import Delete from './components/Admin/Delete';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

import Store from './components/Store/Store';
import { Provider } from 'react-redux';
import store from './store';
import StoreIndex from './StoreIndex';


ReactDOM.render(
  <Provider store={store}>
	  <Router>
			<React.StrictMode>
				<Layout>
					<Switch>
						<Route exact path="/" component={App} />
						<Route path="/category/:id" component={Category} />
						<Route exact path="/admin" component={Admin} />
						<Route exact path="/admin/create" component={Create} />
						<Route exact path="/admin/edit/:id" component={Edit} />
						<Route exact path="/admin/delete/:id" component={Delete} />
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
						<Route path="/calculator" component={Calculator} />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/filter" component={Filter} />
						<Route exact path="/store" component={Store} />
						<Route path="/ads/:id" component={Single} />
						<Route path="/university/:id" component={University} />
						<StoreIndex/>
					</Switch>
				</Layout>
				<Footer/>
			</React.StrictMode>
		</Router>
	</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
