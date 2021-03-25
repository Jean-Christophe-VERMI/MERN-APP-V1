import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  body: {
    minHeight: '100vh',
    paddingTop: '2rem',
  },

  main: {
    backgroundColor: '#44bac4',
    width: '85%',
    margin: '2rem auto',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  order: {
    width: '80%',
    margin: '1rem auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  select: {
   // backgroundColor: '#ffffff',
  },

  formControl: {
    minWidth: 120,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
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
    textTransform: 'uppercase',
    color: '#ffffff',
    fontWeight: 'bold',
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