import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  header: {
    width: '80%',
    margin: '2rem auto',
    paddingTop: '2rem',
  },

  title: {
    margin: '2rem', 
  },

  main: {
    width: '80%',
    margin: '2rem auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  
  [theme.breakpoints.down('sm')]: {

    header: {
      width: '95%',
    
    },

    main: {
      width: '95%',
    },
    
  },

}));