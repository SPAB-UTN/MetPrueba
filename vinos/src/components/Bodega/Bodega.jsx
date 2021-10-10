import React from 'react';
import { Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import BodegaDatos from './Bodega1';
import bodegas from "../datos/bodegas.json";


const Bodega = () => {
    const classes = useStyles();
    return (
        <>
            <Container>
                <div className={classes.barra} />

                <Typography className={classes.titulo} align="center" variant="h4" color="inherit">
                    BODEGAS
                </Typography>

                {bodegas.map((bodega) =>
                    <BodegaDatos 
                        id={bodega.id}
                        nombre={bodega.nombre}
                        logo={bodega.logo}
                        slogan={bodega.slogan}
                        telefono={bodega.telefono}
                        fotos={bodega.fotos}
                        
                    />
                )} 

            </Container>
        </>
    )
}


export default Bodega