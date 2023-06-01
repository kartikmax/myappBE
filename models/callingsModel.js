import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const callingsSchema = new Schema( {

    Sid : {    type :    String ,     unique :true,   },

    ParentCallSid : {    type :    String ,      },DateCreated : {    type :    Date ,      },DateUpdated : {    type :    Date ,      },AccountSid : {    type :    String ,      },To : {    type :    String ,      },From : {    type :    String ,      },PhoneNumberSid : {    type :    String ,      },Status : {    type :    String ,      },StartTime : {    type :    Date ,      },EndTime : {    type :    Date ,      },Duration : {    type :    Date ,      },Price : {    type :    String ,      },Direction : {    type :    String ,      },AnsweredBy : {    type :    String ,      },ForwardedFrom : {    type :    String ,      },CallerName : {    type :    String ,      },Uri : {    type :    String ,      },RecordingUrl : {    type :    String ,      },createdAt : {    type :    Date ,      },updatedAt : {    type :    Date ,      },notes : {    type :    Array ,      },questionnaire : {    type :    Array ,      }, 
    

  },  {timestamps:true}
  )

const callings = mongoose.model("callings", callingsSchema);

export default callings;