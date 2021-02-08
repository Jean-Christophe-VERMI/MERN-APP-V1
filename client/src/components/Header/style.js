import { makeStyles } from '@material-ui/core/styles';
import bg from './images/bg1.jpg';

export default makeStyles({
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
  
});