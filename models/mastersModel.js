import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const mastersSchema = new Schema( {

    lead_status : {    type :    Array ,      },

    source : {    type :    Array ,      },lead_stage : {    type :    Array ,      },work_status : {    type :    Array ,      }, 
    

  },  {timestamps:true}
  )

const masters = mongoose.model("masters", mastersSchema);

export default masters;