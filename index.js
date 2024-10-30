const data = [
  { name: "John", email: "john@gmail.com", birthday: "2010/10/31" },
  { name: "Peter", email: "peter@gmail.com", birthday: "2024/10/30" },
  { name: "Mark", email: "mark@gmailc.om", birthday: "1990/01/01" },
  { name: "Philip", email: "philip@gmail.com", birthday: "1996/09/30" },
];

async function sendBirthdayEmails(data) {
  const today = new Date();
  const currentMonth = today.getMonth(); // 0-11
  const currentDate = today.getDate(); // 1-31

  const emailsToSend = data
    .filter((item) => {
      const birthday = new Date(item.birthday);
      return (
        birthday.getMonth() === currentMonth &&
        birthday.getDate() === currentDate
      );
    })
    .map((item) => item.email);

  if (emailsToSend.length > 0) {
    console.log("Mail sent to", emailsToSend);
  } else {
    console.log("No birthdays today.");
  }
}

// Function to calculate the time until the next day at a specific hour (e.g., 9 AM [GMT])
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
    sendBirthdayEmails(data);
    // Schedule the function to run daily
    setInterval(() => sendBirthdayEmails(data), 24 * 60 * 60 * 1000);
  }, timeUntilNextRun);
}

// Start the daily birthday check at 9 AM
scheduleDailyBirthdayCheck(15, 20);
