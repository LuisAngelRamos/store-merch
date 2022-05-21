import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import handleSummTotal from '../utils';
import '../styles/components/Checkout.scss';

function Checkout() {
	const { state, removeFromCart } = useContext(AppContext);
	const { cart } = state;

	const handleRemove = product => {
		removeFromCart(product);
	};

	return (
		<div className="Checkout">
			<div className="Checkout-content">
				{cart.length > 0 ? (
					<h3>Lista de Pedidos:</h3>
				) : (
					<h3>Sin Pedidos...</h3>
				)}
				{cart.map(item => (
					<div key={item.id} className="Checkout-item">
						<div className="Checkout-element">
							<h4>{item.name} name</h4>
							<span>${item.price}</span>
						</div>
						<button
							type="button"
							onClick={() => handleRemove(item)}
						>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
				))}
			</div>
			{cart.length > 0 && (
				<div className="Checkout-sidebar">
					<h3>{`Precio Total: $ ${handleSummTotal(cart)}`}</h3>
					<Link to="/checkout/information">
						<button type="button">Continuar Pedido</button>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Checkout;
