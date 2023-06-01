import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const usersSchema = new Schema( {

    name : {    type :    String ,      },

    email : {    type :    String ,     unique :true,   },password : {    type :    String  ,      },phone : {    type :    String ,     unique :true,   },roles : {    type :    Array ,      },token : {    type :    String ,      },createdAt : {    type :    Date ,      },updatedAt : {    type :    Date ,      },designation : {    type :    String ,      }, 
    

  },  {timestamps:true}
  )

const users = mongoose.model("users", usersSchema);

export default users;