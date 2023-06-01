import mongoose from 'mongoose';
import company_products from '../models/company_productsModel.js';


const getcompany_productsList = async (req, res, next) => {
  try {
    let data = await company_products.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updatecompany_productsByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await company_products.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "company_products updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getcompany_productsById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await company_products.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletecompany_productsById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await company_products.findByIdAndRemove(id)
    res.status(200).json({ messgae: "company_products deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletecompany_productsByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await company_products.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'company_products not found' });
    }
    res.status(200).json({ message: "company_products deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storecompany_products = async (req, res, next) => {
  try {
    let newModel = new company_products(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkcompany_products = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await company_products.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkcompany_products = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new company_products(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getcompany_productsList,
  storecompany_products,
  getcompany_productsById,
  deletecompany_productsById,
  updatecompany_productsByID,
  updateBulkcompany_products,
  insertBulkcompany_products
}
