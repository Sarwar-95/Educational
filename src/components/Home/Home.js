import React, { useEffect, useState } from 'react';
import logo from './home.png'
import "./Home.css"
import Category from '../Category/Category';

const Home = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('/category.JSON')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className="container">
            <div className="row top-section mt-5">
                <div className="col-lg-6 col-sm-12">
                    <img className="img-fluid rounded" src={logo} alt="" width="530" height="450" />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h2 className="fw-bold p-3 fs-1">Welcome to Storpa E-learning Academy</h2>
                    <p className='px-5 text-secondary'>Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training. </p>
                </div>
            </div>
            <h2 className="my-5 fw-bold">Most Popular Courses</h2>
            <div className='category my-5 d-flex row gy-3'>
                {
                    category.map(cat => <Category key={cat.id} cat={cat}></Category>)
                }
            </div>
        </div >
    );
};

export default Home;