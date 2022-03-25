import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, Container } from 'react-bootstrap'
import { listUniversityDetails} from '../../actions/productActions';
import Spinner from '../UI/Spinner/Spinner';
import Message from '../UI/Message/Message';

export default function University({ match}) {
	const dispatch = useDispatch()
	const universitytDetails = useSelector(state => state.universitytDetails)
	const { loading, error, products } = universitytDetails
	
	useEffect(() => {
        dispatch(listUniversityDetails(match.params.id))

    }, [dispatch, match])
	
	
	return (
        <Container>
			<h1 className="text-center">Efiko.ng</h1>
			<h2 className="text-center">University Ads</h2>
            {loading ? <Spinner />
                : error ? <Message variant='danger'>{error}</Message>
                    :
					<ListGroup variant='flush'>
                            {products.map(product => (
                                <ListGroup.Item key={product._id}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={product.image} alt={product.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/ads/${product._id}`}>{product.name}</Link>
                                        </Col>

                                        <Col md={2}>
                                            ${product.price}
                                        </Col>

                                        
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
          
            }
        </Container>
    )
}
