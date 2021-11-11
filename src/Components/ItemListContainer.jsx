import Typography from '@mui/material/Typography';
import ItemList from './ItemList.jsx'

const styles = {
    greeting: {
        padding: '0.5em',
        fontSize: '20px',
        marginTop: '20px',        
    }
};

export default function ItemListContainer( {greeting} ) {

    return (
        <div>
            <Typography style={styles.greeting} color="secondary">Bienvenida {greeting}</Typography>
            <ItemList />
        </div>
    )
}