import { Button, Grid, ListItem, Typography } from '@mui/material'
import React from 'react'
import './itemsList.scss';
import SingleItem from '../item/SingleItem';

const ItemsList = (props) => {
  
  const {products, setOrder, buyed, onRequest, setBuyed} = props;

  //you buy it page
   const youBuyIt =()=>{

    const reloadPage =()=>{
      onRequest();
      setBuyed([]);
    }

    return(
      <>
      <Typography   
      variant='h1'
      component='span'
      className='buy__it_text'
      >you buy it!</Typography>
      <ListItem className='back__btn'>
       <Button  onClick={()=>reloadPage()} variant="contained">BACK</Button>
      </ListItem>
      </>
    )
  }


  const renderGoods =(goods)=>{
    return goods.map(({ ...props})=>{
    
      return (
        <SingleItem key = {props.name} {...props} setOrder={setOrder}/>
      )
    })
  } 

  const goodsList = renderGoods(products);
 
  return (
    <Grid container rowSpacing={2} columnSpacing ={{xs: 1, sm: 2, md: 3}}>
      {buyed.length > 0 ? youBuyIt() : goodsList }
    </Grid>
  )
}

export default ItemsList