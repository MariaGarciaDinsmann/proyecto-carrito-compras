import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Detail from './Detail'

export default function ItemDetail({ cardDetail }) {

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 270,
                        height: 410,
                    },
                }}>
                <Detail key={cardDetail.id} initial={1} {...cardDetail} /> 
            </Box>
        </Container >
    );
}



