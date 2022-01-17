import React,{Component} from "react";

const withCounter=(OriginalComponent)=>{
    class Newcomponent extends Component{
        state={
            clickHover:0
        }
    
        updateHover=()=>{
            this.setState((prevState) =>({clickHover : prevState.clickHover + 1}))
        }
        render(){
            const {clickHover} = this.state;
            return <OriginalComponent clickHover= {clickHover} updateHover={this.updateHover}/>
        }
    }
    return Newcomponent;
}
export default withCounter;