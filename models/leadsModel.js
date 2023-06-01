import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const leadsSchema = new Schema( {

    companyId : {    type :    Number ,      },

    customerId : {    type :    Number ,      },potential_deal_size : {    type :    String ,      },win_probability : {    type :    String ,      },created_by : {    type :    String ,      },customer_name : {    type :    String ,      },inquiry : {    type :    String ,      },existing_budget : {    type :    String ,      },leadStatus : {    type :    String ,      },leadStage : {    type :    String ,      },lead_title : {    type :    String ,      },lead_description : {    type :    String ,      },notes : {    type :    Array ,      },source : {    type :    String ,      },leadId : {    type :    String ,      },owners : {    type :    Array ,      }, 
    

  },  {timestamps:true}
  )

const leads = mongoose.model("leads", leadsSchema);

export default leads;