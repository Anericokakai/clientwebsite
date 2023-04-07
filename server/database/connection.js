import mongoose from "mongoose";
mongoose.Promise=global ;Promise
mongoose.connect('mongodb://localhost:27017/bloggers',{
    useNewUrlParser:true
}).then(()=>{
    console.log('')
})

