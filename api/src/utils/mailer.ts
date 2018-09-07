import { createTransport } from 'nodemailer';
import * as mailgun from 'nodemailer-mailgun-transport';
import * as Email from 'email-templates';

const mailgunConfig = {
  auth: {
    api_key: process.env.BACKEND_MAILGUN_API_KEY || '',
    domain: process.env.BACKEND_MAILGUN_DOMAIN,
  },
};

const transporter = createTransport(mailgun(mailgunConfig));

export const email = new Email({
  message: {
    from: process.env.BACKEND_MAIL_FROM,
  },
  send: true,
  transport: transporter,
});
