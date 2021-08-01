import React from 'react';
import './custom-button.styles.scss';

const CustomButton =({children ,GoogleSignin, ...otherProps})=>(
    <button className={`${GoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);
export default CustomButton;