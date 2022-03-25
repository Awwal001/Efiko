import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import classes from './Carousel.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';
import { listTopProducts } from '../../../actions/productActions'

function ProductCarousel() {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { error, loading, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return (loading ? <Spinner />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
				<div className={classes.carousel}>
					<Carousel pause='hover' className='bg-dark'>
                    {products.map(product => (
                        <Carousel.Item key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <Image src={product.image} alt={product.name} fluid />
                                <Carousel.Caption className='carousel.caption'>
                                    <h4>{product.name} (${product.price})</h4>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
						))}
					</Carousel>
				</div>
                
            )

    )
}

export default ProductCarousel
