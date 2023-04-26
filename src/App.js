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
						<form className="d-flex" role="search">
							{/* <!-- Button trigger login modal --> */}
							<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal" style={{marginRight: "10px"}}>
								Login
							</button>
							{/* Button trigger signup modal */}
							<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signupModal" style={{marginRight: "10px"}}>
								Sign up
							</button>
						</form>
					</div>
				</div>
			</nav>



			{/* <!-- Sign up Modal --> */}

			<div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="signupModalLabel">Sign Up Form</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form>
								<div className="mb-3">
									<label for="signupInputName" className="form-label">Username</label>
									<input type="text" className="form-control" id="signupInputName" placeholder='Enter Username' />
									{/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
								</div>
								<div className="mb-3">
									<label for="signupInputEmail1" className="form-label">Email address</label>
									<input type="email" className="form-control" id="signupInputEmail1" aria-describedby="emailHelp" placeholder='Enter valid email address' />
									<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
								</div>
								<div className="mb-3">
									<label for="signupInputPassword1" className="form-label">Password</label>
									<input type="password" className="form-control" id="signupInputPassword1" placeholder='Enter Password' />
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Sign Up</button>
						</div>
					</div>
				</div>
			</div>

			{/* Login Modal	 */}

			<div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="loginModalLabel">Login Form</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form>
								<div className="mb-3">
									<label for="loginInputName" className="form-label">Username</label>
									<input type="text" className="form-control" id="loginInputName" placeholder='Enter Username' />
								</div>
								<div className="mb-3">
									<label for="loginInputPassword1" className="form-label">Password</label>
									<input type="password" className="form-control" id="loginInputPassword1" placeholder='Enter Password' />
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<div style={{ marginRight: "auto" }} >
								<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#emailModal">
									Forgot Password
								</button>
							</div>
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Login</button>
						</div>
					</div>
				</div>
			</div>

			{/* forget password modal */}

			<div class="modal fade" id="emailModal" tabindex="-1" aria-labelledby="emailModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="emailModalLabel">Modal title</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<div className="mb-3">
								<label for="signupInputEmail1" className="form-label">Email address</label>
								<input type="email" className="form-control" id="signupInputEmail1" aria-describedby="emailHelp" placeholder='Enter valid email address' />
								<div id="emailHelp" className="form-text">Enter email address to send password</div>
							</div>
						</div>
						<div class="modal-footer">
							{/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
							<button type="button" class="btn btn-primary">Send</button>
						</div>
					</div>
				</div>
			</div>


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
					<footer className="container" >
						<p className="float-end"><a href="#">Back to top</a></p>
						<p>© 2017–2023 Coding Club, Inc. ASAM codes  · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
					</footer>
				</div>
			</div>
		</div>
	);
}

export default App;

