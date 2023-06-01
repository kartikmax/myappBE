import mongoose from 'mongoose';
import UsersRole from '../models/UsersRoleModel.js';


const getUsersRoleList = async (req, res, next) => {
  try {
    let data = await UsersRole.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateUsersRoleByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await UsersRole.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "UsersRole updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getUsersRoleById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await UsersRole.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUsersRoleById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await UsersRole.findByIdAndRemove(id)
    res.status(200).json({ messgae: "UsersRole deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteUsersRoleByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UsersRole.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'UsersRole not found' });
    }
    res.status(200).json({ message: "UsersRole deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeUsersRole = async (req, res, next) => {
  try {
    let newModel = new UsersRole(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkUsersRole = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await UsersRole.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkUsersRole = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new UsersRole(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getUsersRoleList,
  storeUsersRole,
  getUsersRoleById,
  deleteUsersRoleById,
  updateUsersRoleByID,
  updateBulkUsersRole,
  insertBulkUsersRole
}
