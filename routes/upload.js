const router = require("express").Router();
const uploadImage = require("../middleware/uploadImage");
const uploadCrtl = require("../controllers/uploadCrtl");
const auth = require("../middleware/auth");

router.post("/upload_avatar", uploadImage, auth, uploadCrtl.uploadAvatar);

module.exports = router;
