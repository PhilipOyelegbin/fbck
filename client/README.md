# FBCK Frontend Application

## Overview

A frontend application developed for a church community. The system features JWT authentication and authoriztaion, CRUD operations for members and admin, voting system with a birthday mailing system.

## Features

1. Member features:
   - Register as a member: Allow users to create an account
   - Login as a member: Allow users to login an account
   - Vote as a member: Allow users to vote.
2. Admin features:
   - Login as an admin: Allow the admin to login.
   - Create an admin: Allow an admin to create another admin.
   - Create candidate: Allow the admin to create candidate.
   - Update candidate: Allow the admin to update candidate.
   - Delete candidate: Allow the admin to delete candidate.
   - Create member: Allow the admin to create member.
   - Update member: Allow the admin to update member.
   - Delete member: Allow the admin to delete member.
   - Delete vote: Allow the admin to delete a vote.

## Installation

To install and set up the App, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/PhilipOyelegbin/fbck.git
   ```

2. **Move into frontend folder**:
   ```bash
   cd frontend  # to move into the frontend folder
   ```
3. **Install dependencies**:
   ```bash
   yarn  # to install the dependecies for frontend project
   ```

## Usage

After installation, you can use the following commands to start the app:

- Before running the application you can setup the env variable needed

```
VITE_API_URI
VITE_SSP
VITE_HOST_URI
VITE_SMTP_HOST
VITE_SMTP_USER
VITE_SMTP_PASSWORD
VITE_SECRET_KEY
```

- **Start the app**:

  ```javascript
   yarn run dev // start the frontend app
  ```

- Click **[here](https://fbck.vercel.app)** to access the live application

_Note: react-chartjs2 was used for the chart (https://react-chartjs-2-two.vercel.app/examples/horizontal-bar-chart)_

![preview](./preview.png)

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or inquiries, please contact **[info@philipoyelegbin.com.ng](mailto:info@philipoyelegbin.com.ng)**.
