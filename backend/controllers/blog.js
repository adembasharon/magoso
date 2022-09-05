const mongoose=require("mongoose")
const blogSchema=mongoose.Schema({
blogImage:{type:String,required:true },
blogTitle:{type:String,required:true },
blogDescription:{type:String,required:true },

},
{timestamps:true})


module.exports=mongoose.model("blog",blogSchema) 