import React from 'react';
import Product from './Product';
export default function ProductList(props) {
    //console.log(props);
    return(
        
        props.productList.length > 0 ?
        props.productList.map((product,i)=>{
            //console.log(product);
            return < Product product = {product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={i} removeItem={props.removeItem}/>
        })
        :
        <h1>No Product Exists in the cart</h1>
        
    );
}