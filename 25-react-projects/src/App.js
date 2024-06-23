import React from 'react';
import "./App.css";
import Accordian from './components/accordian';
import RandomColor from './components/random-color-generator';
import ColorConverter from './components/color-converter';
import StarRating from './components/star-rating';

function App() {
    return (
        <div className="App">
            {/* Star Rating */}
            <StarRating noOfStars={10} size={50}/>

            {/* Color Converter */}
            <ColorConverter/>

            {/* Dandom Color Generator */}
            <RandomColor/>

            {/* Accordian Component */}
            <Accordian/>
        </div>
    )
}
export default App;