const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api', (req, res) => {
    res.send('API status: Running');
    
})
app.post('/api', (req, res) => {
    console.log('connected');

    

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        // service: 'gmail',
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      const info = {
        from: 'rishabhraghav2012@gmail.com', // sender address
        to: `rishabhraghav2012@gmail.com`, // list of receivers
        subject: `Message from ${req.body.form.name}`, // Subject line
        text: `${req.body.form.text} (Reach me out @ ${req.body.form.email})`, // plain text body
      };

      transporter.sendMail(info, (err, data) => {
            if(err) {
                console.log(`error occurs ${err}`);
            } else {
                console.log(`email sent!!!  ${data.response}`);
            }
      });

});

const PORT = process.env.PORT || 3030;

if(process.env.NODE_ENV === "production") {
    app.use(express.static("portfolio/build"));
    
    const path = require('path');
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio', 'build', 'index.html'));
  });
}


app.listen(PORT, (req, res) => {
    console.log('node server started!');
});