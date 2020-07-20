const express = require('express');
const router = express.Router();

const announcementController = require("../controllers/announcement")

router.get("/read",announcementController.readAllAnnouncement)
router.get("/read/:id",announcementController.readOneAnnouncement)
router.put("/update/:id",announcementController.editAnnouncement)
router.delete("/delete/:id",announcementController.deleteAnnouncement)
router.post("/add",announcementController.addAnnouncement)
router.get("/read/top/:id", announcementController.readTopAnnouncement)

module.exports = router;