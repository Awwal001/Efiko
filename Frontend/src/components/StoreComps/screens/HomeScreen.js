import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { withRouter } from "react-router";
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product';
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../../../actions/productActions';
import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';

function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            {!keyword && <ProductCarousel />}

            <h1>Latest Products</h1>
            {loading ? <Spinner />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
        </div>
    )
}
	

export default withRouter(HomeScreen);
