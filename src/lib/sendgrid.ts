import mailer from '@sendgrid/mail'

const TO = process.env.SENDGRID_API_KEY || ''

mailer.setApiKey(process.env.SENDGRID_API_KEY || '');
const msg = {
  to: 'test@example.com',
  from: 'test@example.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

export async function sendEmail({ subject, text, html }: { from: string, subject: string, text: string, html: string }) {
  return await mailer.send({
    to: TO,
    from: TO,
    subject,
    text,
    html
  })
}

export function createContactEmailMessage(
  name: string,
  phoneNumber: string,
  email: string,
  subject: string,
  message: string
) {
  const text = `
    Name: ${name}\n
    Phone Number ${phoneNumber || 'Not Provided'}\n
    Sender Email: ${email}\
    \n\n\n
    ${message}
  `;

  const html = `
    <div>Name: <strong>${name}</strong></div><br>
    <div>Phone Number: <strong>${phoneNumber || 'Not Provided'}</strong></div><br>
    <div>Sender Email: <strong>${email}</strong></div>
    <br>
    <br>
    <br>
    <div>${message}</div>
  `

  return {
    subject,
    text,
    html
  }
}