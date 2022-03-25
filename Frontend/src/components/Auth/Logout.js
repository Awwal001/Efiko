// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import axios from '../../axios';
// import { logout } from '../../actions/auth';
// import axiosInstance from '../../axios';
// import { useHistory } from 'react-router-dom';

// const Logout = ({ logout, isAuthenticated }) =>  {
	// const history = useHistory();

	// useEffect(() => {
		// const response = axios.post('http://127.0.0.1:8000/api/user/logout/blacklist/', {
			// refresh_token: localStorage.getItem('refresh_token'),
		// });
		// localStorage.removeItem('access_token');
		// localStorage.removeItem('refresh_token');
		// axiosInstance.defaults.headers['Authorization'] = null;
		// history.push('/login');
	// });
	// return <div>Logout</div>;
// }

// const mapStateToProps = state => ({
    // isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { logout })(Logout);