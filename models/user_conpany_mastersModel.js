import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const user_conpany_mastersSchema = new Schema( {

    company_name : {    type :    String ,      },

    company_website_url : {    type :    String ,      },company_icon : {    type :    String ,      },company_location : {    type :    String ,      },company_product_category : {    type :    String ,      },user_id : {    type : Schema.Types.ObjectId  ,  ref : 'users',      },company_description : {    type :    String ,      }, 
    

  },  {timestamps:true}
  )

const user_conpany_masters = mongoose.model("user_conpany_masters", user_conpany_mastersSchema);

export default user_conpany_masters;