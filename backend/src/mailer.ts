import { createTransport } from 'nodemailer';
import * as mailgun from 'nodemailer-mailgun-transport';
import * as Email from 'email-templates';

const mailgunConfig = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY || '',
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const transporter = createTransport(mailgun(mailgunConfig));

const email = new Email({
  message: {
    from: process.env.MAIL_FROM,
  },
  transport: transporter,
});

interface SendMailOpts {
  from?: string;
  template: string;
  locals: object;
  to: string;
}

export function sendMail(opts: SendMailOpts): Promise<any> {
  const toOverride = process.env.MAIL_TO_OVERRIDE;
  if (!toOverride && process.env.NODE_ENV !== 'production') {
    throw new Error(
      'MAIL_TO_OVERRIDE env is not configured. Is required for development environment.'
    );
  }

  const locals = Object.assign(
    { mailAppUrl: process.env.MAIL_APP_URL },
    opts.locals
  );

  return email.send({
    template: opts.template,
    message: {
      to: toOverride || opts.to,
      send: true,
    },
    locals,
  });
}
