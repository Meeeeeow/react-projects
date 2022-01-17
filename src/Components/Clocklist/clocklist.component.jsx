import React from "react";
import Clock from "../Clocks/clock.component";

export const ClockList = ({quantity=[]}) =>(
    <div>
        {
            quantity.map(q =>(
                <Clock key = {q}>Hello World </Clock>
            ))
        }
    </div>
);