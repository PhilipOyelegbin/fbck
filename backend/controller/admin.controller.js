const { prisma } = require("../utils/connect");

const createAdmin = async (newData) => {
  try {
    const admins = await prisma.admin.create({ data: newData });
    return admins;
  } catch (error) {
    throw error;
  }
};

const getAdmins = async () => {
  try {
    const admins = await prisma.admin.findMany();
    return admins;
  } catch (error) {
    throw error;
  }
};

const getAdminById = async (id) => {
  try {
    const admins = await prisma.admin.findUnique({
      where: { id },
    });
    return admins;
  } catch (error) {
    throw error;
  }
};

const updateAdminById = async (id, newData) => {
  try {
    const admins = await prisma.admin.update({
      where: { id },
      data: { ...newData },
    });
    return admins;
  } catch (error) {
    throw error;
  }
};

const deleteAdminById = async (id) => {
  try {
    const admins = await prisma.admin.delete({
      where: { id },
    });
    return admins;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createAdmin,
  getAdmins,
  getAdminById,
  updateAdminById,
  deleteAdminById,
};
