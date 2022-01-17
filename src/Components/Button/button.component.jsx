import React from "react";

class Button extends React.Component{
    
    render(){
        const {handleClick, locale,show} = this.props;
        return(
            <div>
                <button type="button" onClick={()=> handleClick(locale)}>{this.props.children}</button>
                {show && <p>Hello</p>}
            </div>
        )
    }
}
export default Button;