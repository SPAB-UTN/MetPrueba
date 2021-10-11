import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import './style.css';

const Producto = ({ product, agregarACarrito }) => {

    const classes = useStyles();
    
    return (
        <Card className={classes.root} className="cardVino">
            <CardMedia className={classes.media} image={product.media.source} title={product.name} /> 
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5"> 
                        {product.name}
                    </Typography>
                    <Typography variant="h5"> 
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography className="textoDescription" dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary"/>                 
            </CardContent>  

            <CardActions disableSpacing className="buttonBase">
                <IconButton aria-label="Add to Cart" onClick={() => agregarACarrito(product.id, 1)}>
                    <AddShoppingCart />
                    <Typography variant="p" className="textoButton"> 
                        Agregar al Carrito
                    </Typography>
                </IconButton>
            </CardActions>   

        </Card>
    )
}

export default Producto















