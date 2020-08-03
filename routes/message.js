const express = require(`express`);
const router = express.Router();
const getController = require(`../controllers/home`);

router.get(`/:messageId`, getController.getMessage);

module.exports = router;