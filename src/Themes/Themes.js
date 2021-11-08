import { createTheme } from '@material-ui/core/styles';

const palette = {
    primary: {
        main: "#82d219",
        contrastText: "#fff",
    },
    secondary: {
        main: '#ff6600',
        contrastText: "#fff",
    },
};

const temaPrueba = createTheme({
    palette,
});

export default temaPrueba;