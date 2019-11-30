const express = require("express");
const fs = require("fs");
const PDFDocument = require("pdfkit");
const router = express.Router();

const names = [
  { filename: "Victor" },
  { filename: "Monique" },
  { filename: "Cris" }
];

router.post("/", (req, res) => {
  try {
    names.map(name => {
      const doc = new PDFDocument({
        layout: "landscape",
        size: "a4"
      });

      const pdfStream = fs.createWriteStream(
        `public/certificateID/${name.filename}.pdf`
      );

      doc.image("public/images/certificateID.png", 10, 10, { width: 825 });
      doc.fontSize(40).text(name.filename, { align: "center" }, 315);

      doc.pipe(pdfStream);
      doc.end();
    });
  } catch (err) {
    console.error("ERROR:" + err.message);
  } finally {
    res.redirect("/");
  }
});

module.exports = router;
