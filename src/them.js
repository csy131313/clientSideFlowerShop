import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D3687E',
      light:'#EC92A3',
      dark:'#C33B4F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FCF2F2',
      light:'#FCF7F5',
      dark:'#FFE0D6',
      contrastText: '#576B4F',//ירוק
    },
    green: {
        main: '#576B4F',
        light:'#728F60',
        dark:'#465740',
        contrastText: '#856F0E',//זהב
    },
    zaav: {
      main: '#856F0E',
      light:'#E3DF6D',
      dark:'#736008'
    },
    // Add more custom colors as needed
  },
  // components: {
  //   MuiTouchRipple: {
  //     defaultProps: {
  //       color:   '#576B4F', // Change the color of the ripple effect when the button is clicked
  //     },
  //   },
  // },

});

export default theme;
