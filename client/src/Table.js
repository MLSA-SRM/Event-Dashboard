import React, { useState, useEffect } from 'react';
import './Table.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Table() {
	let [ dataparams, setDataParams ] = useState('');
	const columnDefs = [
		{
			headerName: 'Name',
			field: 'name',
			sortable: true,
			checkboxSelection: true,
			headerCheckboxSelection: true
		},
		{
			headerName: 'Reg No',
			field: 'regNo',
			sortable: true
		},
		{
			headerName: 'Email',
			field: 'email'
		}
	];

	const [ column, setColumn ] = useState(columnDefs);
	const rowData = [
		{
			name: 'Jatin Sachdeva',
			regNo: 'RA1911003010721',
			email: 'jatin9373@gmail.com',
			batch: 'c2'
		},
		{
			name: 'Louis Brad',
			regNo: 'RA1911003010734',
			email: 'loui286@gmail.com',
			batch: 'd2'
		},
		{
			name: 'Rakesh Rastogi',
			regNo: 'RA1911003010732',
			email: 'rakesh999936@gmail.com',
			batch: 'e1'
		},
		{
			name: 'Louis Brad',
			regNo: 'RA1911003010734',
			email: 'louis329936@gmail.com',
			batch: 'd1'
		}
	];
	const [ rowDataValues, setRowDataValues ] = useState(rowData);

	const sendMails = (e) => {
		// Just logging the email id of all the participants right now

		const selectedParticipants = dataparams.getSelectedNodes();
		const selectData = selectedParticipants.map((node) => node.data);
		console.log(selectData);
	};

	useEffect(() => {
		// Likewise data Can be fetched from server to make columns dynamic
		let newColumnField = [ ...column, { headerName: 'Batch', field: 'batch' } ];
		setColumn(newColumnField);
		// Fetch Rows data From server or database and update it with the rowData
		// fetch(
		// 	"""URL"""
		// )
		// 	.then((result) => result.json())
		// 	.then((rowData) => setRowDataValues(rowData));
	}, []);

	return (
		<div>
			<div
				className="ag-theme-material list-data"
				style={{
					height: '700px',
					width: '1000px'
				}}
			>
				<button className="sendMailsButton" onClick={sendMails}>
					Send Email To Participants
				</button>
				<AgGridReact
					animateRows
					onGridReady={(params) => setDataParams(params.api)}
					rowSelection="multiple"
					columnDefs={column}
					rowData={rowDataValues}
				/>
			</div>
		</div>
	);
}

export default Table;
