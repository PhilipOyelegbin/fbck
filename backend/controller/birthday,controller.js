const { getUsers } = require("./user.controller");
const { createTransport } = require("nodemailer");

async function sendBirthdayEmails() {
  // get all the celebrant from the user database
  const celebrant = await getUsers();
  const today = new Date();
  const currentMonth = today.getMonth(); // 0-11
  const currentDate = today.getDate(); // 1-31
  const recipient = celebrant
    .filter((item) => {
      const birthday = new Date(item.date_of_birth);
      return (
        birthday.getMonth() === currentMonth &&
        birthday.getDate() === currentDate
      );
    })
    .map((item) => item.email);

  // send mails to the recipient gotten from the database
  if (recipient.length > 0) {
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"FBC Kosofe" <${process.env.SMTP_USER}>`,
      to: [recipient, process.env.SMTP_USER],
      subject: "Birthday Wishes",
      html: `
      <p>Hello Dear,</p>

      <p>On this special day, we want to take a moment to celebrate you as you celebrate your birthday today! 🎉 Your hard work and dedication are truly appreciated, and we’re grateful to have you as part of our community of believers.</p>
      
      <p>May your day be filled with joy, laughter, and unforgettable moments. Here’s to another year of success and happiness!</p>

      <p>Best wishes,</p>

      <p><b>FBC Kosofe</b></p>
      `,
    };
    await transporter.sendMail(mailOptions);
    console.log("Mail sent to", recipient);
  } else {
    console.log("No birthdays today.");
  }
}

// Function to calculate the time until the next day at a specific hour (e.g., 9 AM [WAT])
function scheduleDailyBirthdayCheck(hour, minute) {
  const now = new Date();
  const firstRun = new Date();
  firstRun.setHours(hour, minute, 0, 0); // Set the desired hour and minute

  // If the scheduled time has already passed today, schedule for tomorrow
  if (now > firstRun) {
    firstRun.setDate(firstRun.getDate() + 1);
  }

  const timeUntilNextRun = firstRun - now;

  // Run the function immediately at the scheduled time
  setTimeout(() => {
    sendBirthdayEmails();
    // Schedule the function to run daily
    setInterval(() => sendBirthdayEmails(), 24 * 60 * 60 * 1000);
  }, timeUntilNextRun);
}

// // Start the daily birthday check at 9 AM
// scheduleDailyBirthdayCheck(9, 0);
module.exports = scheduleDailyBirthdayCheck;
