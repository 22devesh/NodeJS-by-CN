
//1. import nodemailer
const nodemailer = require('nodemailer');

//2. Configure email and send it.
async function sendMail(){

    //1. Create an email transporter.
    // SMTP (simple mail transfer protocol)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'singhaldevesh514@gmail.com',
            pass: 'hfak bowy kjjj hjvm',
        }
    });

    //2. Configure eamil content
    const mailOptions={
        from:'singhaldevesh514@gmail.com',
        to:'deveshsinghal622@gmail.com',
        subject: 'Welcome to NodeJs App',
        text: 'This is an email using nodemailer in nodeJS',
    };

    //3. Send the email.
    try{
      const result= await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    }catch(err){
        console.log('Email send failed with error: '+err);
    }
}

sendMail();