import express from 'express';
import rolesController from "../controller/rolesController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", rolesController.storeroles)
  .get("/", rolesController.getrolesById)
  .get("/list", rolesController.getrolesList)
  .put("/", rolesController.updaterolesByID)
  .delete("/", rolesController.deleterolesById)
  .post("/bulkInsert", uploader.single("fileCSV"), rolesController.insertBulkroles)
  .post("/bulkUpdate", uploader.single("fileCSV"),rolesController.updateBulkroles)

export default router;



