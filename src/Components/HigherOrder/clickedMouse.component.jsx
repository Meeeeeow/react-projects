import React from "react";
import withCounter from "./withCounter.component";
const ClickedMouse =({clickHover,updateHover})=>{
    return(
            <button
            type="button"
            onClick={updateHover}>Clicked {clickHover} times.</button>
    )
}
export default withCounter(ClickedMouse);


// export const  ClickedMouse =({clickMouse,updateHover})=>(
//     <button
//         type="button"
//         onClick={updateHover}>
//             Clicked {clickMouse} times.
//             </button>
// );
