import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const srcalllogsSchema = new Schema( {

    additional_info : {    type :    String ,      },

    attempt_number : {    type :    Number ,      },call_flow : {    type :    String ,      },call_type : {    type :    String ,      },called : {    type :    String ,      },caller : {    type :    String ,      },caller_in_fs : {    type :    String ,      },data : {    type :    String ,      },did_number : {    type :    String ,      },end_time : {    type :    Date ,      },events : {    type :    String ,      },fs : {    type :    String ,      },fs_chan_info : {    type :    String ,      },hangup_cause : {    type :    Number ,      },hangup_time : {    type :    Date ,      },ivr_refnum : {    type :    String ,      },order_time : {    type :    Date ,      },pickup_time : {    type :    Date ,      },posting_time : {    type :    Date ,      },priority : {    type :    Number ,      },ref_uuid : {    type :    String ,      },start_time : {    type :    Date ,      },unique_id : {    type :    String ,      },createdAt : {    type :    Date ,      },updatedAt : {    type :    Date ,      }, 
    

  },  {timestamps:true}
  )

const srcalllogs = mongoose.model("srcalllogs", srcalllogsSchema);

export default srcalllogs;