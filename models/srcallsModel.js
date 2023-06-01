import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const srcallsSchema = new Schema( {

    callId : {    type :    String ,      },

    message : {    type :    String ,      },status : {    type :    String ,      },callFrom : {    type :    String ,      },callTo : {    type :    String ,      },createdAt : {    type :    Date ,      },updatedAt : {    type :    Date ,      }, 
    

  },  {timestamps:true}
  )

const srcalls = mongoose.model("srcalls", srcallsSchema);

export default srcalls;