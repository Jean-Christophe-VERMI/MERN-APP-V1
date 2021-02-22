import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  container: {
    background: '#44bac4',
    padding: '2rem',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },

  divFormBtn: {
    marginLeft: '1rem'
  },

  formBtn: {
    backgroundColor: '#ffffff',
    padding: '.2rem .5rem',
  },

  // Responsive
  [theme.breakpoints.down('sm')]: {
    container: {
      
    },

  },
  
}));