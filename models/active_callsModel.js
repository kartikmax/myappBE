import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const active_callsSchema = new Schema( {

    callId : {    type : Schema.Types.ObjectId  ,  ref : 'srcalls',      },

    call_title : {    type :    String ,     unique :true,   },leadId : {    type :    Number ,  ref : 'leads',     unique :true,   },companyId : {    type :    Number ,     unique :true,   },customerId : {    type : Schema.Types.ObjectId  ,  ref : 'customers',     unique :true,   },call_date : {    type :    String ,      },call_start_time : {    type :    String ,      }, 
    

  },  {timestamps:true}
  )

const active_calls = mongoose.model("active_calls", active_callsSchema);

export default active_calls;