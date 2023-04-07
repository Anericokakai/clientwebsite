import mongoose from "mongoose";
const {Schema,model}=mongoose
const blogschema= new Schema({


    name:String,
    email:String,
    paswsword:String
})

const Blog=model('blog',blogschema)
export default Blog

