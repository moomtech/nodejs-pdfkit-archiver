const express = require("express");
const fs = require("fs");
const archiver = require("archiver");
const router = express.Router();

const names = [
  { filename: "Victor" },
  { filename: "Monique" },
  { filename: "Cris" }
];

router.post("/", (req, res) => {
  const archive = archiver("zip", {
    zlib: { level: 9 }
  });

  // archive.pipe(res.attachment("certificados.zip"));
  archive.pipe(res.attachment("certificados.zip"));

  names.map(name => {
    archive.file(`public/certificateID/${name.filename}.pdf`, {
      name: `${name.filename}.pdf`
    });
  });

  archive.finalize();
});

module.exports = router;
