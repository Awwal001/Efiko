import React, { Fragment, useEffect } from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../../actions/auth';
import { loadUser } from '../../actions/profile';


const Layout = ({ children, checkAuthenticated, loadUser }) => {
	useEffect(() => {
		loadUser();
		checkAuthenticated();
		//load_user();
	}, []);
	
	useEffect(checkAuthenticated, [])
	useEffect(loadUser, [])
	
	return(
		<Fragment>
			<Nav />
			{children}
		</Fragment>
	);
    
};

export default connect(null, { checkAuthenticated, loadUser })(Layout);