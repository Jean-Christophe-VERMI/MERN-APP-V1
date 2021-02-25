import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  container: {
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    webkitBoxShadow: "0px 50px 18px -15px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
    boxShadow: "0px 50px 18px -15px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
  },

  title: {
    margin: '1rem',
  },

  paper1: {
    backgroundColor: '#cfcfd1',
    height: '100%',
    padding: '2rem',
    borderRadius: '4px 0 0 4px',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  notif: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'ccenter',
  },

  form: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },


  email: {
    backgroundColor: 'white',
    width: '50%',
    marginBottom: '1rem',
  },

  message: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: '1rem',
  },

  formActions: {
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  buttonSubmit: {
    width: '30%',
  },

  paper2: {
    backgroundColor: '#44bac4',
    color: '#000000',
    height: '100%',
    padding: '2rem',
    borderRadius: '0 4px 4px 0',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  topInfos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  middleInfos: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },

  emailContact: {
    marginLeft: '10px',
  },

  name: {
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },

  logo: {
    margin: ".5rem",
  },

  [theme.breakpoints.down('sm')]: {

    container: {
      width: '90%',
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      webkitBoxShadow: "none",
      boxShadow: "none",
    },

    paper1: {
      backgroundColor: '#cfcfd1',
      height: '100%',
      padding: '1rem',
      borderRadius: '0px 0px 4px 4px',
      width: '95%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    email: {
      width: '100%',
    },

    formActions: {
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },

    buttonSubmit: {
      marginTop: '1rem',
    },

    paper2: {
      backgroundColor: '#44bac4',
      color: '#000000',
      height: '100%',
      width: '95%',
      padding: '1rem',
      borderRadius: '4px 4px 0px 0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    name: {
      marginBottom: '.5rem',
    },

    middleInfos: {
      margin: '1rem',
      
    },
    
  },

}));