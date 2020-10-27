import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn } from "./LogIn.js";
//import { Modal } from "./Modal.js";
//import { Modal } from "react-responsive-modal";
import { Modal, Button } from "react-bootstrap";

//import image
import meetUpImage from "../../img/meetupIcon.png";

export const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<img src={meetUpImage} className="rounded float-left" alt="Meet up Icon" />
			</Link>
			<div className="ml-auto">
				<Button variant="primary" onClick={handleShow}>
					Log in
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Log in</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
							<br />
							<input
								type="text"
								id="password"
								className="fadeIn third"
								name="login"
								placeholder="password"
							/>
						</form>
						<br />
						<Button variant="secondary" size="sm" onClick={handleClose}>
							Log in
						</Button>
					</Modal.Body>
				</Modal>
			</div>
		</nav>
	);
};

{
	/* <button type="button" className="btn btn-primary" onClick={() => setModalIsOpen(true)}>
					LogIn
				</button>
				<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
					<form>
						<input type="label" id="login" className="fadeIn second" name="login" value="Login" />
						<input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
						<input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
						<input type="submit" className="fadeIn fourth" value="Log In" />
					</form>
					<button type="button" className="btn btn-primary" onClick={() => setModalIsOpen(false)}>
						Close
					</button>
				</Modal> */
}
