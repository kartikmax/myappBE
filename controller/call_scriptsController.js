import mongoose from 'mongoose';
import call_scripts from '../models/call_scriptsModel.js';


const getcall_scriptsList = async (req, res, next) => {
  try {
    let data = await call_scripts.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updatecall_scriptsByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await call_scripts.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "call_scripts updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getcall_scriptsById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await call_scripts.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletecall_scriptsById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await call_scripts.findByIdAndRemove(id)
    res.status(200).json({ messgae: "call_scripts deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletecall_scriptsByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await call_scripts.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'call_scripts not found' });
    }
    res.status(200).json({ message: "call_scripts deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storecall_scripts = async (req, res, next) => {
  try {
    let newModel = new call_scripts(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkcall_scripts = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await call_scripts.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkcall_scripts = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new call_scripts(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getcall_scriptsList,
  storecall_scripts,
  getcall_scriptsById,
  deletecall_scriptsById,
  updatecall_scriptsByID,
  updateBulkcall_scripts,
  insertBulkcall_scripts
}
