import mongoose from 'mongoose';
import user_conpany_masters from '../models/user_conpany_mastersModel.js';
import  fetchuser  from  "../middleware/fetchuser.js";

const getuser_conpany_mastersList = async (req, res, next) => {
  try {
    // const data = await Note.find({user: req.user.id});
    // res.json(notes);
    let data = await user_conpany_masters.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateuser_conpany_mastersByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await user_conpany_masters.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "user_conpany_masters updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getuser_conpany_mastersById = async (req, res, next) => {
  try {
    // let id = req.query.id
    // let data = await user_conpany_masters.findById(id)
    // res.status(200).json({ data })
    const data = await user_conpany_masters.find({user_id: req.user.id});
    res.json(data);
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteuser_conpany_mastersById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await user_conpany_masters.findByIdAndRemove(id)
    res.status(200).json({ messgae: "user_conpany_masters deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteuser_conpany_mastersByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await user_conpany_masters.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'user_conpany_masters not found' });
    }
    res.status(200).json({ message: "user_conpany_masters deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeuser_conpany_masters = async (req, res, next) => {
  try {
    let newModel = new user_conpany_masters(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkuser_conpany_masters = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await user_conpany_masters.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkuser_conpany_masters = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new user_conpany_masters(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getuser_conpany_mastersList,
  storeuser_conpany_masters,
  getuser_conpany_mastersById,
  deleteuser_conpany_mastersById,
  updateuser_conpany_mastersByID,
  updateBulkuser_conpany_masters,
  insertBulkuser_conpany_masters
}
