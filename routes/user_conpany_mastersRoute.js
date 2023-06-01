import express from 'express';
import user_conpany_mastersController from "../controller/user_conpany_mastersController.js";
import uploader from "../middleware/uploader.js";
import fetchuser from '../middleware/fetchuser.js';
const router = express.Router()

router
  .post("/", user_conpany_mastersController.storeuser_conpany_masters)
  .get("/",fetchuser, user_conpany_mastersController.getuser_conpany_mastersById)
  .get("/list", user_conpany_mastersController.getuser_conpany_mastersList)
  .put("/", user_conpany_mastersController.updateuser_conpany_mastersByID)
  .delete("/", user_conpany_mastersController.deleteuser_conpany_mastersById)
  .post("/bulkInsert", uploader.single("fileCSV"), user_conpany_mastersController.insertBulkuser_conpany_masters)
  .post("/bulkUpdate", uploader.single("fileCSV"),user_conpany_mastersController.updateBulkuser_conpany_masters)

export default router;



