import React from 'react';

import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview =({title ,items}) =>(
    <div className="Overall_preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="inner-preview">
            {
                items.filter((item , index) => index < 4)
                .map(item =>(
                    <CollectionItem key ={item.id} 
                    name = {item.name}
                    imageUrl = {item.imageUrl}
                    price = {item.price}
                    />
                ))
            }
        </div>    
    </div>
);

export default CollectionPreview;