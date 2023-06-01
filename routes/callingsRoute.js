import express from 'express';
import callingsController from "../controller/callingsController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", callingsController.storecallings)
  .get("/", callingsController.getcallingsById)
  .get("/list", callingsController.getcallingsList)
  .put("/", callingsController.updatecallingsByID)
  .delete("/", callingsController.deletecallingsById)
  .post("/bulkInsert", uploader.single("fileCSV"), callingsController.insertBulkcallings)
  .post("/bulkUpdate", uploader.single("fileCSV"),callingsController.updateBulkcallings)

export default router;



