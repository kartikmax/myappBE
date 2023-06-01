import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from './validator.js';


const company_productsSchema = new Schema( {

    product_description : {    type :    String ,      },

     
    

  },  {timestamps:true}
  )

const company_products = mongoose.model("company_products", company_productsSchema);

export default company_products;