const { prisma } = require("../utils/connect");

const createCandidate = async (newData) => {
  try {
    const candidates = await prisma.candidate.create({ data: newData });
    return candidates;
  } catch (error) {
    throw error;
  }
};

const getCandidates = async () => {
  try {
    const candidates = await prisma.candidate.findMany({
      include: {
        vote: true,
      },
    });
    return candidates;
  } catch (error) {
    throw error;
  }
};

const getCandidateById = async (id) => {
  try {
    const candidates = await prisma.candidate.findUnique({
      where: { id },
      include: {
        vote: true,
      },
    });
    return candidates;
  } catch (error) {
    throw error;
  }
};

const updateCandidateById = async (id, newData) => {
  try {
    const candidates = await prisma.candidate.update({
      where: { id },
      data: { ...newData },
    });
    return candidates;
  } catch (error) {
    throw error;
  }
};

const deleteCandidateById = async (id) => {
  try {
    const candidates = await prisma.candidate.delete({
      where: { id },
    });
    return candidates;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createCandidate,
  getCandidates,
  getCandidateById,
  updateCandidateById,
  deleteCandidateById,
};
