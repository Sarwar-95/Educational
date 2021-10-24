import React from 'react';
import { faMoneyCheck, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Card = (props) => {

    const { title, rating, price, img, id } = props.cat
    return (
        <div className="col-12 col-lg-4 gy-5 gx-4">
            <div className="border border-1 p-3">
                <img src={img} alt="" height="160" width="230" />
                <hr />
                <h4 className="fw-bold">{title}</h4>
                <h6><FontAwesomeIcon icon={faStar} /> Rating: {rating}</h6>
                <h6><FontAwesomeIcon icon={faMoneyCheck} /> Price: {price}$</h6>
                <Link to={`courses/${id}`}>
                    <button className="btn btn-danger">Enroll Now</button>
                </Link>
            </div>

        </div>
    );
};

export default Card;