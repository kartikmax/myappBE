import mongoose from 'mongoose';
import transcript from '../models/transcriptModel.js';


const gettranscriptList = async (req, res, next) => {
  try {
    let data = await transcript.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updatetranscriptByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await transcript.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "transcript updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const gettranscriptById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await transcript.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletetranscriptById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await transcript.findByIdAndRemove(id)
    res.status(200).json({ messgae: "transcript deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletetranscriptByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await transcript.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'transcript not found' });
    }
    res.status(200).json({ message: "transcript deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storetranscript = async (req, res, next) => {
  try {
    let newModel = new transcript(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulktranscript = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await transcript.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulktranscript = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new transcript(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  gettranscriptList,
  storetranscript,
  gettranscriptById,
  deletetranscriptById,
  updatetranscriptByID,
  updateBulktranscript,
  insertBulktranscript
}
