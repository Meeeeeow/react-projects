// import React,{Component} from "react";
// import {ClickedMouse} from "../HigherOrder/clickedMouse.component";
// import { HoveredMouse } from "../HigherOrder/hoveredMouse.component";
// class ControlAction extends Component{
//     constructor(){
//         super();

//         this.state={
//             clickCount:0,
//             clickHover : 0
//         }
//     }
//     updateHover=(e)=>{
//         if(e.target.type === 'button')
//             this.setState((preveState) =>({clickCount : preveState.clickCount + 1}));
//         else
//             this.setState((preveState) =>({clickHover : preveState.clickHover + 1}));
//     }
//     render(){
//         const {clickCount,clickHover} = this.state;
//         return(
//             <div>
//                <ClickedMouse clickMouse = {clickCount} updateHover={this.updateHover}/>
//                <HoveredMouse clickHover = {clickHover} updateHover={this.updateHover}/>
//             </div>
//         )

//     }
// }
// export default ControlAction;