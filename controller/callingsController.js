import mongoose from 'mongoose';
import callings from '../models/callingsModel.js';


const getcallingsList = async (req, res, next) => {
  try {
    let data = await callings.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updatecallingsByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await callings.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "callings updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getcallingsById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await callings.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletecallingsById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await callings.findByIdAndRemove(id)
    res.status(200).json({ messgae: "callings deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletecallingsByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await callings.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'callings not found' });
    }
    res.status(200).json({ message: "callings deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storecallings = async (req, res, next) => {
  try {
    let newModel = new callings(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkcallings = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await callings.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkcallings = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new callings(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getcallingsList,
  storecallings,
  getcallingsById,
  deletecallingsById,
  updatecallingsByID,
  updateBulkcallings,
  insertBulkcallings
}
