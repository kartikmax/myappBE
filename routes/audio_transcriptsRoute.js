import express from 'express';
import audio_transcriptsController from "../controller/audio_transcriptsController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", audio_transcriptsController.storeaudio_transcripts)
  .get("/", audio_transcriptsController.getaudio_transcriptsById)
  .get("/list", audio_transcriptsController.getaudio_transcriptsList)
  .put("/", audio_transcriptsController.updateaudio_transcriptsByID)
  .delete("/", audio_transcriptsController.deleteaudio_transcriptsById)
  .post("/bulkInsert", uploader.single("fileCSV"), audio_transcriptsController.insertBulkaudio_transcripts)
  .post("/bulkUpdate", uploader.single("fileCSV"),audio_transcriptsController.updateBulkaudio_transcripts)

export default router;



