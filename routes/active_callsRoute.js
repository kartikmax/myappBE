import express from 'express';
import active_callsController from "../controller/active_callsController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", active_callsController.storeactive_calls)
  .get("/", active_callsController.getactive_callsById)
  .get("/list", active_callsController.getactive_callsList)
  .put("/", active_callsController.updateactive_callsByID)
  .delete("/", active_callsController.deleteactive_callsById)
  .post("/bulkInsert", uploader.single("fileCSV"), active_callsController.insertBulkactive_calls)
  .post("/bulkUpdate", uploader.single("fileCSV"),active_callsController.updateBulkactive_calls)

export default router;



