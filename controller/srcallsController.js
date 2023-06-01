import mongoose from 'mongoose';
import srcalls from '../models/srcallsModel.js';


const getsrcallsList = async (req, res, next) => {
  try {
    let data = await srcalls.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updatesrcallsByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await srcalls.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "srcalls updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getsrcallsById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await srcalls.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletesrcallsById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await srcalls.findByIdAndRemove(id)
    res.status(200).json({ messgae: "srcalls deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletesrcallsByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await srcalls.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'srcalls not found' });
    }
    res.status(200).json({ message: "srcalls deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storesrcalls = async (req, res, next) => {
  try {
    let newModel = new srcalls(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulksrcalls = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await srcalls.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulksrcalls = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new srcalls(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getsrcallsList,
  storesrcalls,
  getsrcallsById,
  deletesrcallsById,
  updatesrcallsByID,
  updateBulksrcalls,
  insertBulksrcalls
}
