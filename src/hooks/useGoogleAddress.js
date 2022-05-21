import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddres = address => {
	console.log(address, 'usegoogle');
	const [map, setMap] = useState({ lat: 0, lng: 0 });
	const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCUSCPy4Q2igKtslqDA44y6I_D16vTpml0`;

	useEffect(() => {
		async function fetchData() {
			const response = await axios(API);
			console.log(response, 'usegoogle');
			setMap(response.data.results[0].geometry.location);
		}
		fetchData();
	}, []);

	return map;
};

export default useGoogleAddres;
