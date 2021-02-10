import { makeStyles } from '@material-ui/core/styles';
import bg from './images/bg1.jpg';
import bgMobile from './images/bg-mobile.png';

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
  },

  main: {
    background: 'rgb(68,186,196)',
    background: 'linear-gradient(180deg, rgba(68,186,196,1) 0%, rgba(68,161,196,1) 35%, rgba(54,118,180,1) 100%)',
    width: '100%',
    minHeight: '100vh',
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