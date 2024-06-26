"use client";
import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { url } from "@/utility";
// import reducer from "./reducer";

// const initialState ={
    
// }
const ShopContext = createContext();
const ShopContextProvider = ({ children }) => {
  // const [state,dispach] = useReducer(reducer,initialState);
  const [all_product,setallproduct]=useState([]);
   useEffect(()=>{
      const getAlldata=async()=>{
         const res=await axios.get(`${url}/api/products`);
         setallproduct(res.data);
      }
      getAlldata();
   },[])
   console.log(all_product)
   const getDefaltCart = ()=>{
    const cartArr=[];
    for (let index = 0; index < all_product.length; index++) {
        cartArr[index]=false;
     
    }
    return cartArr;
 }

  const [itemCarts,setItemCarts]=useState(getDefaltCart());
  const [new_arr, setNewarr] = useState(all_product);
  console.log("false array with true",itemCarts);
  const increse = (id) => {
    const newCartItems = new_arr.map((item) => {
      if ((item.id)===(id)) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
      }
      return item;
      
    });
    setNewarr(newCartItems);
  };
  const decrease = (id) => {
    const newCartItems = new_arr.map((item) => {
      if (item.id === id) {
        // Only decrement if quantity exists and is greater than 1
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
      }
      return item;
    });
    setNewarr(newCartItems);
  };
  const addToCart =(productId)=>{
     setItemCarts((prev)=>({...prev,[productId]:true}))
     
      
  }
  const removeToCart =(productId)=>{
    setItemCarts((prev)=>({...prev,[productId]:false}))
     
  }
  
  const getTotalCartAmount =()=>{
      let totalAmount=0;
      for(const item in itemCarts){ //item gives index because in is here(const item in itemCarts)
          if(itemCarts[item]===true){
              let iteminfo=new_arr.find((product)=>product.id===Number(item))
              if(iteminfo.quantity===undefined){
                totalAmount+=iteminfo.new_price;
              }else{
                totalAmount+=iteminfo.new_price*iteminfo.quantity;
              }
              
          }
      }
      
      return totalAmount;
  }
  const lencart =()=>{
      let len=0;
      for(const item in itemCarts){
          if(itemCarts[item]===true){
              len++;
          }
      }
      return len;
  }
  const totalCartItems =()=>{
      let totalitems=0;
      for(const item of new_arr){ //item gives one element in array because in is here (const item of new_arr)
          if(itemCarts[item.id]===true){
            
            totalitems+=(item.quantity!==undefined?item.quantity:1);
          }
      }
      return totalitems;
  }
  const contextValue = {all_product,addToCart,itemCarts,removeToCart,getTotalCartAmount,lencart,increse,decrease,new_arr,totalCartItems};
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export { ShopContext ,ShopContextProvider};
