const { prisma } = require("../utils/connect");

const createVote = async (user, candidate) => {
  try {
    const vote = await prisma.vote.create({
      data: {
        user: {
          connect: { id: user },
        },
        candidate: {
          connect: { id: candidate },
        },
      },
    });
    return vote;
  } catch (error) {
    throw error;
  }
};

const getVotes = async () => {
  try {
    const vote = await prisma.vote.findMany();
    return vote;
  } catch (error) {
    throw error;
  }
};

const getUserVotes = async (id) => {
  try {
    const userVote = await prisma.user.findUnique({
      where: { id },
      include: {
        votes: true,
      },
    });
    return userVote?.votes;
  } catch (error) {
    throw error;
  }
};

const getCandidateVotes = async (id) => {
  try {
    const candidateVote = await prisma.candidate.findUnique({
      where: { id },
      include: {
        votes: true,
      },
    });
    return candidateVote?.votes;
  } catch (error) {
    throw error;
  }
};

const getVoteById = async (id) => {
  try {
    const vote = await prisma.vote.findUnique({
      where: { id },
    });
    return vote;
  } catch (error) {
    throw error;
  }
};

// const updateVoteById = async (id, newData) => {
//   try {
//     const vote = await prisma.vote.update({
//       where: { id },
//       data: { ...newData },
//     });
//     return vote;
//   } catch (error) {
//     throw error;
//   }
// };

const deleteVoteById = async (id) => {
  try {
    const vote = await prisma.vote.delete({
      where: { id },
    });
    return vote;
  } catch (error) {
    throw error;
  }
};

const deleteVotes = async () => {
  try {
    const vote = await prisma.vote.deleteMany();
    return vote;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createVote,
  getVotes,
  getUserVotes,
  getCandidateVotes,
  getVoteById,
  deleteVotes,
  deleteVoteById,
};
