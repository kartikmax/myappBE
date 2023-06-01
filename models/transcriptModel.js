import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const transcriptSchema = new Schema( {

    transcript_body : {    type :    String ,      },

    words : {    type :    Array ,      },transcript_id : {    type :    Number ,      }, 
    

  },  {timestamps:true}
  )

const transcript = mongoose.model("transcript", transcriptSchema);

export default transcript;