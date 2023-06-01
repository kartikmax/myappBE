import mongoose from 'mongoose';
import lead_reports from '../models/lead_reportsModel.js';


const getlead_reportsList = async (req, res, next) => {
  try {
    let data = await lead_reports.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updatelead_reportsByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await lead_reports.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "lead_reports updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getlead_reportsById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await lead_reports.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletelead_reportsById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await lead_reports.findByIdAndRemove(id)
    res.status(200).json({ messgae: "lead_reports deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletelead_reportsByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await lead_reports.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'lead_reports not found' });
    }
    res.status(200).json({ message: "lead_reports deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storelead_reports = async (req, res, next) => {
  try {
    let newModel = new lead_reports(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulklead_reports = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await lead_reports.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulklead_reports = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new lead_reports(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getlead_reportsList,
  storelead_reports,
  getlead_reportsById,
  deletelead_reportsById,
  updatelead_reportsByID,
  updateBulklead_reports,
  insertBulklead_reports
}
