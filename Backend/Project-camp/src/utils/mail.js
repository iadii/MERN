import Mailgen from 'mailgen';
import nodemailer from 'nodemailer'

const sendEMail = async (options) => {
    const mailGEnerator = new Mailgen({
        theme: 'salted',
        product: {
            name: process.env.APP_NAME,
            link: process.env.APP_LINK
        }
    })

    //  client automatically pick html or txt 
    // text only when it doesnot supports html
    const emailTextual = mailGEnerator.generatePlaintext(options.mailgenContent)
    const emailHtml = mailGEnerator.generate(options.mailgenContent)

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth:{
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail = {
        from: process.env.APP_MAIL,
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try{
        await transporter.sendEMail(mail)
    }catch(error) {
        console.error("email service failed \n", error)
    }
}

const emailVerificationMailContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: `Welcome to our App ${process.env.APP_NAME}, we are exited to have you on board`,
            action: {
                instructions: 'To verify you email please click the button',
                button: {
                    color: '#22bc7c',
                    text: 'Verify email',
                    link: verificationUrl
                }
            },
            outro: 'Need help or have query? Just reply to this email, we\'d love to help'
        }

    }
}

const forgotPasswordMailContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: `We got the request to reset the password of your account`,
            action: {
                instructions: 'To reset your password please click the button',
                button: {
                    color: '#bc2265',
                    text: 'Reset password',
                    link: passwordResetUrl
                }
            },
            outro: 'Need help or have query? Just reply to this email, we\'d love to help'
        }

    }
}

export { emailVerificationMailContent, forgotPasswordMailContent, sendEMail }