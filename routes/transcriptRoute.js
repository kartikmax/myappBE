import express from 'express';
import transcriptController from "../controller/transcriptController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", transcriptController.storetranscript)
  .get("/", transcriptController.gettranscriptById)
  .get("/list", transcriptController.gettranscriptList)
  .put("/", transcriptController.updatetranscriptByID)
  .delete("/", transcriptController.deletetranscriptById)
  .post("/bulkInsert", uploader.single("fileCSV"), transcriptController.insertBulktranscript)
  .post("/bulkUpdate", uploader.single("fileCSV"),transcriptController.updateBulktranscript)

export default router;



