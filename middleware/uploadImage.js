const fs = require("fs");

module.exports = async function (req, res, next) {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: "No files were uploaded" });
    }

    const file = req.files.file;

    if (file.size > 1024 * 1024) {
      //1 mb
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large." });
    }

    if (file.size !== "image/jpeg" && file.mimetype !== "image/png") {
      //File format
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is incorrect" });
    }

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      throw err;
    }
  });
};
