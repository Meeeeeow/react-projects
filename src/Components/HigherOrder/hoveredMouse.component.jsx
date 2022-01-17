import React from "react";
import withCounter from "./withCounter.component";
const HoveredMouse=({clickHover,updateHover})=> (
    <h1 onMouseOver={updateHover}>Hovered {clickHover} times.</h1>
);
export default withCounter(HoveredMouse);

// export const HoveredMouse =({clickHover,updateHover}) =>(
//     <h1 onMouseOver={updateHover}>Hovered {clickHover} times.</h1>
// );