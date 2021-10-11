import React, { useState, useEffect } from 'react';
import {Grid} from '@material-ui/core';
import Producto from './Producto/Producto';
import useStyles from './styles';
import './style-productos.css';

const Productos = ({ productos, agregarACarrito }) => {
    
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <main className={classes.content} className="marginBody">
            <input 
            className="inputVinos"
            type="text"
            placeholder="Buscar"
            onChange={(event) => {
                setSearchTerm(event.target.value);
            }} />
            <Grid container justify="center" spacing={4}> 
                {productos.filter((producto) => {
                    if(searchTerm == ""){
                        return producto
                    }else if (producto.name.toLowerCase().includes(searchTerm.toLowerCase()) || producto.sku.toLowerCase().includes(searchTerm.toLowerCase()) || producto.seo.title.toLowerCase().includes(searchTerm.toLowerCase()) ){
                        return producto
                    }
                }).map((producto) => (
                    <Grid item key={producto.id} xs={12} sm={6} md={4} lg={3} >
                        <Producto product={producto} agregarACarrito={agregarACarrito}/>
                    </Grid>
                )
                )}
            </Grid>
        </main>
    )
    
    
}
export default Productos