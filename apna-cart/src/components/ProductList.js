import React from 'react';
import Product from './Product';
export default function ProductList(props) {
    console.log(props);
    return(
        props.productList.map((product,i)=>{
            console.log(product);
            return < Product product = {product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={i}/>
        })
    );
}