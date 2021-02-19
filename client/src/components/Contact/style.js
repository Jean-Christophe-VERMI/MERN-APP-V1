import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    background: 'rgb(34,193,195)',
    background: 'linear-gradient(180deg, rgba(34,193,195,1) 56%, rgba(255,255,255,1) 56%)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  topForm: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '5rem',
  },

  title: {
    marginRight: '1rem',
  }

}));