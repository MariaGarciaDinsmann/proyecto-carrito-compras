import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Item from './Item'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Fragment } from "react"
import CircularProgress from '@mui/material/CircularProgress';

export default function ItemList({ cardList, setCurrentProduct }) {

    if (cardList.length===0)
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '200px', }}>
                <CircularProgress />
            </Box>
        )
    else

        return (
            <Fragment>
                <Container>
                    <Typography variant="h5" gutterBottom component="div" color="primary" mt={3}>
                        Nuestras ofertas
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            backgroundColor: '#e9e5e5',
                            paddingLeft: 0.5,
                            paddingBottom: 0.7,
                            paddingTop: 0.6,
                            '& > :not(style)': {
                                m: 1,
                                width: 270,
                                height: 380,
                                backgroundColor: '#f3f2f2',
                                textDecoration: 'none',
                            },
                        }}>
                        {cardList.map((card) => {

                            return (
                                <Link to={`/productos/${card.id}`} onClick={() => setCurrentProduct(card)}>
                                    <Item key={card.id} {...card} />
                                </Link>

                            )
                        })}
                    </Box>
                </Container>
            </Fragment>
        )
}