import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    height: '100vh',
    background: 'rgb(68,186,196)',
    background: 'linear-gradient(180deg, rgba(68,186,196,1) 0%, rgba(68,161,196,1) 35%, rgba(54,118,180,1) 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
}));