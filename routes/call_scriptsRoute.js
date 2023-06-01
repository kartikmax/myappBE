import express from 'express';
import call_scriptsController from "../controller/call_scriptsController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", call_scriptsController.storecall_scripts)
  .get("/", call_scriptsController.getcall_scriptsById)
  .get("/list", call_scriptsController.getcall_scriptsList)
  .put("/", call_scriptsController.updatecall_scriptsByID)
  .delete("/", call_scriptsController.deletecall_scriptsById)
  .post("/bulkInsert", uploader.single("fileCSV"), call_scriptsController.insertBulkcall_scripts)
  .post("/bulkUpdate", uploader.single("fileCSV"),call_scriptsController.updateBulkcall_scripts)

export default router;



