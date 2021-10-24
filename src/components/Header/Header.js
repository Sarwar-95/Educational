import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {

    //put all navlinks in header component

    return (
        <div className="container-fluid p-2 py-3 header-container">
            <h3 className='text-lg-start fw-bold'><span className='text-warning'><FontAwesomeIcon icon={faChalkboardTeacher} /></span> <span className='text-white'>Storpa</span><span className="text-secondary">Academy</span> </h3>
            <NavLink className="nav-style"
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "rgb(84, 223, 223)"
                }}
            >
                Home
            </NavLink >
            <NavLink className="nav-style"
                to="/courses"
                activeStyle={{

                    fontWeight: "bold",
                    color: "rgb(84, 223, 223)"
                }}
            >
                Courses
            </NavLink>
            <NavLink className="nav-style"
                to="/contact"
                activeStyle={{

                    fontWeight: "bold",
                    color: "rgb(84, 223, 223)"
                }}
            >
                Contact

            </NavLink>

            <NavLink className="nav-style"
                to="/about"
                activeStyle={{

                    fontWeight: "bold",
                    color: "rgb(84, 223, 223)"
                }}
            >
                About
            </NavLink>

        </div>
    );
};

export default Header;