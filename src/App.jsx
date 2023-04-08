import { Container } from "@mui/system";
import Header from "./features/header/Header";
import Search from "./features/search/Search";
import ItemsList from "./features/itemsList/ItemsList";
import Basket from "./features/basket/Basket";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


const App=()=> {
  const [search, setSearch] =useState('');
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [isCardOpen, setCardOpen] = useState(false); 
  const [buyed, setBuyed] = useState([]);

  useEffect(()=>{
    onRequest()
    // eslint-disable-next-line
  },[])

  
  const onRequest=()=>{
    axios.get("http://localhost:3001/goods")
    .then((arr) =>setGoods(arr.data))
  }


  //add to basket
  const addNewOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex(
        (item) => item.id === goodsItem.id
    );

    if (indexInOrder > -1) {
        quantity = order[indexInOrder].quantity + 1;

        setOrder(order.map((item) => {
                if (item.id !== goodsItem.id) return item;

                return {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity,
                };
            }),
        );
    } else {
        setOrder([
                ...order,
                {
                    id: goodsItem.id,
                    name: goodsItem.name,
                    price: goodsItem.price,
                    quantity,
                },
            ],
        );
    }

   
};


//search
const onSearch =(e)=>{

  if(!e.target.value){
    onRequest()
    setSearch('');
  }

  setSearch(e.target.value);
  setGoods(goods.filter((good)=>
    good.name.toLowerCase().includes(e.target.value.toLowerCase())
  ))
}
//delete from basket
  const removeFromOrder = (goodsItem) => {
      setOrder(order.filter((item) => item.id !== goodsItem));
  };


  //buy
  const BuyItem =(order)=>{
  const id = uuidv4();
  axios.post("http://localhost:3001/buyed",{
    id:id,
    order: order
  })
  .then(setBuyed(order))
  .then(setOrder([]))
  .then(setCardOpen(false))
}

  return (
    <>
    <Header
    orderLen = {order.length}
    handleCart = {()=> setCardOpen(true)}/>
    <Container
       sx={{mt: '2rem', mb: '5rem'}}>

      <Search
      value ={search}
      onSearch={onSearch}
      />
      <ItemsList
      products = {goods}
      setProducts = {setGoods}
      setOrder={addNewOrder}
      buyed = {buyed}
      setBuyed={setBuyed}
      onRequest ={onRequest}
      />

    </Container>
    <Basket
    order={order}
    removeFromOrder={removeFromOrder}
    cartOpen= {isCardOpen}
    closeCart = {() => setCardOpen(false)}
    BuyItem= {BuyItem}
    />
    </>
  );
}

export default App;
