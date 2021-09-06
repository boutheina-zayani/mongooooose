const mongoose=require("mongoose")

const ConnectDb=  async ()=>{
    try {
        await  mongoose.connect(process.env.MONGO_URI)
        console.log("DB is connect")
    } catch (error) {
        console.log({msg:"db is not connected"})
    }
 
}
module.exports=ConnectDb; 