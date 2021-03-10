import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  body: {
    minHeight: '100vh',
    paddingTop: '2rem',
  },

  urlForm: {
    backgroundColor: '#ffffff',
    width: '50%',
    margin: 'auto',
    padding: '1rem',
    borderRadius: '4px',
  },

  input: {
    marginBottom: '.5rem',
  },

  title: {
    margin: '2rem', 
    textTransform: 'uppercase',
    color: '#ffffff',
    fontWeight: 'bold',
  },

  main: {
    backgroundColor: '#44bac4',
    width: '90%',
    margin: '2rem auto',
    padding: '1rem',
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