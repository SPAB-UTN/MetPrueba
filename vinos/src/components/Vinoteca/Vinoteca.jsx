import React from 'react'
import { Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import './style-vinoteca.css';

const Vinoteca = () => {
    const classes = useStyles();
    return (

        <Container className="marginBody">
            <div className="vinotecaPage">
                <Typography className={classes.header} align="center" variant="h1">
                        Proyecto final Metodología de la Investigación
                </Typography>
                <Typography className={classes.sub} align="center" variant="h2">
                        Integrantes: Spalenza, Potichkin, Aguilar, Boschi
                </Typography>
                <Typography className={classes.body} align="center" variant="h4">
                        Nuestro proyecto consiste en generar otra herramienta para el turismo vitivinícola,
                        acercando tanto al turista internacional, nacional y local a las rutas del vino y posibilitar otras vías de información y compra de productos.
                        Mendoza se posiciona como la provincia que presenta mayor proporción de turistas del vino con relación a los turistas que ingresan a cada provincia 
                        y dada la necesidad actual para posicionar un producto, esto se convierte en una herramienta para proporcionar al usuario la información necesaria 
                        de la bodega y sus vinos.
                        El proyecto propuesto brinda al usuario una guía turística virtual a bodegas, ofreciendo su ubicación, conocer su historia. También permite 
                        la selección de artículos, la incorporación al carro de compras, la edición de la compra y el formulario para registrarla.
                        El mismo esta realizado con las tecnologias react y javascript.
                </Typography>
            </div>
        </Container>

    )
}

export default Vinoteca