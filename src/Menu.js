import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'

function Menu(props) {
    return (
        <div className='app'>
                
                <ul>
                <NavLink className="appA" to='/'>
                <li>MK</li>

                </NavLink>
                <ul>
                <NavLink to='/Accueil.js'>
                <li>Accueil</li>
                </NavLink>
                <NavLink to='/Carousel'>
                <li>Produit</li>
                </NavLink>
                <NavLink to='/Formation'>
                <li>Formation</li>
                </NavLink>
                <NavLink to='/Service'>
                <li>Galerie</li>
                </NavLink>
                <NavLink to='/Contact'>
                <li>Contact</li>
                </NavLink>
                <NavLink to='/Galerie'>
                <li>FAQ</li>
                </NavLink>
            </ul>
            </ul>
            
            
        </div>
        
    );
}

export default Menu;