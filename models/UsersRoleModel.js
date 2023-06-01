import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const UsersRoleSchema = new Schema( {

    Role_id : {    type : Schema.Types.ObjectId  ,  ref : 'roles',      },

    Role_name : {    type :    String ,       validate :{ validator : (v) => validator.Validator(v), message: props => `${props.value} is not a valid `},}, 
    

  },  {timestamps:true}
  )

const UsersRole = mongoose.model("UsersRole", UsersRoleSchema);

export default UsersRole;