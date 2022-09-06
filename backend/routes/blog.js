const router=require("express").Router();
 const blogs=require("../controllers/blog");
 const {verifyTokeAndAdmin,verifyTokenAndAuthorization}=require("./verication")

//  ADD BLOGPOST
 router.post("/blog" , async (req,res)=>{
const newBlog= new blogs({
    blogImage:req.body.blogImage,
    blogTitle:req.body.blogTitle,
    blogDescription:req.body.blogDescription
})
console.log(newBlog)
try{
    const savedBlog=await newBlog.save()
    console.log(newBlog)
    res.status(201).json(savedBlog)
}
catch(err){
res.status(404).json(err)
} })


//  UPDATE BLOGPOPST
router.put("/:id", verifyTokeAndAdmin, async (req,res)=>{
    try{
        const id=req.params.id
        const updates=req.body
        const options={new:true}
        const updatedBlog= await blogs.findByIdAndUpdate(id,updates,options)
        res.status(200).json(updatedBlog)
    }
    catch(err){
        res.status(500).json(err)
    }
    })

   // DELETE BLOGPOST
   router.delete("/:id",verifyTokeAndAdmin,async(req,res)=>{
    try{
        res.status(200).json("blog deleted")
    return await blogs.findByIdAndDelete(req.params.id)
    
    }
    catch(err){
    res.status(404).json("blog not Found")
    }})
    


//FIND BY ID

router.get("/find/:id", async(req,res)=>{


    try{ 
        

        const blog=await blogs.findById(req.params.id)
        const {password,...others}=blog._doc
        res.status(200).json(others)
    }
    catch(err){
        res.status(404).json(err)

    }


})


// FIND ALL
router.get("/", async(req,res)=>{


    try{ 
        const blog=await blogs.find()
        res.status(200).json(blog)
    }
    catch(err){
        res.status(404).json(err)

    }
})





module.exports=blogs

