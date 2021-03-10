import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  article: {
    width: '80%',
    display: 'flex',
    margin: '1rem auto',
    padding: '2rem',
    justifyContent: 'space-between',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    webkitBoxShadow: "0px 12px 30px -10px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
    boxShadow: "0px 12px 30px -10px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
  },

  metasDatas: {
    width: '70%',
  },

  title: {
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },

  resume: {
    marginTop: '1rem',
  },


  infos: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  date: {
    marginBottom: '1rem',
  },


  [theme.breakpoints.down('sm')]: {

    article: {
      width: '100%',
    },
    
  },

}));