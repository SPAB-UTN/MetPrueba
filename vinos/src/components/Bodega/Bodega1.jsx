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

const itemData = [
    {
        img: 'images/a16.jpg',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
];

export default BodegaDato