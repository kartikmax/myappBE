import mongoose from 'mongoose';
import audio_transcripts from '../models/audio_transcriptsModel.js';


const getaudio_transcriptsList = async (req, res, next) => {
  try {
    let data = await audio_transcripts.find()
    res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const updateaudio_transcriptsByID = async (req, res, next) => {
  try {
    let id = req.query.id
    let updateData = req.body
    const updatedData = await audio_transcripts.findByIdAndUpdate(id, { $set: updateData })
    res.status(200).json({ messgae: "audio_transcripts updated" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const getaudio_transcriptsById = async (req, res, next) => {
  try {
    let id = req.query.id
    let data = await audio_transcripts.findById(id)
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteaudio_transcriptsById = async (req, res, next) => {
  try {
    let id = req.query.id
    const updatedData = await audio_transcripts.findByIdAndRemove(id)
    res.status(200).json({ messgae: "audio_transcripts deleted" })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}

const deleteaudio_transcriptsByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await audio_transcripts.findByIdAndRemove(id);
    if (!result) {
      return res.status(404).json({ message: 'audio_transcripts not found' });
    }
    res.status(200).json({ message: "audio_transcripts deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "An error Occurred" });
  }
}

const storeaudio_transcripts = async (req, res, next) => {
  try {
    let newModel = new audio_transcripts(req.body)
    const data = await newModel.save()
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ messgae: err.message })
  }
}


const updateBulkaudio_transcripts = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          const id = data[x].id
          delete data[x].id
          await audio_transcripts.findByIdAndUpdate(id, { $set: data[x] })
        }
      })
    res.status(200).json({ message: "Bulk Update Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

const insertBulkaudio_transcripts = async (req, res, next) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (data) => {
        for (var x = 0; x < data.length; x++) {
          console.log(data[x])
          let newModel = new audio_transcripts(data[x])
          await newModel.save()
        }
      })
    res.status(200).json({ message: "Bulk Insert Done" })
  } catch (error) {
    res.status(400).json({ messgae: "An error Occoured" })
  }
}

export default {
  getaudio_transcriptsList,
  storeaudio_transcripts,
  getaudio_transcriptsById,
  deleteaudio_transcriptsById,
  updateaudio_transcriptsByID,
  updateBulkaudio_transcripts,
  insertBulkaudio_transcripts
}
