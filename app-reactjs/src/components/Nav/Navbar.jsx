import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import {Link, NavLink} from 'react-router-dom';




export default function NavBar(props){
    const {pages, subpages} = props;

    return(
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <div className='collapse navbar-collapse' itemID='navbarSupportedContent'>
                    <CartWidget/>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

                        <li className='nav-item p-3 dropdown'> <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>Categorías </a> 
                            <ul className='dropdown-menu'>
                                {subpages.map((subpage) => (
                                    <li>
                                        <Link to={subpage.id}>
                                            {subpage.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>



                        {pages.map((page) => (
                            <li className='nav-item p-3' key={`${page.id}-page`}>
                                <NavLink
                                    to={page.id}
                                    className={({isActive}) => isActive ? "link is-active" : "link"}
                                >
                                    {page.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
    
    
}

