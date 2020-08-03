const express = require(`express`);
const router = express.Router();
const getController = require(`../controllers/home`);

// GET: /
router.get(`/`, getController.getHome);

// POST: /
router.post(`/`, getController.postHome);

module.exports = router;