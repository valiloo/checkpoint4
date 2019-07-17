const express = require('express');
const app = express();
const port = 3500;
const connection = require('./conf');
const bodyParser = require('body-parser');
const cors = require('cors')
const nodemailer = require('nodemailer')
app.use(cors());
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

const transporter = nodemailer.createTransport({

  host: 'smtp.mailtrap.io',
  provider: 'smtp',
  port: 25,
  auth: {
    user: '7e157ef2a12efe', 
    pass: '8654176b37e01e' 
  }
});

app.use(bodyParser.json());



app.post('/send', function (req, res) {

  let senderName = req.body.contactFormName;
  let senderEmail = req.body.contactFormEmail;
  let messageSubject = req.body.contactFormSubjects;
  let messageText = req.body.contactFormMessage;
  let copyToSender = req.body.contactFormCopy;

  let mailOptions = {
    to: ['03d36c8207-e94142@inbox.mailtrap.io'], // Enter here the email address on which you want to send emails from your customers
    from: senderName,
    subject: messageSubject,
    text: messageText,
    replyTo: senderEmail
  };

  if (senderName === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (senderEmail === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (messageSubject === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (messageText === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (copyToSender) {
    mailOptions.to.push(senderEmail);
  }

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('sent');
    }
  });
});


app.listen(port, (err) => {
  if (err) {
      throw new Error('Something bad happened...');
  }

  app.get('/api/artists', (req, res) => {

    
    connection.query('SELECT * from artists', (err, results) => {
  
      if (err) {
  
        console.log(err)
        res.status(500).send('Erreur lors de la récupération des artistes');
      } else {
  
       
        res.json(results);
      }
    });
  });

});
