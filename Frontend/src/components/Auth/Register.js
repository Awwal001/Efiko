// import React, { useState } from 'react';
// import { Redirect, Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { register } from '../../actions/auth';
// import CSRFToken from '../CSRFToken';

// const Register = ({ register, isAuthenticated }) => {
    // const [formData, setFormData] = useState({
        // username: '',
        // password: '',
        // re_password: ''
    // });
    // const [accountCreated, setAccountCreated] = useState(false);

    // const { username, password, re_password } = formData;

    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // const onSubmit = e => {
        // e.preventDefault();

        // if (password === re_password) {
            // register(username, password, re_password);
            // setAccountCreated(true);
        // }
    // };

    // if (isAuthenticated)
        // return <Redirect to='/dashboard' />;
    // else if (accountCreated)
        // return <Redirect to='/login' />;

    // return (
        // <div className='container mt-5'>
            // <h1>Register an Account</h1>
            // <p>Create an account with our Session Auth application</p>
            // <form onSubmit={e => onSubmit(e)}>
                // <CSRFToken />
                // <div className='form-group'>
                    // <label className='form-label'>Username: </label>
                    // <input
                        // className='form-control'
                        // type='text'
                        // placeholder='Username*'
                        // name='username'
                        // onChange={e => onChange(e)}
                        // value={username}
                        // required
                    // />
                // </div>
                // <div className='form-group'>
                    // <label className='form-label mt-3'>Password: </label>
                    // <input
                        // className='form-control'
                        // type='password'
                        // placeholder='Password*'
                        // name='password'
                        // onChange={e => onChange(e)}
                        // value={password}
                        // minLength='6'
                        // required
                    // />
                // </div>
                // <div className='form-group'>
                    // <label className='form-label mt-3'>Confirm Password: </label>
                    // <input
                        // className='form-control'
                        // type='password'
                        // placeholder='Confirm Password*'
                        // name='re_password'
                        // onChange={e => onChange(e)}
                        // value={re_password}
                        // minLength='6'
                        // required
                    // />
                // </div>
                // <button className='btn btn-primary mt-3' type='submit'>Register</button>
            // </form>
            // <p className='mt-3'>
                // Already have an Account? <Link to='/login'>Sign In</Link>
            // </p>
        // </div>
    // );
// };

// const mapStateToProps = state => ({
    // isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { register })(Register);


import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Card } from 'react-bootstrap'
import Spinner from '../../components/UI/Spinner/Spinner';
import Message from '../../components/UI/Message/Message';
import { register } from '../../actions/userActions';

import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function Register({location, history}) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState('')
	
	const dispatch = useDispatch()
	
	const redirect = location.search ? location.search.split('=')[1] : '/'
	
	const userRegister = useSelector(state => state.userRegister)
	const { error, loading, userInfo } = userRegister
	
	useEffect(() => {
		if (userInfo) {
			history.push(redirect)
		}
		
	},[history, userInfo, redirect])
	

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if(password != confirmPassword){
			setMessage('Passwords do not match!')
		} else {
			dispatch(register(name, email, password))
		
		}
		
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				{message && <Message variant='danger'>{message}</Message>}
				{error && <Message variant='danger'>{error}</Message>}
				{loading && <Spinner />}
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="name"
								label="name"
								name="name"
								autoComplete="name"
								onChange={(e) => setName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="confirm-password"
								label="Confirm Password"
								type="password"
								id="confirm-password"
								autoComplete="confirm-password"
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</Grid>
						
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Register
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
								Already have an account? Sign In
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

export default Register;