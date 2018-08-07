var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'theyallabeitar1@gmail.com',
    pass: '3483986D'
  },
  tls: {
    rejectUnauthorized: false
}
});

var mailOptions = {
  from: 'theyallabeitar1@gmail.com',
  to: 'natankrasney@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});