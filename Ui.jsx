import React, { useMemo, useState } from 'react'
import './App.css'

const Ui = () => {

    const [height, setHeight] = useState(70);
    const [weight, setWeight] = useState(180);

    function onweightchange(event) {
        setWeight(event.target.value);
    }
    function onheightchange(event) {
        setHeight(event.target.value);
    }

    const output=useMemo(()=>{
        const calh=height/100;
        return (weight/(calh*calh)).toFixed(2)
    },[weight,height])

    return (
        <div>
            <h1>BMI Calculaator</h1>
            
            <div className='input-section'>

                <p className='slider-output'>Weight:{weight}Kg</p>
                <input className='input-slider' type="range" min="40" max="200" onChange={onweightchange} />

                <p className='slider-output'>Height:{height}Cm</p>
                <input className='input-slider' type="range" max='450' onChange={onheightchange} />

            </div>

            <div className="output-section">
                <p>Your BMI is</p>
                <p className='output'>{output}</p>
            </div>
        </div>
    )
}

export default Ui;
