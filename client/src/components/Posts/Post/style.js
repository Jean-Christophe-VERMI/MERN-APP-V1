import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    width: '100%',
    height: '150px',
    backgroundPosition: 'cover',
   
  },

  border: {
    border: 'solid',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    height: '120px',
    padding: '.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-beetwen',
    alignItems: 'center',
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
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  tags: {
    display: 'flex',
  }

});