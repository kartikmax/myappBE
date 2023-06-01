import express from 'express';
import company_productsController from "../controller/company_productsController.js";
import uploader from "../middleware/uploader.js";
const router = express.Router()

router
  .post("/", company_productsController.storecompany_products)
  .get("/", company_productsController.getcompany_productsById)
  .get("/list", company_productsController.getcompany_productsList)
  .put("/", company_productsController.updatecompany_productsByID)
  .delete("/", company_productsController.deletecompany_productsById)
  .post("/bulkInsert", uploader.single("fileCSV"), company_productsController.insertBulkcompany_products)
  .post("/bulkUpdate", uploader.single("fileCSV"),company_productsController.updateBulkcompany_products)

export default router;



