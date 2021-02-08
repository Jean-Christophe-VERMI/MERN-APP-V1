import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  container: {
    padding: '5rem',
  },

  
  // Responsive
  [theme.breakpoints.down('sm')]: {
    container: {
      
    },

  },
  
}));