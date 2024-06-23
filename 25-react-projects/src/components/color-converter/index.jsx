import { useState, useEffect } from 'react';

export default function ColorConverter() {
	const [rgbColor, setRgbColor] = useState({r: 0, g: 0, b: 0});
	const [hexColor, setHexColor] = useState('#000000');
	const [click, setClick] = useState('hex');

	function componentToHex(c) {
		let num = parseInt(c)
		if (Number.isNaN(num)) {
			alert(`${c} is not a number`)
			num = 0;
		}
		let hex = num.toString(16);
	  	return hex.length == 1 ? "0" + hex : hex;
	}

	function handleRgbToHex() {
		const generatedHex = "#" + componentToHex(rgbColor.r) + componentToHex(rgbColor.g) + componentToHex(rgbColor.b);
		setHexColor(generatedHex);
	}

	function handleHexToRgb() {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
	  	result = result ? {
	    	r: parseInt(result[1], 16),
	    	g: parseInt(result[2], 16),
	    	b: parseInt(result[3], 16)
	  	} : null;
	  	if (!result) { 
	  		result = {r: 0, g: 0, b: 0};
	  		alert('Hex must be six charachters long');
	  	}
	  	setRgbColor(result);
	}

	useEffect(() => {
		(click == 'hex') ? handleHexToRgb() : handleRgbToHex();
	}, [click]) 

	return (
		<div className="container">
			<div
				style={{
					display: "flex",
					padding: "1rem",
					gap: "1rem"
				}}
			>
				<div>	
					<label>rgb(</label>
					<input type="text" maxLength="3" size="3" value={rgbColor.r} onChange={(event) => setRgbColor({...rgbColor, 'r': event.target.value})}/>
					<label> , </label>
					<input type="text" maxLength="3" size="3" value={rgbColor.g} onChange={(event) => setRgbColor({...rgbColor, 'g': event.target.value})}/>
					<label> , </label>
					<input type="text" maxLength="3" size="3" value={rgbColor.b} onChange={(event) => setRgbColor({...rgbColor, 'b': event.target.value})}/>
					<label>) </label>
					<button onClick={() => {setClick('hex'); handleRgbToHex()}}>Convert RGB to HEX</button>
				</div>
				<div>
					<label>Hex </label>
					<input type="text" maxLength="7" size="3" value={hexColor} onChange={(event) => setHexColor(event.target.value)}/>
					&nbsp;
					<button onClick={() => {setClick('rgb'); handleHexToRgb()}}>Convert HEX to RGB</button>
				</div>
			</div>
			<div
				style={{
					padding: "2rem",
					margin: "1rem 0",
					background: hexColor,
					color: "white"
				}}
			>
				<h3>{click == 'hex' ? hexColor: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`}</h3>
			</div>
		</div>
	)
}