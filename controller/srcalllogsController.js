import mongoose from 'mongoose';
import srcalllogs from '../models/srcalllogsModel.js';


const getsrcalllogsList = async (req, res, next) => {
  try {
    let data = await srcalllogs.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updatesrcalllogsByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await srcalllogs.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "srcalllogs updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getsrcalllogsById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await srcalllogs.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletesrcalllogsById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await srcalllogs.findByIdAndRemove(id)
    res.status(200).json({ messgae: "srcalllogs deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deletesrcalllogsByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await srcalllogs.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'srcalllogs not found' });
    }
    res.status(200).json({ message: "srcalllogs deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storesrcalllogs = async (req, res, next) => {
  try {
    let newModel = new srcalllogs(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulksrcalllogs = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await srcalllogs.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulksrcalllogs = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new srcalllogs(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getsrcalllogsList,
  storesrcalllogs,
  getsrcalllogsById,
  deletesrcalllogsById,
  updatesrcalllogsByID,
  updateBulksrcalllogs,
  insertBulksrcalllogs
}
