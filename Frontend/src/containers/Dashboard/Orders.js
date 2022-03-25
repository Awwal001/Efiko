// import React from 'react';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Title from './Title';

// // Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
  // return { id, date, name, shipTo, paymentMethod, amount };
// }

// const rows = [
  // createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  // createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  // createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  // createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  // createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
// ];

// function preventDefault(event) {
  // event.preventDefault();
// }

// const useStyles = makeStyles((theme) => ({
  // seeMore: {
    // marginTop: theme.spacing(3),
  // },
// }));

// export default function Orders() {
  // const classes = useStyles();
  // return (
    // <React.Fragment>
      // <Title>Recent Orders</Title>
      // <Table size="small">
        // <TableHead>
          // <TableRow>
            // <TableCell>Date</TableCell>
            // <TableCell>Name</TableCell>
            // <TableCell>Ship To</TableCell>
            // <TableCell>Payment Method</TableCell>
            // <TableCell align="right">Sale Amount</TableCell>
          // </TableRow>
        // </TableHead>
        // <TableBody>
          // {rows.map((row) => (
            // <TableRow key={row.id}>
              // <TableCell>{row.date}</TableCell>
              // <TableCell>{row.name}</TableCell>
              // <TableCell>{row.shipTo}</TableCell>
              // <TableCell>{row.paymentMethod}</TableCell>
              // <TableCell align="right">{row.amount}</TableCell>
            // </TableRow>
          // ))}
        // </TableBody>
      // </Table>
      // <div className={classes.seeMore}>
        // <Link color="primary" href="#" onClick={preventDefault}>
          // See more orders
        // </Link>
      // </div>
    // </React.Fragment>
  // );
// }



import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router";
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../../components/UI/Spinner/Spinner';
import Message from '../../components/UI/Message/Message';
import { listOrders } from '../../actions/orderActions'
import Title from './Title';




const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function Orders({ history }) {
	const classes = useStyles();
	
	const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin



    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])


	return (
		<React.Fragment>
			<Title>Recent Orders</Title>
			{loading
                ? (<Spinner />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>USER</th>
                                    <th>DATE</th>
                                    <th>Total</th>
                                    <th>PAID</th>
                                    <th>DELIVERED</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map(order => (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{order.user && order.user.name}</td>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td>${order.totalPrice}</td>

                                        <td>{order.isPaid ? (
                                            order.paidAt.substring(0, 10)
                                        ) : (
                                                <i className='fas fa-check' style={{ color: 'red' }}></i>
                                            )}
                                        </td>

                                        <td>{order.isDelivered ? (
                                            order.deliveredAt.substring(0, 10)
                                        ) : (
                                                <i className='fas fa-check' style={{ color: 'red' }}></i>
                                            )}
                                        </td>

                                        <td>
                                            <LinkContainer to={`store/order/${order._id}`}>
                                                <Button variant='light' className='btn-sm'>
                                                    Details
                                                </Button>
                                            </LinkContainer>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
		</React.Fragment>

	);
}

export default withRouter(Orders);