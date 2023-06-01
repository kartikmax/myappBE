import mongoose from 'mongoose';
import roles from '../models/rolesModel.js';


const getrolesList = async (req, res, next) => {
  try {
    let data = await roles.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updaterolesByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await roles.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "roles updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getrolesById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await roles.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleterolesById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await roles.findByIdAndRemove(id)
    res.status(200).json({ messgae: "roles deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleterolesByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await roles.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'roles not found' });
    }
    res.status(200).json({ message: "roles deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeroles = async (req, res, next) => {
  try {
    let newModel = new roles(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkroles = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await roles.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkroles = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new roles(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getrolesList,
  storeroles,
  getrolesById,
  deleterolesById,
  updaterolesByID,
  updateBulkroles,
  insertBulkroles
}
