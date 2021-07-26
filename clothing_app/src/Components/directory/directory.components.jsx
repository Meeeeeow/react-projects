import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[{
                title:'Hats',
                imageurl:'https://i.ibb.co/cvpntL1/hats.png',
                id:1,
                linkUrl:'hats'
            },
            {
                title:'Jackets',
                imageurl:'https://i.ibb.co/px2tCc3/jackets.png',
                id:2,
                linkUrl:''
            },
            {
                title:'Sneakers',
                imageurl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                id:3,
                linkUrl:''
            },
            {
                title:'Womens',
                imageurl:'https://i.ibb.co/GCCdy8t/womens.png',
                size:'large',
                id:4,
                linkUrl:''
            },
            {
                title:'Mens',
                imageurl:'https://i.ibb.co/R70vBrQ/men.png',
                size:'large',
                id:5,
                linkUrl:''
            }
            
        ]
        };
    }

    render(){
        return(
            <div className="content">
                {
                    this.state.sections.map(({title , imageurl,id , size,linkUrl}) =>(
                        
                        
                        <MenuItem key={id} title = {title.toUpperCase()} imageurl = {imageurl}  size = {size} linkUrl ={linkUrl} />


                    ))
                }
            </div>
        )
    }
}

export default Directory;