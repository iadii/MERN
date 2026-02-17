import Mailgen from "mailgen";

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

export { emailVerificationMailContent, forgotPasswordMailContent }