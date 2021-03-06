import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../../axios';
import { Link } from 'react-router-dom';

const Category = (props) => {
	const { posts } = props;
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    useEffect(() => {
        const category = props.match.params.id;
        setCurrentCategory(capitalizeFirstLetter(category));

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const fetchData = async () => {
            try {
                const res = await axiosInstance.post(`http://127.0.0.1:8000/api/categories`, { category }, config);
                setBlogs(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getCategoryBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.categories)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                       
                        <p className="card-text mb-auto">{blogPost.description}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={blogPost.image} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    return (
        <div className='container mt-3'>
            <h3 className='display-4'>{currentCategory} Category</h3>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to='/category/federal-universites'>Federal Universites</Link>
					<Link className="p-2 text-muted" to='/category/state-universites'>State Universites</Link>
					<Link className="p-2 text-muted" to='/category/private-universites'>Private Universites</Link>
					<Link className="p-2 text-muted" to='/category/polythecnics'>Polythecnics</Link>
					<Link className="p-2 text-muted" to='/category/college-of-education'>College Of Education</Link>
					<Link className="p-2 text-muted" to='/category/others'>Others</Link>
                </nav>
            </div>
            {getCategoryBlogs()}
        </div>
    );
};

export default Category;