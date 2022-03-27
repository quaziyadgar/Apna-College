//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React,{ useState } from 'react';
function App() {
  const productList = [
    {
      price : 9999,
      name : "Redmi Note 8",
      quantity  :9,
    },
    {
      price : 72999,
      name : "IPhone 10s Max",
      quantity : 5,
    }
  ];

  let [productList, setProductList] = useState(products);

  incrementQuantity =(index)=>
  {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  }

  return (
    <>
    <Navbar />
    <main className='container mt-5'></main>
    <ProductList productList = {productList} incrementQuantity={this.incrementQuantity}/>
    </>
  );
}

export default App;
