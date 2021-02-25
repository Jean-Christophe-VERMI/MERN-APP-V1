import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  media: {
    height: '150px',
    backgroundPosition: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundBlendMode: 'darken',
  },

  border: {
    border: 'solid',
  },

  card: {
    width: '32%',
    //minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: '5px',
    position: 'relative',
    webkitBoxShadow: "0px 12px 30px -10px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
    boxShadow: "0px 12px 30px -10px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
  },

  cardActions: {
    position: 'absolute',
    top: '0px',
    right: '5px',
  },

  action1: {
    position: 'absolute',
    top: '0px',
    left: '5px',
  },

  action2: {
    position: 'absolute',
    top: '0px',
    right: '5px',
  },

  content: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  header: {
    width: '100%',
  },

  title: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    position: 'center',
  },

  modalBtn: {
    color: 'black',
  },

  grid: {
    display: 'flex',
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  description: {
    marginBottom: '1rem',
  },

  [theme.breakpoints.down('sm')]: {

    card: {
      width: '100%',
      marginBottom: '1rem',
    },
    
  },

}));