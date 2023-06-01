import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const lead_reportsSchema = new Schema( {

    callerId : {    type :    String ,     unique :true,   },

    openDeals : {    type :    Number ,      },openDealsRs : {    type :    Number ,      },closeDeals : {    type :    Number ,      },closeDealsRs : {    type :    Number ,      },dealsWon : {    type :    Number ,      },dealsLost : {    type :    Number ,      },dealsDead : {    type :    Number ,      },stageEnquery : {    type :    Number ,      },lastActivity : {    type :    Date ,      },lastLeadClose : {    type :    Date ,      },callReted : {    type :    Number ,      },totalFeedBacks : {    type :    Number ,      },feedback : {    type :    Array ,      },lastFeedBack : {    type :    Date ,      },warningsInOpenLeads : {    type :    Number ,      },createdAt : {    type :    Date ,      },updatedAt : {    type :    Date ,      }, 
    

  },  {timestamps:true}
  )

const lead_reports = mongoose.model("lead_reports", lead_reportsSchema);

export default lead_reports;