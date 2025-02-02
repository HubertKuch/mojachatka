const { db } = require("../utils/db");
const nodemailer = require("nodemailer");
const randomString = require("randomstring");

async function sendMail(email) {
  function addMinutes(date, minutes) {
    const dateCopy = new Date(date);
    dateCopy.setMinutes(date.getMinutes() + minutes);
    return dateCopy;
  }

  const code = `${
    process.env.CLIENT_APP_URL
  }/aktywuj-konto?email=${email}&code=${randomString.generate(190)}`;
  const date = new Date();
  const expires = addMinutes(date, 5);

  await db.verification.create({
    data: {
      User: {
        connect: {
          email,
        },
      },
      code: code,
      expires: expires,
    },
  });

  const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
  });

  const link = `${process.env.CLIENT_APP_URL}/aktywuj-konto?email=${email}&code=${code}`;

  const mailOptions = {
    from: process.env.MAIL_EMAIL,
    to: email,
    subject: `[${process.env.APP_NAME}] Weryfikacja maila.`,
    html: emailTemplate({ link }),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

async function verifyEmailCode({ email, code }) {
  const codeFound = await db.verification.findFirstOrThrow({
    where: {
      email,
    },
  });

  if (codeFound === "NotFoundError: No User found error") {
    return false;
  }

  await db.user.update({
    where: {
      email: email,
    },
    data: {
      activated: true,
    },
  });

  await db.verification.deleteMany({
    where: {
      email: email,
    },
  });

  return true;
}

function emailTemplate({ link }) {
  return `
        <html>
        <head>

        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Potwierdzenie maila</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
        @media screen {
            @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 400;
            src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
            }
            @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 700;
            src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
            }
        }
        /**
         * Avoid browser level font resizing.
         * 1. Windows Mobile
         * 2. iOS / OSX
         */
        body,
        table,
        td,
        a {
            -ms-text-size-adjust: 100%; /* 1 */
            -webkit-text-size-adjust: 100%; /* 2 */
        }
        /**
         * Remove extra space added to tables and cells in Outlook.
         */
        table,
        td {
            mso-table-rspace: 0pt;
            mso-table-lspace: 0pt;
        }
        /**
         * Better fluid images in Internet Explorer.
         */
        img {
            -ms-interpolation-mode: bicubic;
        }
        /**
         * Remove blue links for iOS devices.
         */
        a[x-apple-data-detectors] {
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            color: inherit !important;
            text-decoration: none !important;
        }
        /**
         * Fix centering issues in Android 4.4.
         */
        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
        body {
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
        }
        /**
         * Collapse table borders to avoid space between cells.
         */
        table {
            border-collapse: collapse !important;
        }
        a {
            color: #1a82e2;
        }
        img {
            height: auto;
            line-height: 100%;
            text-decoration: none;
            border: 0;
            outline: none;
        }
        </style>

        </head>
        <body style="background-color: #e9ecef;">
        <!-- start body -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <!-- start hero -->
            <tr>
            <td align="center" bgcolor="#e9ecef">
                <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                <tr>
                <td align="center" valign="top" width="600">
                <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                    <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                    <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Potwierdz swojego maila</h1>
                    </td>
                </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
            </tr>
            <!-- end hero -->

            <!-- start copy block -->
            <tr>
            <td align="center" bgcolor="#e9ecef">
                <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                <tr>
                <td align="center" valign="top" width="600">
                <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

                <!-- start copy -->
                <tr>
                    <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                    <p style="margin: 0;">Dziękujemy za rejestrację na naszym portalu ogłoszeniowym - mojachatka! Cieszymy się, że dołączyłeś/dołączyłaś do naszej społeczności.
<br>
Aby dokończyć proces rejestracji i aktywować swoje konto, prosimy o kliknięcie w poniższy link:
<br>
Jeśli nie rejestrowałeś/rejestrowałaś się na naszej stronie, zignoruj tę wiadomość.
<br>
Dziękujemy i życzymy udanego korzystania z naszych usług!
<br>
Mojachatka.pl
<br>
Kontakt:
<br><br>

Numer telefonu: 789 857 202<br>
Adres e-mail: pomoc@mojachatka.pl</p>
                    </td>
                </tr>
                <!-- end copy -->

                <!-- start button -->
                <tr>
                    <td align="left" bgcolor="#ffffff">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                        <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                            <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
<a target="_blank" href="${link}" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Aktywuj konto</a>
                                </td>
                            </tr>
                            </table>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>
                <!-- end button -->

                <!-- start copy -->
                <tr>
                    <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                    <p style="margin: 0;">Dziękujemy<br>, Zespol Mojachatka</p>
                    </td>
                </tr>
                <!-- end copy -->

                </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
            </tr>
            <!-- end copy block -->

            <!-- start footer -->
            <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
                <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                <tr>
                <td align="center" valign="top" width="600">
                <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

                <!-- start permission -->
                <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                    <p style="margin: 0;">You received this email because we received a request to verify your email for your account. If you didn't request any verification you can safely delete this email.</p>
                    </td>
                </tr>
                <!-- end permission -->
                </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
            </tr>
            <!-- end footer -->

        </table>
        <!-- end body -->

        </body>
        </html>
    `;
}

module.exports = { sendMail, verifyEmailCode };
