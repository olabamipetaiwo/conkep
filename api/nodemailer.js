var nodemaier =require('nodemailer');

//Gmail
// var transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth: {
//         user:'teeola48@gmail.com',
//         password:'chemistry52'
//     }
// });


//liveserver
var transporter = nodemailer.createTransport({
   host:'main.69views.com',
   port:587,
   secure:false,
   auth: {
        user:'info@69views.com',
        password:'chemistry52'  
  },
  tls: {
      rejectUnauthorized:false
  }
});

var mailOptions = {
    from:'teeola48@gmail.com',
    to:'awotoyeife1@gmail.com',
    subjact:'test Email',
    text:'test node.js',
    html:'<h1>test node.js</h2>'
};

transporter.sendmail(mailOptions,(error,info) => {
    if(error) {
        console.log(error);
    }else {
        console.log('Email Sent' + info.response);
        console.log('Email Sent' + info.messageId);
    }
});

