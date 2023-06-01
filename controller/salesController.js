import mongoose from 'mongoose';
import sales from '../models/salesModel.js';


const getsalesList = async (req, res, next) => {
  try {
    let data = await sales.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updatesalesByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await sales.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "sales updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getsalesById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await sales.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletesalesById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await sales.findByIdAndRemove(id)
    res.status(200).json({ messgae: "sales deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletesalesByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await sales.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'sales not found' });
    }
    res.status(200).json({ message: "sales deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storesales = async (req, res, next) => {
  try {
    let newModel = new sales(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulksales = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await sales.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulksales = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new sales(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getsalesList,
  storesales,
  getsalesById,
  deletesalesById,
  updatesalesByID,
  updateBulksales,
  insertBulksales
}
