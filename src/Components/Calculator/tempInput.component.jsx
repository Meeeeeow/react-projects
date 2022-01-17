import React from "react";

const scaleNames ={
    c:'Celsius',
    f:'farenheit'
}
export const TempInputs = ({temperature,scale,handleChange}) =>{
        return(
            <div>
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}</legend>
                    <input 
                    type="number"
                    placeholder="Enter temperature"
                    value={temperature}
                    onChange={handleChange}/>
                </fieldset>
            </div>
        )
    }
