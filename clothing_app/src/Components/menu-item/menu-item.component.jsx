import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title , imageurl,size ,history,linkUrl,match})=>(
    <div className={`${size} menu-content`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div 
        style ={{
            backgroundImage:  `url(${imageurl})`
        }}
        className="background-image"/>
        <div className="text-content">
            <h1 className="title">{title}</h1>
                <span className="sub-title">
                    SHOP NOW
                </span>
            </div>
    </div>
);

export default withRouter(MenuItem);