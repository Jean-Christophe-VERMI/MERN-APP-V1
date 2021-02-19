import { makeStyles, withTheme } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  container: {
    padding: '5rem',
  },

  title: {
    marginBottom: '2rem',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },

  
  // Responsive
  [theme.breakpoints.down('sm')]: {
    container: {
      
    },

  },
  
}));