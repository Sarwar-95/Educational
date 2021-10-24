import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheck, faStar } from '@fortawesome/free-solid-svg-icons'
import './Category.css'
import { Link } from 'react-router-dom';
const Category = (props) => {


    const { title, rating, price, img, id } = props.cat;
    return (
        <div className='col-lg-3 col-sm-12'>
            <div className="border border-1 p-3">
                <img src={img} alt="" height="120" width="180" />
                <hr />
                <h4 className="fw-bold">{title}</h4>
                <h6><FontAwesomeIcon icon={faStar} /> Rating: {rating}</h6>
                <h6><FontAwesomeIcon icon={faMoneyCheck} /> Price: {price}$</h6>
            </div>
        </div>
    );
};

export default Category;