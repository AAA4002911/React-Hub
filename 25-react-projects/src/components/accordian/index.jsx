import { useState } from 'react';
import data from './data'
import './styles.css'

export default function Accordian() {
	const [selected, setSeleted] = useState(null);
	const [enableMultiSelection, setEnableMultiSelection] = useState(false);
	const [multipleSelected, setMultipleSelected] = useState([]);

	function handleSingleSelection(id) {
		return setSeleted(id == selected ? null : id);
	}

	function handleEnableMultiSelection() {
		setEnableMultiSelection(!enableMultiSelection);
		setSeleted(null);
		setMultipleSelected([]);
	}

	function handleMutliSelection(id) {
		let cpyMultiple = [...multipleSelected];
		const findIndexOfId = cpyMultiple.indexOf(id);

		if (findIndexOfId === -1) cpyMultiple.push(id)
		else cpyMultiple.splice(findIndexOfId, 1);

		setMultipleSelected(cpyMultiple);
	}

	return <div className="wrapper">
		<button onClick={handleEnableMultiSelection}>Enable Multi Selection </button>
		{enableMultiSelection ? <span>Multiple Selection</span> : <span>Single Selection</span>}
		<div className="accordian">
			{ data && data.length > 0 ? 
				(data.map((dataItem) => 
					<div className="item" key={"key - " + dataItem.id}>
						<div 
							onClick={
								enableMultiSelection
								? () => handleMutliSelection(dataItem.id)
								: () => handleSingleSelection(dataItem.id)
							}
							className="title"
						>
							<h3>{dataItem.question}</h3>
							<span>{selected == dataItem.id ? '🔼' : '🔽'}</span>
						</div>
						{
							selected == dataItem.id || multipleSelected.indexOf(dataItem.id) !== -1 ?
							<div className="content">{dataItem.answer}</div>
							: null
						}
					</div>
				)) 
			: 	<div> No data found ! </div>
			}
		</div>
	</div>;
}