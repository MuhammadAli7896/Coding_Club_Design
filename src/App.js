import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Members from './pages/Members';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Homepage from './pages/Home';
import "./App.css"

function App() {
	return (
		<div className='App' >
			{/* Navbar */}
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">Coding Club</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
							<li className="nav-item">
								<Link className="nav-link " aria-current="page" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link " to="/activities">Activities</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/events">Events</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/gallery">Gallery</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/members">Members</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/blog">Blog</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">Contact</Link>
							</li>
						</ul>
						{/* <form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form> */}
					</div>
				</div>
			</nav>

			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/activities' element={<Activities />} />
				<Route path='/events' element={<Events />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/members' element={<Members />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>

			{/* footer */}
			<div>
				<div className='footer d-block pd-5'>
					<footer class="container" >
						<p class="float-end"><a href="#">Back to top</a></p>
						<p>© 2017–2023 Coding Club, Inc. ASAM codes  · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
					</footer>
				</div>
			</div>
		</div>
	);
}

export default App;

