import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const call_scriptsSchema = new Schema( {

    userId : {    type : Schema.Types.ObjectId  ,  ref : 'user',     unique :true,   },

    title : {    type :    String ,      },fileUrl : {    type :    String ,      },leadId : {    type : Schema.Types.ObjectId  ,  ref : 'leads',      }, 
    

  },  {timestamps:true}
  )

const call_scripts = mongoose.model("call_scripts", call_scriptsSchema);

export default call_scripts;