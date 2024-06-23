import React from 'react';
import "./App.css";
import Accordian from './components/accordian';
import RandomColor from './components/random-color-generator';
import ColorConverter from './components/color-converter';

function App() {
    return (
        <div className="App">
            {/* Accordian Component */}
            <Accordian/>

            {/* Dandom Color Generator */}
            <RandomColor/>

            {/* Color Converter */}
            <ColorConverter/>
        </div>
    )
}
export default App;