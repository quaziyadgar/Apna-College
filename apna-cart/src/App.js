//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React,{ useState } from 'react';
import Footer from './components/Footer.js'
function App() {
  const productList = [
    {
      price : 9999,
      name : "Redmi Note 8",
      quantity  :0,
    },
    {
      price : 72999,
      name : "IPhone 10s Max",
      quantity : 0,
    },
    {
      price : 99999,
      name : "IPhone 13s Max",
      quantity : 0,
    },
    {
      price : 69999,
      name : "OnePlus 8",
      quantity : 0,
    }
  ]

   let [list, setProductList] = useState(productList);

  const incrementQuantity =(index)=>
  {
    console.log(index);
    let newProductList = [...list];
    console.log(newProductList);
    newProductList[index].quantity++;
    setProductList(newProductList);
  }
  const decrementQuantity =(index)=>
  {
    let newProductList = [...list];
    if(newProductList[index].quantity>0)
    newProductList[index].quantity--;
    setProductList(newProductList);
  }
  return (
    <>
    <Navbar />
    <main className='container mt-5'></main>
    <ProductList productList = {productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
    <Footer/>
    </>
  );
}

export default App;
