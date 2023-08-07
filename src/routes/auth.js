const express = require("express");
const authController = require("../controllers/auth");
const schemaValidation = require("../middlewares/schemaValidation");
const authSchema = require("../schemas/auth.schema");

const router = express.Router();

router.post(
  "/",
  schemaValidation.bodyValidation(authSchema.logPayload),
  authController.generateToken
);

router.post(
  "/validate",
  schemaValidation.tokenValidation(authSchema.validateToken),
  authController.verifyToken
);

module.exports = router;
