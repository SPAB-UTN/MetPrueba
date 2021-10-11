import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import BodegaDatos from './Bodega1';
import bodegas from "../Datos/bodegas.json";
import './style-bodega.css';

const Bodega = () => {
    const classes = useStyles();
    return (
        <>
            <Container className="marginBody">
                <h4 className="titleBodega" align="center">
                    BODEGAS
                </h4>
                {bodegas.map(( bodega) => 
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