require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: helmet } = require("helmet");
const swaggerAutogen = require("swagger-autogen")();
const swaggerUi = require("swagger-ui-express");
const swaggerdocs = require("./swagger-output.json");

// import routes
const userRoutes = require("./routes/user.route");
const adminRoutes = require("./routes/admin.route");
const candidateRoutes = require("./routes/candidate.route");
const voteRoutes = require("./routes/vote.route");
const mailerRoutes = require("./routes/mailer.route");
const authRoutes = require("./routes/auth.route");
const passwordResetRoutes = require("./routes/passwordreset.route");
const scheduleDailyBirthdayCheck = require("./controller/birthday,controller");

const app = express();

// middleware
const corsOptions = {
  origin: [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
    "https://fbckosofe.com",
    "https://fbck.vercel.app",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

// Swagger setup
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerdocs));
app.use(helmet());

// User routes
app.use("/", userRoutes);
app.use("/", adminRoutes);
app.use("/", candidateRoutes);
app.use("/", voteRoutes);
app.use("/", mailerRoutes);
app.use("/", authRoutes);
app.use("/", passwordResetRoutes);

// error route
app.all("*", (req, res) => {
  res.status(404).send("Sorry, the route you are going to does not exist");
});

// automated task to start the daily birthday check at 9 AM
scheduleDailyBirthdayCheck(9, 0);

// connect the server
const port = process.env.PORT;
app.listen(port, async () => {
  console.log("Server is running on port: ", port);
});
