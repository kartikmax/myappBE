import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const rolesSchema = new Schema( {

    name : {    type :    String ,      },

     
    

  },  {timestamps:true}
  )

const roles = mongoose.model("roles", rolesSchema);

export default roles;