import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Modal } from "../component/Modal.js";
import { EditContact } from "./EditContact.js";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
		showModal: false
	});

	const [editState, setEditState] = useState({
		showModal: false
	});

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src={
							"https://img.freepik.com/vector-premium/diseno-icono-cambiable-contacto-3d_656236-34.jpg?w=2000"
						}
						alt="Mike Anamendolla"
						className="rounded-circle mx-auto d-block img-fluid rounded-circle w-50"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn">
							<i className="fas fa-pencil-alt mr-3" onClick={() => setEditState({ showModal: true })} />
						</button>
						<button className="btn">
							<i className="fas fa-trash-alt" onClick={() => setState({ showModal: true })} />
						</button>
					</div>
					<label className="name lead">{props.name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.email}</span>
				</div>
				<EditContact
					show={editState.showModal}
					onClose={() => setEditState({ showModal: false })}
					item={props.item}
				/>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} item={props.item} />
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	name: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	address: PropTypes.string,
	item: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
