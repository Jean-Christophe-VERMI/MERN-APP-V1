import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//Style
import useStyles from './style';

const Notification = () => {
  const [isNotif, setIsNotif] = useState(false);
  const classes = useStyles();
  const notification = useSelector((state) => state.contact.notification);

  useEffect(() => {
     setIsNotif(true);
     setTimeout(() => {
       setIsNotif(false);
     }, 5000);
  }, [notification]);

  return (
    <div className={classes.notification}>
      {isNotif && (
        <p>{notification.message}</p>
      )}
    </div>
  );
}

export default Notification;
