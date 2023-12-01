//import React from 'react';
import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import React, { useState } from "react";

function App() {
  const products = [
    {
      price: 16000,
      name: "Asus Zenfone MAX PRO M1",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += productList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= productList[index].price;
      setProductList(newProductList);
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      (newProductList[index].price * newProductList[index].quantity);

    newProductList.splice(index, 1);

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name,price) => {
    let newProductList = [...productList];

    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });

    setProductList(newProductList);
  };


  return (
    <>
      <NavBar />
      <AddItem  addItem={addItem} />
      <main className="container mt-3">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
