const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail =(email, name)=>{
    sgMail.send({
        to: email,
        from: 'apoorva.ambhoj95@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail =(email, name)=>{
    sgMail.send({
        to: email,
        from: 'apoorva.ambhoj95@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you sometime soon.`
    })
}

module.exports= {
    sendWelcomeEmail,
    sendCancelationEmail
}

