import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.GRID_API_KEY);


export default (req, res) => {
  const body = JSON.parse(req.body);

  sendgrid.send({
    to: 'pcoln.contact@gmail.com',
    from: body.email,
    subject: body.subject,
    text: body.message,
    html: `<div>
      <h1>hello from ${body.name} </h1>
      <p>${body.message}</p>
    </div>`
  });

  res.status(200).json({ status: 'Ok'});
}