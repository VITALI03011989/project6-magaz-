import React from "react";
import "./index.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Corzina from "./components/Corzina";
import Search from "./components/Search";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue,setSearchValue] = useState('')

  // React.useEffect(()=> {
  // fetch('https://65b5eb1ada3a3c16ab0007e2.mockapi.io/items').then((res) => {return res.json();
  // }).then((json) =>{setItems(json)})},[])
  useEffect(() => {
    axios.get("https://65b5eb1ada3a3c16ab0007e2.mockapi.io/items").then((res) => {
         setItems(res.data)})
    axios.get("https://65b5eb1ada3a3c16ab0007e2.mockapi.io/cart").then((res) => {
          setCartItems(res.data)});
  }, []);

  const onAddToCart = async (obj) => { 
   const response = await  axios.post("https://65b5eb1ada3a3c16ab0007e2.mockapi.io/cart",obj);
    setCartItems((prev) => [...prev, response.data])}

  const onRemoveItem = async (id) => {
     await axios.delete(`https://65b5eb1ada3a3c16ab0007e2.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item=> item.id !== id));
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Corzina
          onClose={() => setCartOpened(false)}
          items={cartItems}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Search  searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="combloK">
        {items?.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item,index) => {
            const onPlus =() => onAddToCart(item)
            return (<Card
              key={item.title}
              title={item.title}
              price={item.price}
              image={item.image}
              onPlus={onPlus}
            />)           
})}
      </div>
    </div>
  );
}
export default App;
