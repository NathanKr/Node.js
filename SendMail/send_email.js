const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'natankrasney@gmail.com',
  from: 'natankrasney@gmail.com',
  subject: 'Meeting ',
  text: 'Hi Nathan  easy to do anywhere, even with Node.js Nathan'
};
sgMail.send(msg);