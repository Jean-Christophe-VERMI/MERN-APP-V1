import { makeStyles } from '@material-ui/core/styles';
import bg from './images/bg1.jpg';
import bgMobile from './images/bg-mobile.png';
import bgMain from './images/webbg-mini.jpg';

export default makeStyles((theme) => ({

  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  header: {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  name: {
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  technos: {
    fontSize: '30px',
  },

  js: {
    color: '#efd81d',
  },

  react: {
    color: '#61dafb',
  },

  node: {
    color: '#026e00',
  },

  icons: {
    padding: '10px 0px',
  },

  links: {
    padding: '0px 0px 0px 10px',
  },

  description: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '50px',
    fontSize: '42px',
  },

  downButton: {
    margin: '2rem 5rem',
    border: ' 1px solid #44bac4',
    borderRadius: '5px',
    color: '#44bac4',
    "&:hover": {
      border: ' 1px solid #44bac4',
    }
  },

  canvas: {
    position: "absolute",
    top:"0",
    left: "0",
  },

  main: {
    background: 'rgb(68,186,196)',
    background: 'linear-gradient(135deg, rgba(68,186,196,1) 0%, rgba(103,195,231,1) 30%, rgba(245,247,249,1) 100%)',
    // boxShadow: 'inset 0 0 0 2000px rgba(86, 189, 199, 0.4)',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  divFormBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1rem',
  },

  formBtn: {
    position: 'absolute',
  },

  goTop: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'flex-end',
  },


  // Responsive
  [theme.breakpoints.down('sm')]: {
    header: {
      width: '100%',
      minHeight: '100vh',
      backgroundImage: `url(${bgMobile})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },

    description: {
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      fontSize: '22px',
      color: '#ffffff',
    },

    technos: {
      fontSize: '20px',
    },
  },
  
  
}));