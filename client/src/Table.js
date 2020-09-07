import React, { useState } from 'react';
import './Table.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Table() {
	let [ dataparams ] = useState('');
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
	const rowData = [
		{
			name: 'Louis Brad',
			regNo: 'RA1911003010734',
			email: 'loui286@gmail.com'
		},
		{
			name: 'Rakesh Rastogi',
			regNo: 'RA1911003010732',
			email: 'rakesh999936@gmail.com'
		},
		{
			name: 'Louis Brad',
			regNo: 'RA1911003010734',
			email: 'louis329936@gmail.com'
		},
		{
			name: 'Rakesh Rastogi',
			regNo: 'RA1911003010732',
			email: 'rakesh999936@gmail.com'
		},
		{
			name: 'Jatin Sachdeva',
			regNo: 'RA1911003010721',
			email: 'jatin9373@gmail.com'
		},
		{
			name: 'Louis Brad',
			regNo: 'RA1911003010734',
			email: 'loui286@gmail.com'
		},
		{
			name: 'Rakesh Rastogi',
			regNo: 'RA1911003010732',
			email: 'rakesh999936@gmail.com'
		},
		{
			name: 'Louis Brad',
			regNo: 'RA1911003010734',
			email: 'louis329936@gmail.com'
		}
	];

	const sendMails = (e) => {
		// Just logging the email id of all the participants right now

		const selectedParticipants = dataparams.getSelectedNodes();
		const selectData = selectedParticipants.map((node) => node.data);
		console.log(selectData);
	};

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
					onGridReady={(params) => (dataparams = params.api)}
					rowSelection="multiple"
					columnDefs={columnDefs}
					rowData={rowData}
				/>
			</div>
		</div>
	);
}

export default Table;
