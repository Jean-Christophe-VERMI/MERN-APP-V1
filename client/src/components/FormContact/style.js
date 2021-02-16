import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

  title: {
    margin: '1rem',
  },

  paper: {
    margin: '2rem auto',
    display: 'flex',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  input: {
    width: '100%',
    margin: '0rem 1rem 1rem 1rem',
  },

  buttonSubmit: {
    width: '30%',
    margin: '0rem 1rem 1rem 1rem',
  },

}));