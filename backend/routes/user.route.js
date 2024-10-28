const { Router } = require("express");
const {
  getUsers,
  createUser,
  updateUserByEmail,
  getUserByEmail,
  deleteUserByEmail,
} = require("../controller/user.controller");
const { hashPassword } = require("../utils/auth");
const { authenticated, authorized } = require("../utils/middleware");

const router = Router();

router.post("/v1/api/users", async (req, res) => {
  // #swagger.tags = ['Users']
  const { name, email, phone_number, password, gender } = await req.body;
  if (!name || !email || !phone_number || !password) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }
  try {
    const users = await createUser({
      name,
      email,
      gender,
      phone_number,
      password: await hashPassword(password),
    });
    return res
      .status(200)
      .json({ message: "User created successfully", data: users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

router.get(
  "/v1/api/users",
  authenticated,
  authorized("Admin"),
  async (req, res) => {
    /* 
      #swagger.tags = ['Users']
      #swagger.security = [{"bearerAuth": []}]
    */
    try {
      const users = await getUsers();
      return res
        .status(200)
        .json({ message: "All users received successfully", data: users });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

router.get("/v1/api/users/:email", authenticated, async (req, res) => {
  /*
      #swagger.tags = ['Users']
      #swagger.security = [{"bearerAuth": []}]
    */
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(403).json({ message: "Error: Email is required" });
    }

    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    return res.status(200).json({ message: "User found", data: existingUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.patch("/v1/api/users/:email", authenticated, async (req, res) => {
  /*
      #swagger.tags = ['Users']
      #swagger.security = [{"bearerAuth": []}]
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'User data to be updated.',
        required: false,
        schema: {
          name: "string",
          email: "string",
          phone_number: "string",
          gender: "string",
          password: "string"
        }
      }
    */
  try {
    const { password, ...body } = await req.body;
    const { email } = req.params;

    if (!email) {
      return res.status(403).json({ message: "Error: Email is required" });
    }

    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    if (password) {
      const newPassword = await hashPassword(password);
      await updateUserByEmail(email, { password: newPassword });
    } else {
      await updateUserByEmail(email, body);
    }
    return res.status(200).json({ message: "User data updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.delete(
  "/v1/api/users/:email",
  authenticated,
  authorized("Admin"),
  async (req, res) => {
    /*
      #swagger.tags = ['Users']
      #swagger.security = [{"bearerAuth": []}]
    */
    try {
      const { email } = req.params;

      if (!email) {
        return res.status(403).json({ message: "Error: Email is required" });
      }

      const existingUser = await getUserByEmail(email);
      if (!existingUser) {
        return res.status(404).json({ message: "User does not exist" });
      }

      await deleteUserByEmail(email);
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
