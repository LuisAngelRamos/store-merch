import React, { useContext } from 'react';
// El paquete esta decrepado se instalo usando npm --legacy-peer-deps
import { PayPalButton } from 'react-paypal-button';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import handleSummTotal from '../utils';
import '../styles/components/Payment.scss';

function Payment() {
	const { state, addNewOrder } = useContext(AppContext);
	const { cart, buyer } = state;
	const navigate = useNavigate();

	const paypalOptions = {
		clientId:
			'ATi35HHJcv97hJx3SU2y5ZL89nUAb2-NMHEiSJDDAyibmBMtF3SoTn9iKLPAwtCkYrD1WBPMm9uttlkj',
		intent: 'capture',
		currency: 'USD',
	};

	const buttonStyles = {
		layout: 'vertical',
		shape: 'rect',
	};

	const handlePaymentSuccess = data => {
		if (data.status === 'COMPLETED') {
			const newOrder = {
				buyer,
				product: cart,
				payment: data,
			};

			addNewOrder(newOrder);
			navigate('/checkout/success');
		}
	};

	return (
		<div className="Payment">
			<div className="Payment-content">
				<h3>Resumen del pedido:</h3>
				{cart.map(item => (
					<div key={item.id} className="Payment-item">
						<div className="Payment-element">
							<h4>{item.title}</h4>
							<span>$ {item.price}</span>
						</div>
					</div>
				))}
				<div className="Payment-button">
					<PayPalButton
						paypalOptions={paypalOptions}
						buttonStyles={buttonStyles}
						amount={handleSummTotal(cart)}
						onPaymentStart={() => console.log('Start Payment')}
						onPaymentSuccess={data => handlePaymentSuccess(data)}
						onPaymentError={error => console.log(error)}
						onPaymentCancel={data => console.log(data)}
					/>
				</div>
			</div>
			<div />
		</div>
	);
}

export default Payment;

// Validar formulario y mostrar total en success

// AIzaSyCUSCPy4Q2igKtslqDA44y6I_D16vTpml0
