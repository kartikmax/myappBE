import mongoose from 'mongoose';
import leads from '../models/leadsModel.js';


const getleadsList = async (req, res, next) => {
  try {
    let data = await leads.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateleadsByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await leads.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "leads updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getleadsById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await leads.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteleadsById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await leads.findByIdAndRemove(id)
    res.status(200).json({ messgae: "leads deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteleadsByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await leads.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'leads not found' });
    }
    res.status(200).json({ message: "leads deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeleads = async (req, res, next) => {
  try {
    let newModel = new leads(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkleads = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await leads.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkleads = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new leads(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getleadsList,
  storeleads,
  getleadsById,
  deleteleadsById,
  updateleadsByID,
  updateBulkleads,
  insertBulkleads
}
