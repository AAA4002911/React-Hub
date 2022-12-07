import { useState } from "react";
import "./../styles/Calculator.css";


const Temp = () => {
    const [nums, setNums] = useState({firstNum: 0, secondNum: 0});
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(null);
    const calc = () => {
        console.log(nums, operator);
        const num1 = parseInt(nums.firstNum);
        const num2 = parseInt(nums.secondNum);
        if (operator === '+') setResult(num1 + num2);
        else if (operator === '-') setResult(num1 - num2);
        else if (operator === '*') setResult(num1 * num2);
        else if (operator === '/') setResult(num1 / num2);
    }
    return (
        <div id="calc">
            <input autoFocus type= "number" onChange={(event) => {setNums({...nums, firstNum: event.target.value})} }/>
            <input type= "number" onChange={(event) => {setNums({...nums, secondNum: event.target.value})} }/>
            <select name="operator" id="operator">
                <option value="+" onClick={() => {setOperator("+")}}>Addition</option>
                <option value="-" onClick={() => {setOperator("-")}}>Subtract</option>
                <option value="*" onClick={() => {setOperator("*")}}>Multiply</option>
                <option value="/" onClick={() => {setOperator("/")}}>Division</option>
            </select>
            <button onClick={() => calc()}>Result</button>
            <p id="result">{result}</p>
        </div>
    )
}

export default Temp;