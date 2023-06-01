import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const salesSchema = new Schema( {

    lead_id : {    type : Schema.Types.ObjectId  ,  ref : 'leads',     unique :true,   },

    customer_name : {    type :    String ,     },company_name : {    type :    String ,      },client_poc : {    type :    Number ,     unique :true,   },email : {    type :    String  ,      },quick_actions : {    type :    String ,      },more_contacts : {    type :    String ,      },lead_stage : {    type :    String ,      },lead_status : {    type :    Boolean ,      },owners : {    type :    String ,      },lead_inquiry : {    type :    String ,      },product : {    type :    String ,      },activity_history : {    type :    String ,      },last_activity : {    type :    String ,      },next_auction_date : {    type :    Date ,      },win_probability : {    type :    String ,      },deal_size : {    type :    Number ,      },existing_budget : {    type :    String ,      },lead_source : {    type :    String ,      },notes : {    type :    String ,      }, 
    

  },  {timestamps:true}
  )

const sales = mongoose.model("sales", salesSchema);

export default sales;