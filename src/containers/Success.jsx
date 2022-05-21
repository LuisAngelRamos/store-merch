import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.scss';
import useGoogleAddres from '../hooks/useGoogleAddress';
import Maps from '../components/Maps';

function Success() {
	const { state } = useContext(AppContext);
	const { buyer } = state;
	console.log(buyer);
	const location = useGoogleAddres(buyer[0].address);

	return (
		<div className="Success">
			<div className="Success-content">
				<h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
				<span>Tu pedido llegara en 3 dias a tu direccion:</span>
				<div className="Success-map">
					<Maps data={location} />
				</div>
			</div>
		</div>
	);
}

export default Success;
