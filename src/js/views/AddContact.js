import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
	const { actions } = useContext(Context);
	const [contact, setContact] = useState({
		name: "",
		email: "",
		address: "",
		phone: ""
	});

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							value={contact.name || ""}
							onChange={event => setContact({ ...contact, name: event.target.value })}
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							value={contact.email || ""}
							onChange={event => setContact({ ...contact, email: event.target.value })}
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							value={contact.phone || ""}
							onChange={event => setContact({ ...contact, phone: event.target.value })}
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							value={contact.address || ""}
							onChange={event => setContact({ ...contact, address: event.target.value })}
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button
						onClick={() => (contact.name != "" ? actions.newContact(contact) : () => {})}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
