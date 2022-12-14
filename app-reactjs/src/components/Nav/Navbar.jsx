import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import {Link} from 'react-router-dom';



export default function NavBar(){
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <div className='collapse navbar-collapse' itemID='navbarSupportedContent'>
                    <CartWidget/>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item p-3 dropdown'> <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>Categorías </a> 
                            <ul className='dropdown-menu'>
                                <li><a className='dropdown-item' href='#'>Supermercado</a></li>
                                <li><a className='dropdown-item' href='#'>Tecnología</a></li>
                                <li><a className='dropdown-item' href='#'>Electrodomésticos</a></li>
                                <li><a className='dropdown-item' href='#'>Deportes</a></li>
                                <li><a className='dropdown-item' href='#'>Moda</a></li>
                                <li><a className='dropdown-item' href='#'>Juegos</a></li>
                            </ul>
                        </li>
                        <li className='nav-item p-3'> <a className='nav-link' href='#'>Ofertas</a> </li>
                        <li className='nav-item p-3'> <a className='nav-link' href='#'>Historial</a> </li>
                        <li className='nav-item p-3'> <a className='nav-link' href='#'>Supermercado</a> </li>
                        <li className='nav-item p-3'> <a className='nav-link' href='#'>Moda</a> </li>
                        <li className='nav-item p-3'> <a className='nav-link' href='#'>Vender</a> </li>
                        <li className='nav-item p-3'> <a className='nav-link' href='#'>Ayuda</a> </li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
}

