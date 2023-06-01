import express from 'express';
import lead_reportsController from "../controller/lead_reportsController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", lead_reportsController.storelead_reports)
  .get("/", lead_reportsController.getlead_reportsById)
  .get("/list", lead_reportsController.getlead_reportsList)
  .put("/", lead_reportsController.updatelead_reportsByID)
  .delete("/", lead_reportsController.deletelead_reportsById)
  .post("/bulkInsert", uploader.single("fileCSV"), lead_reportsController.insertBulklead_reports)
  .post("/bulkUpdate", uploader.single("fileCSV"),lead_reportsController.updateBulklead_reports)

export default router;



