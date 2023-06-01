import express from 'express';
import leadsController from "../controller/leadsController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", leadsController.storeleads)
  .get("/", leadsController.getleadsById)
  .get("/list", leadsController.getleadsList)
  .put("/", leadsController.updateleadsByID)
  .delete("/", leadsController.deleteleadsById)
  .post("/bulkInsert", uploader.single("fileCSV"), leadsController.insertBulkleads)
  .post("/bulkUpdate", uploader.single("fileCSV"),leadsController.updateBulkleads)

export default router;



