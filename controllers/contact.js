import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

// Route post /contact
export const contactAction = (req, res) => {
  const { email, message } = req.body;

  try {

    let transporter = nodemailer.createTransport({
      host: 'smtp.ionos.fr',
      port: 465,
      secure: true, // true for 465, false for other ports 587
      auth: {
          user: 'contact@jcvdevpro.fr', // generated ethereal user
          pass: process.env.AUTH_SMPT_EMAIL // generated ethereal password
      },
      tls:{
      rejectUnauthorized:false
      }
    });

    const siteName = 'JCV Portfolio 2021';

    let mailOptions = {
      from: `"Portfolio contact" <${email}>`, // sender address
      to: `${process.env.ADMIN_EMAIL}`, // receiver address
      subject: `${siteName} nouveau message`, // Subject line
      // text: 'Hello world?', // plain text body
      html: message // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }

      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.status(200).json({message: 'Votre email a été envoyé avec succès.'});
    });
  } catch (error) {
    console.log(error);
  }

  

};
