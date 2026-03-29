import SibApiV3Sdk from "sib-api-v3-sdk";

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];

apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();


// ✅ SEND OTP EMAIL
export const sendOTPEmail = async (email, otp) => {
  try {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.to = [{ email }];
    sendSmtpEmail.sender = {
      email: "yashpaithane2004@gmail.com", // must be verified
      name: "AI Resume Builder",
    };

    sendSmtpEmail.subject = "Your OTP Verification Code";

    sendSmtpEmail.htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Email Verification</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
  </head>
  <body style="margin:0; padding:0; background-color:#0f0f13; font-family:'DM Sans', sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f13; padding:48px 16px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius:12px 12px 0 0; padding:28px 40px; border-bottom:1px solid #2a2a4a;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <span style="font-family:'Playfair Display', Georgia, serif; font-size:22px; color:#ffffff; letter-spacing:0.5px;">ResumeAI</span>
                    </td>
                    <td align="right">
                      <span style="display:inline-block; background:linear-gradient(135deg, #6366f1, #8b5cf6); color:#fff; font-size:10px; font-weight:500; letter-spacing:2px; padding:5px 12px; border-radius:20px; text-transform:uppercase;">Verification</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="background:linear-gradient(160deg, #1a1a2e 0%, #12122a 100%); padding:52px 40px 44px;">

                <!-- Accent line -->
                <div style="width:48px; height:3px; background:linear-gradient(90deg, #6366f1, #8b5cf6); border-radius:2px; margin-bottom:36px;"></div>

                <h1 style="font-family:'Playfair Display', Georgia, serif; font-size:30px; color:#f1f1f5; margin:0 0 16px; font-weight:600; line-height:1.3;">
                  Verify your email address
                </h1>

                <p style="font-size:15px; color:#9090b0; line-height:1.8; margin:0 0 36px;">
                  To continue building your professional resume, please use the one-time code below to confirm your identity. This code is valid for a single use only.
                </p>

                <!-- OTP Block -->
                <div style="background:#0f0f1a; border:1px solid #2a2a4a; border-radius:12px; padding:36px 24px; text-align:center; margin-bottom:36px;">
                  <p style="font-size:11px; color:#44446a; letter-spacing:2.5px; text-transform:uppercase; margin:0 0 20px; font-weight:500;">One-Time Passcode</p>

                  <div style="letter-spacing:20px; font-family:'Playfair Display', Georgia, serif; font-size:52px; font-weight:700; color:#ffffff; text-indent:20px; display:inline-block;">
                    ${otp}
                  </div>

                  <div style="margin-top:24px;">
                    <div style="display:inline-block; background:#1a1a2e; border:1px solid #3b3b6e; border-radius:20px; padding:7px 18px;">
                      <span style="font-size:12px; color:#8b5cf6; font-weight:500;">⏱ Expires in 10 minutes</span>
                    </div>
                  </div>
                </div>

                <!-- Security Note -->
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#13131f; border:1px solid #22223a; border-radius:10px; margin-bottom:36px;">
                  <tr>
                    <td style="padding:16px 20px;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="vertical-align:top; padding-right:12px; padding-top:2px; font-size:16px;">🔒</td>
                          <td style="font-size:13px; color:#55557a; line-height:1.7;">
                            <strong style="color:#7070a0; font-weight:500;">Security reminder:</strong> Never share this code with anyone. ResumeAI will never ask for your OTP via phone or chat.
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Divider -->
                <div style="border-top:1px solid #1e1e38; margin-bottom:28px;"></div>

                <p style="font-size:13px; color:#44446a; line-height:1.7; margin:0;">
                  If you did not request this code, you can safely ignore this email — it will expire automatically.
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#0a0a12; border-radius:0 0 12px 12px; padding:22px 40px; border-top:1px solid #1e1e38;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <p style="font-size:11px; color:#2a2a42; margin:0; line-height:1.7;">
                        This is an automated message. Please do not reply to this email.
                      </p>
                    </td>
                    <td align="right">
                      <p style="font-size:11px; color:#22223a; margin:0; white-space:nowrap;">© 2025 ResumeAI</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>

  </body>
  </html>
`,

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log("OTP Email sent successfully");
  } catch (error) {
    console.error("Brevo Error:", error.response?.body || error.message);
    throw new Error("Email sending failed");
  }
};


// ✅ SEND WELCOME EMAIL
export const sendWelcomeEmail = async (email) => {
  try {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.to = [{ email }];
    sendSmtpEmail.sender = {
      email: "yashpaithane2004@gmail.com",
      name: "AI Resume Builder",
    };

    sendSmtpEmail.subject = "Welcome 🎉";

    sendSmtpEmail.htmlContent = `
      <h2>Welcome 🎉</h2>
      <p>Your account has been verified successfully.</p>
    `;

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log("Welcome email sent");
  } catch (error) {
    console.error("Brevo Error:", error.response?.body || error.message);
    throw new Error("Welcome email failed");
  }
};