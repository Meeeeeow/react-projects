import React,{Component} from "react";
import {WaterBoil} from '../BoilWater/boilwater.component'
import {TempInputs} from "../Calculator/tempInput.component";
import { toCelsius,toFarenheit,converter } from "../../Converter/converter.component";
class TempInput extends Component{
    constructor(){
        super();

        this.state={
            temperature:'',
            scale:'c'
        }
    }
    tempChange =(e,scale)=>{
        this.setState({
            temperature:e.target.value,
            scale
        })
    }
    render(){
        const {temperature,scale} = this.state;
        const celsius =  scale === 'f' ? converter(temperature,toCelsius) : temperature;
        const farenheit = scale === 'c' ? converter(temperature,toFarenheit) : temperature;
        return(
            <div>
                <TempInputs
                temperature = {celsius}
                scale='c'
                handleChange={(e)=>this.tempChange(e,scale)}/>
                <TempInputs
                temperature = {farenheit}
                scale='f'
                handleChange={(e)=>this.tempChange(e,scale)}/>
                <WaterBoil celsius={temperature}/>
            </div>
        )
    }
}
export default TempInput;