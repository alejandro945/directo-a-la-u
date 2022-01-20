import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';


function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const AImageList = () => {
    return (
    <ImageList
        sx={{
            width: '100%', height: 450,
            transform: 'translateZ(0)',
        }}
        rowHeight={250}
        gap={1}
    >
        {itemData.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;
            return (
                <ImageListItem key={item.img} cols={cols} rows={rows}>
                    <img
                        {...srcset(item.img, 250, 200, rows, cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        sx={{
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        title={item.title}
                        subtitle={item.author}
                        position="top"
                        actionIcon={
                            <IconButton
                                sx={{ color: 'white' }}
                                aria-label={`star ${item.title}`}
                            >
                                <StarBorderIcon />
                            </IconButton>
                        }
                        actionPosition="left"
                    />
                </ImageListItem>
            );
        })}
    </ImageList>
    );
};
const itemData = [
    {
        img: '/images/WHW937.jpeg',
        title: 'Microbús Full Equipo',
        author: '17 pasajeros',
    },
    {
        img: '/images/WHV164.jpeg',
        title: 'Bus Full equipo',
        author: '40 pasajeros'
    },
    {
        img: '/images/TTU092.jpeg',
        title: 'Bus con Aire Acondicionado',
        author: '40 pasajeros',
        featured: true
    },
    {
        img: '/images/ZNK785.jpeg',
        title: 'Buseta con sillas reclinables',
        author: '30 pasajeros',
    },
    {
        img: '/images/SAP988.jpeg',
        title: 'Microbus de alto comfort',
        author: '20 pasajeros',
    }
];

export default AImageList;
