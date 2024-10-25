const { Router } = require("express");
const { authenticated, authorized } = require("../utils/middleware");
const {
  createVote,
  getVotes,
  getVoteById,
  deleteVoteById,
  deleteVotes,
} = require("../controller/vote.controller");
const { prisma } = require("../utils/connect");

const router = Router();

router.post(
  "/v1/api/vote",
  // authenticated,
  // authorized("ADMIN"),
  async (req, res) => {
    /*
      #swagger.tags = ['Vote']
      #swagger.security = [{"bearerAuth": []}]
    */
    try {
      const { userId, candidateId } = await req.body;
      if (!userId || !candidateId) {
        return res.status(400).json({ message: "Bad request" });
      }

      const existingVote = await prisma.vote.findFirst({ where: { userId } });
      if (existingVote) {
        return res.status(400).json({ message: "User has already voted" });
      }

      const vote = await createVote(userId, candidateId);
      return res
        .status(200)
        .json({ message: "Vote created successfully", data: vote });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

router.get("/v1/api/vote", async (req, res) => {
  // #swagger.tags = ['Vote']
  try {
    const vote = await getVotes();
    return res.status(200).json({ message: "All vote found", data: vote });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/v1/api/vote/:id", async (req, res) => {
  // #swagger.tags = ['Vote']
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(403).json({ message: "Bad request" });
    }

    const existingVote = await getVoteById(id);
    if (!existingVote) {
      return res.status(404).json({ message: "Vote does not exist" });
    }

    return res.status(200).json({ message: "Vote found", data: existingVote });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// router.patch(
//   "/v1/api/Vote/:id",
//   authenticated,
//   authorized("ADMIN"),
//   async (req, res) => {
//     /*
//       #swagger.tags = ['Vote']
//       #swagger.security = [{"bearerAuth": []}]
//       #swagger.parameters['body'] = {
//         in: 'body',
//         description: 'Vote data to be updated.',
//         required: false,
//         schema: {
//           paln: "string",
//           amount: 0,
//           description: "string",
//           features: ["string"]
//         }
//       }
//     */
//     try {
//       const body = await req.body;
//       const { id } = req.params;
//       if (!id) {
//         return res.status(403).json({ message: "Bad request" });
//       }

//       const existingVote = await getVoteById(id);
//       if (!existingVote) {
//         return res.status(404).json({ message: "Vote does not exist" });
//       }

//       await updateVoteById(id, body);
//       return res
//         .status(200)
//         .json({ message: "Vote data updated successfully" });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   }
// );

router.delete(
  "/v1/api/vote/:id",
  // authenticated,
  // authorized("ADMIN"),
  async (req, res) => {
    /*
      #swagger.tags = ['Vote']
      #swagger.security = [{"bearerAuth": []}]
    */
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(403).json({ message: "Bad request" });
      }

      const existingVote = await getVoteById(id);
      if (!existingVote) {
        return res.status(404).json({ message: "Vote does not exist" });
      }

      await deleteVoteById(id);
      return res.status(200).json({ message: "Vote deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

router.delete(
  "/v1/api/vote",
  // authenticated,
  // authorized("ADMIN"),
  async (req, res) => {
    /*
      #swagger.tags = ['Vote']
      #swagger.security = [{"bearerAuth": []}]
    */
    try {
      await deleteVotes();
      return res.status(200).json({ message: "All vote deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
