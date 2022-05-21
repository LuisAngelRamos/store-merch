import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.scss';

function Information() {
	const { state, addToBuyer } = useContext(AppContext);
	const [stateForm, setSateForm] = useState(false);
	const form = useRef(null);
	const navigate = useNavigate();

	const { cart } = state;

	const handleSubmit = () => {
		const formData = new FormData(form.current);
		// eslint-disable-next-line no-restricted-syntax
		for (const value of formData.values()) {
			if (!value) {
				// eslint-disable-next-line no-alert
				window.alert(`Falta el campo del formulario`);
				setSateForm(true);
				return;
			}
		}

		const buyer = {
			name: formData.get('name'),
			email: formData.get('email'),
			address: formData.get('address'),
			apto: formData.get('apto'),
			city: formData.get('city'),
			country: formData.get('country'),
			state: formData.get('state'),
			cp: formData.get('cp'),
			phone: formData.get('phone'),
		};
		addToBuyer(buyer);
		navigate('/checkout/payment');
	};

	return (
		<div className="Information">
			<div className="Information-content">
				<div className="Information-head">
					<h2>Informació de contacto</h2>
				</div>
				<div>
					<form className="Information-form" ref={form}>
						<input
							type="text"
							placeholder="Nombre completo"
							name="name"
							className="Information-form-input"
							required={stateForm}
						/>
						<input
							type="email"
							placeholder="Correo Electronico"
							name="email"
							className="Information-form-input"
							required={stateForm}
						/>
						<input
							type="text"
							placeholder="Dirección"
							name="address"
							className="Information-form-input"
							required={stateForm}
						/>
						<input
							type="number"
							placeholder="apto"
							name="apto"
							className="Information-form-input"
							required={stateForm}
						/>
						<input
							type="text"
							placeholder="Ciudad"
							name="city"
							className="Information-form-input"
							required={stateForm}
						/>
						<input
							type="text"
							placeholder="Pais"
							name="country"
							className="Information-form-input"
							required={stateForm}
						/>
						<input
							type="text"
							placeholder="Estado"
							name="state"
							className="Information-form-input"
							required={stateForm}
						/>
						<input
							type="number"
							placeholder="Codigo Postal"
							name="cp"
							className="Information-form-input"
							required={stateForm}
						/>
						<input
							type="number"
							placeholder="Telefono"
							name="phone"
							className="Information-form-input"
							required={stateForm}
						/>
					</form>
				</div>
				<div className="Information-buttons">
					<div className="Information-back">
						<Link to="/checkout">Regresar</Link>
					</div>
					<div className="Information-next">
						<button type="submit" onClick={() => handleSubmit()}>
							Pagar
						</button>
					</div>
				</div>
			</div>
			<div className="Information-sidebar">
				<h3>Pedido:</h3>
				{cart.map(item => (
					<div key={item.id} className="Information-item">
						<div className="Information-element">
							<h4>{item.name} Name</h4>
							<span>${item.price}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Information;
