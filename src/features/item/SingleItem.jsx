import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import './singleItem.scss';

const SingleItem = (props) => {

  const {id, name, description,price, setOrder} = props;

  return (
    <>
        <Grid item xs={12} md={4} className='single_item'>
      
        <Card className="card__wrapp">
          <PhoneIphoneIcon className='card__head'/>
          {/* <Typography className='card__head'>{name}</Typography> */}

          <CardContent className='card__content'>
          <Typography 
              variant='h6'
              component={'h3'}
              className="card__name">{name}
          </Typography>
          <Typography
            variant='body1'
             className="card__descr">{description}
          </Typography>
          </CardContent>
          <CardActions className='card__action'>
          <Typography className='card__price' >
           {price}  £
          </Typography>
          <Button variant='contained'
            onClick={()=>setOrder({
              id,name,price
            })}>
              BUY
            </Button>
          </CardActions>    
        </Card>
        </Grid>
       
  
    </>

    
  )
}

export default SingleItem