import * as actionTypes from '../actions/actionTypes';

const initialState = {
	transactions: [
		{ id: 1, text: 'Flower', amount: -20 },
		{ id: 2, text: 'Salary', amount: 300 },
		{ id: 3, text: 'Book', amount: -10 },
		{ id: 4, text: 'Camera', amount: 150 }
	]
};

const addTransaction = (state, action) => {
	return {
		transactions: [...state.transactions, action.transaction]
	};
};

const deleteTransaction = (state, action) => {
	const newTransactions = state.transactions.filter(
		transaction => transaction.id !== action.id
	);
	return {
		transactions: newTransactions
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TRANSACTION:
			return addTransaction(state, action);

		case actionTypes.DELETE_TRANSACTION:
			return deleteTransaction(state, action);

		default:
			return state;
	}
};

export default reducer;
