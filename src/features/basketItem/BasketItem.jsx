import { Close } from '@mui/icons-material';
import { IconButton, ListItem, Typography} from '@mui/material';
import React from 'react';
import './basketItem.scss';

const BasketItem = ({id, name, price, quantity,removeFromOrder}) => {


  return (
    <>

    <ListItem className='basket_item_wrapp'>
        <Typography className='basket__name'>
        {name}      
        </Typography>
        <Typography className='basket__quantity'>
        {quantity} 
        </Typography>
        <Typography className='baseket__price'>
        {price}
        </Typography>
        <IconButton
        onClick={()=>removeFromOrder(id)}
        ><Close/></IconButton>
    </ListItem>
    </>
  )
}

export default BasketItem;