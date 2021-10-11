import React from 'react';
import useStyles from './styles';
import { ImageList, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import './style-bodega.css';

const BodegaDato = ({ id,nombre, slogan, logo, fotos }) => {
    const classes = useStyles();    

    return (
        <>
            <Link className="link-bodega" to={`/bodega/${id}`}>
                <img src={`images/${logo}`} /> 
                <h4 className="nameBodega" align="center">
                    {nombre} 
                </h4>
            </Link>
            <h6 className="sloganBodega" align="center">{slogan}</h6>

            <ImageList cols={3} className="gridBodega">
                {fotos.map((item) => (
                    <ImageListItem key={item}>
                        <img  className="grillaFoto" src={`images/${item}`} />
                    </ImageListItem>
                ))}
            </ImageList>

            <Link to={`/bodega/${id}`} className="detalleBodega"> Ver detalles</Link>

        </>
    )
}

const itemData = [
    {
        img: 'images/a16.jpg',
        title: 'Bodega A16',
    },
    {
        img: 'images/a161.jpg',
        title: 'Bodega A16',
    },
    {
        img: 'images/a162.jpg',
        title: 'Bodega A16',
    },
    {
        img: 'images/a163.jpg',
        title: 'Bodega A16',
    },
    {
        img: 'images/a164.jpg',
        title: 'Bodega A16',
    },
    {
        img: 'images/a165.jpg',
        title: 'Bodega A16',
    },
    {
        img: 'images/a166.jpg',
        title: 'Bodega A16',
    },
];

export default BodegaDato