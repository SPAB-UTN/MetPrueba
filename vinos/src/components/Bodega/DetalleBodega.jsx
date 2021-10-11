import React from 'react';
import useStyles from './styles';
import { Typography, Container, Button } from '@material-ui/core';
import bodegas from "../Datos/bodegas.json";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


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
                        <Container>
                            <Typography className={classes.subtitulo} align="center" variant="h4" color="inherit">
                                <img src={`images/${bod.logo}`.default} height="50px" />
                                {bod.nombre}
                            </Typography>
                            <div>
                                <img src={`images/${bod.portada}`.default} />
                            </div>
                            <Typography className={classes.subtitulo} align="center" variant="h6" color="inherit">
                                {bod.historia}
                            </Typography>
                            <Typography className={classes.subtitulo} align="center" variant="h6" color="inherit">
                                <b>{bod.finca}</b>  {bod.fincahistoria}
                            </Typography>
                            
                            <div>
                                <iframe src={bod.mapa} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div>
                                <Link to={`/bodega`}> Volver</Link> 
                            </div>                               
                        </Container>
                    </div>                     
            ))}
            </div>               
        </>       
    )
}
export default DetalleBodega
