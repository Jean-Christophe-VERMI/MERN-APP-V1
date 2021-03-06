import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },

  // Responsive
  [theme.breakpoints.down('sm')]: {

    container: {
      display: 'flex',
      flexDirection: 'column',
      //justifyContent: 'space-between',
    },
    
  },

}));