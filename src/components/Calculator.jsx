import React, { useState } from "react";
import './Calculator.css';

function Calculator() {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.value));
    };

    const clear = () => {
        setResult("");
    };

    const backspace = () => {
        setResult(result.slice(0, -1));
    };

    const calculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setResult(eval(result).toString());
        } catch (err) {
            setResult("Error");
        }
    };

    return (
        <div className='container'>
            <div className="calculator">
                <form>
                    <div className="display">
                        <input type="text" value={result} readOnly />
                    </div>
                    
                    <div className="box">
                        <div>
                            <input type="button" value="AC" onClick={clear} className="operator-btn func-btn" />
                            <input type="button" value="DL" onClick={backspace} className="operator-btn func-btn" />
                            <input type="button" value="." onClick={handleClick} className="operator-btn" />
                            <input type="button" value="/" onClick={handleClick} className="operator-btn" />
                        </div>
                        <div>
                            <input type="button" value="7" onClick={handleClick} />
                            <input type="button" value="8" onClick={handleClick} />
                            <input type="button" value="9" onClick={handleClick} />
                            <input type="button" value="*" onClick={handleClick} className="operator-btn" />
                        </div>
                        <div>
                            <input type="button" value="4" onClick={handleClick} />
                            <input type="button" value="5" onClick={handleClick} />
                            <input type="button" value="6" onClick={handleClick} />
                            <input type="button" value="+" onClick={handleClick} className="operator-btn" />
                        </div>
                        <div>
                            <input type="button" value="1" onClick={handleClick} />
                            <input type="button" value="2" onClick={handleClick} />
                            <input type="button" value="3" onClick={handleClick} />
                            <input type="button" value="-" onClick={handleClick} className="operator-btn" />
                        </div>
                        <div>
                            <input type="button" value="00" onClick={handleClick} />
                            <input type="button" value="0" onClick={handleClick} />
                            <input type="button" value="=" className="equal operator-btn" onClick={calculate} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Calculator;