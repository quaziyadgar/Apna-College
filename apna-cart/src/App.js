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
   let [totalAmount, setTotalAmount] = useState(0);
  const incrementQuantity =(index)=>
  {
    //console.log(index);
    //console.log(list);
    let newProductList = [...list];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity++;
    //console.log(newProductList);
    setProductList(newProductList);
    newtotalAmount += newProductList[index].price;
    setTotalAmount(newtotalAmount);
    //console.log(productList);
  }
  const decrementQuantity =(index)=>
  {
    let newProductList = [...list];
    let newtotalAmount = totalAmount;
    if(newProductList[index].quantity>0)
    {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newtotalAmount);
    setProductList(newProductList);
  }
  return (
    <>
    <Navbar />
    <main className='container mt-5'></main>
    <ProductList productList = {list} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
    <Footer totalAmount={totalAmount}/>
    </>
  );
}

export default App;
