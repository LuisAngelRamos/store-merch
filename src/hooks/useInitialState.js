import { useState } from 'react';
import initialState from '../initialState';

// Custom hook sirve para inicializar un estado general de la app
// Se almacenaran el initialState y ademas añade 2 funciones para añadir
// o remover elementos al carrito de compras
const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = payload => {
		setState({
			...state,
			cart: [...state.cart, payload],
		});
	};

	const removeFromCart = payload => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id !== payload.id),
		});
	};

	const addToBuyer = payload => {
		setState({
			...state,
			buyer: [...state.buyer, payload],
		});
	};

	const addNewOrder = payload => {
		setState({
			...state,
			orders: [...state.orders, payload],
		});
	};

	return {
		state,
		addToCart,
		removeFromCart,
		addToBuyer,
		addNewOrder,
	};
};

export default useInitialState;
