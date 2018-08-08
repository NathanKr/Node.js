const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  from : 'natankrasney@gmail.com',
  to : 'theyallabeitar1@gmail.com',
  subject: 'Meeting ',
  text: 'Hi Nathan  easy to do anywhere, even with Node.js Nathan'
};

  sgMail.send(msg);
