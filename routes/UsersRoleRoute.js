import express from 'express';
import UsersRoleController from "../controller/UsersRoleController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", UsersRoleController.storeUsersRole)
  .get("/", UsersRoleController.getUsersRoleById)
  .get("/list", UsersRoleController.getUsersRoleList)
  .put("/", UsersRoleController.updateUsersRoleByID)
  .delete("/", UsersRoleController.deleteUsersRoleById)
  .post("/bulkInsert", uploader.single("fileCSV"), UsersRoleController.insertBulkUsersRole)
  .post("/bulkUpdate", uploader.single("fileCSV"),UsersRoleController.updateBulkUsersRole)

export default router;



