import express from 'express';
import srcallsController from "../controller/srcallsController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", srcallsController.storesrcalls)
  .get("/", srcallsController.getsrcallsById)
  .get("/list", srcallsController.getsrcallsList)
  .put("/", srcallsController.updatesrcallsByID)
  .delete("/", srcallsController.deletesrcallsById)
  .post("/bulkInsert", uploader.single("fileCSV"), srcallsController.insertBulksrcalls)
  .post("/bulkUpdate", uploader.single("fileCSV"),srcallsController.updateBulksrcalls)

export default router;



