import sendgrid from "@sendgrid/mail";

export default (req, res) => {
  sendgrid.setApiKey(process.env.GRID_API_KEY);
  
  const body = JSON.parse(req.body);
  
  const msg = {
    to: process.env.GRID_RECEIVE_EMAIL,
    from: process.env.GRID_SEND_EMAIL ,
    subject: `Contact from ${body.name}`,
    text: body.message,
    html: `<div>
      <h1>hello from ${body.name} </h1>
      <p>${body.message}</p>
      <p>reach back at ${body.email} or ${body.number.slice(0,3)}-${body.number.slice(3,6)}-${body.number.slice(6)} </p>
    </div>`
  }

  sendgrid.send(msg).then((response) => {
    console.log(response[0].statusCode)
  })
  .catch((error) => {
    console.error(error)
    console.error(error['response']['body'])
  });

  res.status(200).json({ status: 'Ok'});
}