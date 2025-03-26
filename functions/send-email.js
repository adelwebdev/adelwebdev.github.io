exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method not allowed.",
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  // Validate inputs
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: "Please fill out all fields.",
    };
  }

  // Send email using a third-party service (e.g., SendGrid)
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "your-email@example.com", // Replace with your email
    from: email,
    subject: `New Message from ${name}`,
    text: message,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: "Thank you for your message!",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Oops! Something went wrong.",
    };
  }
};
