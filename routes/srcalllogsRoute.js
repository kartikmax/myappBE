import express from 'express';
import srcalllogsController from "../controller/srcalllogsController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", srcalllogsController.storesrcalllogs)
  .get("/", srcalllogsController.getsrcalllogsById)
  .get("/list", srcalllogsController.getsrcalllogsList)
  .put("/", srcalllogsController.updatesrcalllogsByID)
  .delete("/", srcalllogsController.deletesrcalllogsById)
  .post("/bulkInsert", uploader.single("fileCSV"), srcalllogsController.insertBulksrcalllogs)
  .post("/bulkUpdate", uploader.single("fileCSV"),srcalllogsController.updateBulksrcalllogs)

export default router;



