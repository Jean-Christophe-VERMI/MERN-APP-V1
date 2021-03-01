import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  article: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    borderRadius: '5px',
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