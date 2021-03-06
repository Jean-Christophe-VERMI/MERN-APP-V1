import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  article: {
    width: '80%',
    display: 'flex',
    margin: '1rem auto',
    padding: '2rem 1rem',
    justifyContent: 'space-between',
    border: '1px solid #4c96d7',
    borderRadius: '5px',
    backgroundColor: '#e2e2e2',
    webkitBoxShadow: "0px 12px 30px -10px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
    boxShadow: "0px 12px 30px -10px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
  },

  thumb: {
    height: '150px',
    backgroundBlendMode: 'darken',
  },

  metaDatas: {
    border: 'solid',
  },


  [theme.breakpoints.down('sm')]: {

    article: {
      width: '100%',
    },
    
  },

}));