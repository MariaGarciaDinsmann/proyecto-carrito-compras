import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function InputSearch() {
    return (
        <Paper
            component="form"
            className="search"
            sx={{ p: '1px 1px', display: 'flex', alignItems: 'center', width: 250, marginLeft: 2, backgroundColor: '#ffffff4d', boxShadow: 'none' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1,  color: '#fff' }}
                id="inputSearch"
                placeholder="Buscar"
                inputProps={{ 'aria-label': 'Buscar' }}
            />
            <IconButton type="submit" sx={{ p: '10px', color: '#fff' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}