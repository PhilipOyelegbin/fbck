const { Router } = require("express");
const {
  createCandidate,
  getCandidates,
  getCandidateById,
  updateCandidateById,
  deleteCandidateById,
} = require("../controller/candidate.controller");
const { authenticated, authorized } = require("../utils/middleware");

const router = Router();

router.post(
  "/v1/api/candidate",
  authenticated,
  authorized("Admin"),
  async (req, res) => {
    /*
      #swagger.tags = ['Candidate']
      #swagger.security = [{"bearerAuth": []}]
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'Candidate data to be created.',
        required: true,
        schema: {
          name: "string",
          gender: "string",
          description: "string",
          image_url: "string",
        }
      }
    */
    try {
      const { name, gender, description, image_url } = await req.body;
      if (!name || !gender) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const candidate = await createCandidate({
        name,
        gender,
        description,
        image_url,
      });
      return res.status(200).json({
        message: "Candidate created successfully",
        data: candidate,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

router.get("/v1/api/candidate", authenticated, async (req, res) => {
  /*
      #swagger.tags = ['Candidate']
      #swagger.security = [{"bearerAuth": []}]
    */
  try {
    const candidate = await getCandidates();
    return res.status(200).json({
      message: "All candidate received successfully",
      data: candidate,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/v1/api/candidate/:id", authenticated, async (req, res) => {
  /*
    #swagger.tags = ['Candidate']
    #swagger.security = [{"bearerAuth": []}]
  */
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(403).json({ message: "Bad request" });
    }

    const candidate = await getCandidateById(id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    return res
      .status(200)
      .json({ message: "Candidate found", data: candidate });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.patch(
  "/v1/api/candidate/:id",
  authenticated,
  authorized("Admin"),
  async (req, res) => {
    /*
      #swagger.tags = ['Candidate']
      #swagger.security = [{"bearerAuth": []}]
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'Candidate data to be updated.',
        required: false,
        schema: {
          name: "string",
          gender: "string",
          description: "string",
          image_url: "string",
        }
      }
    */
    try {
      const body = await req.body;
      const { id } = req.params;
      if (!id) {
        return res.status(403).json({ message: "Bad request" });
      }

      const existingCandidate = await getCandidateById(id);
      if (!existingCandidate) {
        return res.status(404).json({ message: "Candidate does not exist" });
      }

      await updateCandidateById(id, {
        ...body,
      });
      return res
        .status(200)
        .json({ message: "Candidate data updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

router.delete(
  "/v1/api/candidate/:id",
  authenticated,
  authorized("Admin"),
  async (req, res) => {
    /*
      #swagger.tags = ['Candidate']
      #swagger.security = [{"bearerAuth": []}]
    */
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(403).json({ message: "Bad request" });
      }

      const existingCandidate = await getCandidateById(id);
      if (!existingCandidate) {
        return res.status(404).json({ message: "Candidate does not exist" });
      }

      await deleteCandidateById(id);
      return res
        .status(200)
        .json({ message: "Candidate deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
