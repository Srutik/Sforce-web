import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
    <div className="navbar-container">
		<nav className="navbar">
			<Link to="/" className="nav-logo">
				<span className="logo1">S</span><span className="logo2">FORCE</span>
			</Link>

			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>

			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/posts" className="nav-link" onClick={closeMenu}>
						Posts
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/services" className="nav-link" onClick={closeMenu}>
						Services
					</Link>
				</li>
				<li className="nav-contact-item">
					<Link to="/contact" className="nav-contact-link" onClick={closeMenu}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
    </div>
	);
};

export default Navbar;