import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Item from './Item'

export default function ItemList({cardList}) {    
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap', 
                    backgroundColor:'#e9e5e5',
                    paddingLeft: 0.5,                   
                    '& > :not(style)': {
                        m: 1,
                        width: 270,
                        height: 410,
                        backgroundColor:'#f3f2f2',
                    },
                }}>
                {cardList.map((card) => { return <Item key={card.id} initial={1} {...card} /> })}
            </Box>
        </Container >
    )
}