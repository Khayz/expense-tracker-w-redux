import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes';

const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState('');

	const dispatch = useDispatch();
	const addTransaction = newTransaction =>
		dispatch({
			type: actionTypes.ADD_TRANSACTION,
			transaction: newTransaction
		});

	const submitHandler = event => {
		event.preventDefault();

		const newTransaction = {
			id: Math.random() * 1000,
			text: text,
			amount: +amount
		};

		addTransaction(newTransaction);
		setText('');
		setAmount('');
	};

	return (
		<Fragment>
			<h3>Add new transaction</h3>
			<form onSubmit={submitHandler}>
				<div className='form-control'>
					<label htmlFor='text'>Text</label>
					<input
						value={text}
						onChange={event => setText(event.target.value)}
						type='text'
						placeholder='Enter text...'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						value={amount}
						onChange={event => setAmount(event.target.value)}
						type='number'
						placeholder='Enter amount...'
					/>
				</div>
				<button className='btn'>Add transaction</button>
			</form>
		</Fragment>
	);
};

export default AddTransaction;
