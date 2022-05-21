import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Maps({ data }) {
	const mapStyles = {
		height: '50vh',
		width: '100%',
	};

	const defaultCenter = {
		lat: data.lat,
		lng: data.lng,
	};

	return (
		<LoadScript googleMapsApiKey="AIzaSyCUSCPy4Q2igKtslqDA44y6I_D16vTpml0">
			<GoogleMap
				mapContainerStyle={mapStyles}
				zoom={9}
				center={defaultCenter}
			>
				<Marker position={defaultCenter} />
			</GoogleMap>
		</LoadScript>
	);
}

export default Maps;
// https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCUSCPy4Q2igKtslqDA44y6I_D16vTpml0
