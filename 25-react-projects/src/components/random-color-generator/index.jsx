import { useState, useEffect } from 'react';

export default function RandomColor() {
	const [typeOfColor, setTypeOfColor] = useState('hex');
	const [color, setColor] = useState('#000000');

	function handleCreateRandomColor() {
		const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A', 'B', 'C', 'D', 'E', 'F'];
		let hexColor = "#";
		
		switch(typeOfColor) {
			case "hex":
				for (let i = 0; i < 6; i++) {
					hexColor += hex[Math.floor(Math.random()*hex.length)]
				}
				setColor(hexColor);
				break;
			case "rgb":
				const r = Math.floor(Math.random()*256);
				const g = Math.floor(Math.random()*256);
				const b = Math.floor(Math.random()*256);
				setColor(`rgb(${r}, ${g}, ${b})`);
				break;
		}
	}

	useEffect(() => {
		handleCreateRandomColor();
	}, [typeOfColor])

	return (
		<div 
			className="container"
			style={{
				width: "100vw",
				height: "100vh",
				background: color
			}}
		>
			<button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
			<button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
			<button onClick={handleCreateRandomColor}>Generate Random Color</button>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "white",
					marginTop: "50px",
					flexDirection: "column"
				}}
			>
				<h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
				<h2>{color}</h2>
			</div>
		</div>
	)
}