import mongoose from 'mongoose';
import active_calls from '../models/active_callsModel.js';


const getactive_callsList = async (req, res, next) => {
  try {
    let data = await active_calls.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateactive_callsByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await active_calls.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "active_calls updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getactive_callsById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await active_calls.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteactive_callsById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await active_calls.findByIdAndRemove(id)
    res.status(200).json({ messgae: "active_calls deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteactive_callsByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await active_calls.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'active_calls not found' });
    }
    res.status(200).json({ message: "active_calls deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeactive_calls = async (req, res, next) => {
  try {
    let newModel = new active_calls(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkactive_calls = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await active_calls.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkactive_calls = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new active_calls(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getactive_callsList,
  storeactive_calls,
  getactive_callsById,
  deleteactive_callsById,
  updateactive_callsByID,
  updateBulkactive_calls,
  insertBulkactive_calls
}
