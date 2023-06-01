import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const audio_transcriptsSchema = new Schema( {

    audio_url : {    type :    String ,      },

    transId : {    type :    String ,      },language_model : {    type :    String ,      },acoustic_model : {    type :    String ,      },language_code : {    type :    String ,      },status : {    type :    String ,      },text : {    type :    String ,      },words : {    type :    Array ,      },confidence : {    type :    String ,      },audio_duration : {    type :    String ,      },createdAt : {    type :    Date ,      },updatedAt : {    type :    Date ,      },auto_highlights_result : {    type :    Object ,      },sentiment_analysis_results : {    type :    Array ,      },utterances : {    type :    Array ,      }, 
    

  },  {timestamps:true}
  )

const audio_transcripts = mongoose.model("audio_transcripts", audio_transcriptsSchema);

export default audio_transcripts;