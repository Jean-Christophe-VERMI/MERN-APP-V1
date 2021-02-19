import { makeStyles, withTheme } from '@material-ui/core/styles';

export default makeStyles(() => ({

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
    backgroundColor: '#ededf0',
    height: '100%',
    padding: '2rem',
    borderRadius: '4px 0 0 4px',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
  },

  form: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
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
    backgroundColor: '#9c9c9d',
    color: 'white',
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
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  name: {
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },

  logo: {
    margin: ".5rem",
  }

}));