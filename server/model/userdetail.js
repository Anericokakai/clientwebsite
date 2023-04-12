const mongooes=require('mongoose')
const schema=mongooes.Schema
const userSchema=new schema({
    username:String,
    useremail:String,
    userpassword:String
},{
    collection:'blogs'
})
module.exports=mongooes.model('blogs',userSchema)