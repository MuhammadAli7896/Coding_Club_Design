import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/activities">Activities</Link></li>
				<li><Link to="/gallery">Gallery</Link></li>
				<li><Link to="/events">Events</Link></li>
				<li><Link to="/members">Members</Link></li>
				<li><Link to="/blog">Blog</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
		</nav>
	);
}

export default Navbar;
