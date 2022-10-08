import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.GRID_API_KEY);


async function sendMail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'pcoln.contact@gmail.com',
      from: 'pcoln.contact@gmail.com',
      subject: 'chick',
      text: 'en noodle',
      html: '<strong>en noodle</strong>'
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
   
}

export default sendMail;