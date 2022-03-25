import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner';
import Message from '../../components/UI/Message/Message';
import { getUserDetails, updateUserProfile } from '../../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants'
// import { listMyOrders } from '../actions/orderActions'
import Title from './Title';



function Chart({location, history}) {
  
    const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState('')

	const dispatch = useDispatch()

	const userDetails = useSelector(state => state.userDetails)
	const { error, loading, user } = userDetails

	const userLogin = useSelector(state => state.userLogin)
	const { userInfo } = userLogin

	const userUpdateProfile = useSelector(state => state.userUpdateProfile)
	const { success } = userUpdateProfile

	// const orderListMy = useSelector(state => state.orderListMy)
	// const { loading: loadingOrders, error: errorOrders, orders } = orderListMy


	useEffect(() => {
		if (!userInfo) {
			history.push('/login')
		} else {
			if (!user || !user.name || success || userInfo._id !== user._id ) {
				dispatch({ type: USER_UPDATE_PROFILE_RESET })
				dispatch(getUserDetails('profile'))
				//dispatch(listMyOrders())
			} else {
				setName(user.name)
				setEmail(user.email)
			}
		}
	}, [dispatch, history, userInfo, user, success])

	const submitHandler = (e) => {
		e.preventDefault()

		if (password != confirmPassword) {
			setMessage('Passwords do not match')
		} else {
			dispatch(updateUserProfile({
				'id': user._id,
				'name': name,
				'email': email,
				'password': password
			}))
			setMessage('')
		}

	}

	return (
		<div>
			<Title>Profile</Title>

			{message && <Message variant='danger'>{message}</Message>}
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Spinner />}
			<Form onSubmit={submitHandler}>

				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						required
						type='name'
						placeholder='Enter name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					>
					</Form.Control>
				</Form.Group>

				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						required
						type='email'
						placeholder='Enter Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					>
					</Form.Control>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control

						type='password'
						placeholder='Enter Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					>
					</Form.Control>
				</Form.Group>

				<Form.Group controlId='passwordConfirm'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control

						type='password'
						placeholder='Confirm Password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					>
					</Form.Control>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Update
				</Button>

			</Form>
		</div>

		);
	}
	
	
export default withRouter(Chart);