import React from 'react';
import shopData from './shop.data';
import CollectionPreview from '../../Components/preview-collection/preview-collection.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);


        this.state ={
            collections: shopData
        };
    }


    render(){
        const {collections} = this.state;
        return (<div className="shop-page">
            {
                collections.map(collection => (
                        
                        <CollectionPreview  key = {collection.id} title ={collection.title} items ={collection.items}/>
                    ))
            }
            
        </div>);
    }

    
}

export default ShopPage;