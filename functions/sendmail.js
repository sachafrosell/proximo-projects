const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true, //use SSL
        auth:{
         user:'proximoprojectscontact@gmail.com',
         pass: 'Proximo2020!'
    }
    });

    transporter.sendMail({
        from: 'proximoprojectscontact@gmail.com',
        to: 'proximoprojectscontact@gmail.com',
        subject: `${data.subject}`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}
