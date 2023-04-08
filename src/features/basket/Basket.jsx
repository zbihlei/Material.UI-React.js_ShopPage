import { Divider, Drawer , List, ListItem, ListItemIcon, ListItemText, Typography, Button} from '@mui/material'
import React from 'react'
import {ShoppingBasket } from '@mui/icons-material';
import BasketItem from '../basketItem/BasketItem';


const Basket = (props) => {


  const {cartOpen, closeCart, removeFromOrder, order=[], BuyItem} = props; 

  return (
    <Drawer
    anchor='right'
    open={cartOpen}
    onClose={closeCart}
    >
    <List 
      sx={{width: '400px'}}>
        <ListItem>
            <ListItemIcon>
                <ShoppingBasket/>
            </ListItemIcon>
            <ListItemText primary='basket'/>
        </ListItem>
        <Divider/>

        {!order.length ? (
          <ListItem>
            empty!
          </ListItem>
          ) : (
        <>

        {order.map((item)=> (<BasketItem key ={item.name} {...item} removeFromOrder={removeFromOrder} BuyItem= {BuyItem}/>
          ))}

        <Divider/>
        <ListItem>
          <Typography style={{'marginTop': '40px', 'fontWeight': 'bold'}}>
          total:{' '}
              {order.reduce((acc, item) => {
              return acc + item.price * item.quantity;
                  }, 0)}{' '}£
          </Typography>
        </ListItem>
        <ListItem>
          <Button variant="contained" style={{'backgroundColor':'gray'}} onClick={()=>BuyItem(order)}>ORDER</Button>
        </ListItem>
        </>
        
        )}
    
    </List>
    </Drawer>
  )
}

export default Basket