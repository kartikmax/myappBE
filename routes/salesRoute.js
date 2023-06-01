import express from 'express';
import salesController from "../controller/salesController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", salesController.storesales)
  .get("/", salesController.getsalesById)
  .get("/list", salesController.getsalesList)
  .put("/", salesController.updatesalesByID)
  .delete("/", salesController.deletesalesById)
  .post("/bulkInsert", uploader.single("fileCSV"), salesController.insertBulksales)
  .post("/bulkUpdate", uploader.single("fileCSV"),salesController.updateBulksales)

export default router;



