import React from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import { ImageList, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';

const BodegaDato = ({ id,nombre, slogan, logo, fotos }) => {
    const classes = useStyles();    

    return (
        <>
            <Typography className={classes.subtitulo2} align="center" variant="h4" color="inherit">
                <img src={require(`../img/${logo}`).default} height="50px" />   
                <Link className={classes.subtitulo} to={`/bodega/${id}`} underline="none"> {nombre} </Link>
            </Typography>
            <Typography className={classes.subtitulo3} align="center" variant="h6" color="inherit">{slogan}</Typography>

            <ImageList cols={3} >
                {fotos.map((item) => (
                    <ImageListItem key={item}>
                        <img src={require(`../img/${item}`).default} />
                    </ImageListItem>
                ))}
            </ImageList>

            <Link to={`/bodega/${id}`}> Ver detalles</Link>

        </>
    )
}

export default BodegaDato