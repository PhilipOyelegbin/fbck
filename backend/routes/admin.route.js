const { Router } = require("express");
const {
  createAdmin,
  getAdmins,
  getAdminById,
  updateAdminById,
  deleteAdminById,
} = require("../controller/admin.controller");
const { authenticated, authorized } = require("../utils/middleware");
const { hashPassword } = require("../utils/auth");

const router = Router();

router.post(
  "/api/v1/admin",
  authenticated,
  authorized("Admin"),
  async (req, res) => {
    /*
      #swagger.tags = ['Admin']
      #swagger.security = [{"bearerAuth": []}]
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'Admin data to be created.',
        required: true,
        schema: {
          name: "string",
          email: "string",
          password: "string",
        }
      }
    */
    try {
      const { name, email, password, phone_number } = await req.body;
      if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const admin = await createAdmin({
        name,
        email,
        phone_number,
        password: await hashPassword(password),
      });
      return res
        .status(200)
        .json({ message: "Admin created successfully", data: admin });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

router.get(
  "/api/v1/admin",
  authenticated,
  authorized("Admin"),
  async (req, res) => {
    /*
      #swagger.tags = ['Admin']
      #swagger.security = [{"bearerAuth": []}]
    */
    try {
      const admin = await getAdmins();
      return res
        .status(200)
        .json({ message: "All admin received successfully", data: admin });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

router.get(
  "/api/v1/admin/:id",
  authenticated,
  authorized("Admin"),
  async (req, res) => {
    /*
    #swagger.tags = ['Admin']
    #swagger.security = [{"bearerAuth": []}]
  */
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(403).json({ message: "Bad request" });
      }

      const admin = await getAdminById(id);
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
      return res.status(200).json({ message: "Admin found", data: admin });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

router.patch(
  "/api/v1/admin/:id",
  authenticated,
  authorized("Admin"),
  async (req, res) => {
    /*
      #swagger.tags = ['Admin']
      #swagger.security = [{"bearerAuth": []}]
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'Admin data to be updated.',
        required: false,
        schema: {
          name: "string",
          email: "string",
          phone_number: "string",
          password: "string"
        }
      }
    */
    try {
      const { password, ...body } = await req.body;
      const { id } = req.params;

      if (!id) {
        return res.status(403).json({ message: "Bad request" });
      }

      const existingAdmin = await getAdminById(id);
      if (!existingAdmin) {
        return res.status(404).json({ message: "Admin does not exist" });
      }

      if (password) {
        const newPassword = await hashPassword(password);
        await updateAdminById(id, { password: newPassword });
      } else {
        await updateAdminById(id, body);
      }
      return res
        .status(200)
        .json({ message: "Admin data updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

router.delete(
  "/api/v1/admin/:id",
  authenticated,
  authorized("Admin"),
  async (req, res) => {
    /*
    #swagger.tags = ['Admin']
    #swagger.security = [{"bearerAuth": []}]
  */
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(403).json({ message: "Bad request" });
      }

      const existingAdmin = await getAdminById(id);
      if (!existingAdmin) {
        return res.status(404).json({ message: "Admin does not exist" });
      }

      await deleteAdminById(id);
      return res.status(200).json({ message: "Admin deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
