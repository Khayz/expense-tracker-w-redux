import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Transaction from '../Transaction/Transaction';
import * as actionTypes from '../../store/actions/actionTypes';

const TransactionList = () => {
	const transactions = useSelector(state => state.transactions);

	const dispatch = useDispatch();

	const deleteTransaction = id =>
		dispatch({ type: actionTypes.DELETE_TRANSACTION, id: id });

	return (
		<Fragment>
			<h3>History</h3>
			<ul id='list' className='list'>
				{transactions.map(transaction => (
					<Transaction
						key={transaction.id}
						delete={deleteTransaction}
						transaction={transaction}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default TransactionList;
