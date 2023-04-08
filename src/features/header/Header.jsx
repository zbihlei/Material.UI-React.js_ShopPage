import React from 'react'
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import './header.scss';
import AppleIcon from '@mui/icons-material/Apple';
import  LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'; 


const Header =({handleCart, orderLen })=> {

  return (

  <AppBar
  position='static'
  sx={{bgcolor: 'gray'}}>
    <Toolbar>
        <Typography
        variant='h6'
        component='span'
        sx={{ flexGrow:1}}>
            <AppleIcon/>
        </Typography>
        <IconButton
        color='inherit'
        onClick={handleCart}
        >
            <Badge
            className='badge'
            badgeContent={orderLen}
            >
              <LocalGroceryStoreIcon/>

            </Badge>
        </IconButton>
    </Toolbar>
  </AppBar>
  
    );
}

export default Header