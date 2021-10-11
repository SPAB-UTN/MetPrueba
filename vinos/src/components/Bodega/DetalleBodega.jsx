import React from 'react';
import useStyles from './styles';
import { Typography, Container } from '@material-ui/core';
import bodegas from "../Datos/bodegas.json";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './style-bodega.css';

const DetalleBodega = () =>{
    
    const classes = useStyles();
    const { id } = useParams();
    let bodega = bodegas.filter((detBodega) => detBodega.id == id);

    return (
        <>   
            <div className={classes.barra} />
            <div>
                {bodega.map((bod, index) => (
                    <div key={index}>
                        <Container className="marginBody">
                            <img className="logoDetalle" src={`../images/${bod.logo}`} />
                            <h4 className="titleBodega" align="center">
                                {bod.nombre}
                            </h4>
                            <div>
                                <img className="portadaDetalle" src={`../images/${bod.portada}`} />
                            </div>
                            <Typography className={classes.subtitulo} align="center" variant="h6" color="inherit">
                                {bod.historia}
                            </Typography>
                            <Typography className={classes.subtitulo} align="center" variant="h6" color="inherit">
                                <b>{bod.finca}</b>  {bod.fincahistoria}
                            </Typography>
                            
                            <div className="iframeMapa">
                                <iframe src={bod.mapa} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div>
                                <Link to={`/bodega`} className="detalleBodega">Volver</Link> 
                            </div>                               
                        </Container>
                    </div>                     
            ))}
            </div>               
        </>       
    )
}
export default DetalleBodega
