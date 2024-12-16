# FBCK Backend Application

## Overview

The backend application developed for a church community. The system features JWT authentication and authoriztaion, CRUD operations for members and admin, voting system with a birthday mailing system.

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

To install and set up the API, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/PhilipOyelegbin/fbck.git
   ```

2. **Move into backend folder**:
   ```bash
   cd backend  # to move into the backend folder
   ```
3. **Install dependencies**:
   ```bash
   npm install  # to install the dependecies for backend project
   ```

## Usage

After installation, you can use the following commands to run api:

- Before running the application you can setup the env variable to seed the root admin data to the database

```
DATABASE_URL
SEED_ADMIN_NAME
SEED_ADMIN_EMAIL
SEED_ADMIN_PASSWORD
PORT
HOST_URI
FRONTEND_URI
SECRET_KEY  # jwt secret key

SMTP_HOST
SMTP_USER
SMTP_PASSWORD
SMTP_PORT
```

- ... and seed the root admin using the command below

```
npx prisma db seed
```

- **Start the app**:

  ```javascript
  npm run start   // start the backend server
  ```

- _NB: Swagger-autogen was used for the backend swagegr ui (https://swagger-autogen.github.io/docs/)_

- Click **[here](https://fbckapi.vercel.app)** to access the live application

![preview](./preview.png)

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or inquiries, please contact **[info@philipoyelegbin.com.ng](mailto:info@philipoyelegbin.com.ng)**.
