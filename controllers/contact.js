
const Contact = require("../models/Contact")
exports.ShowAllContact = async (req,res)=>{
    try {
       const ShowAllContact= await Contact.find()
       res.status(200).send({msg:'contact List',ShowAllContact})
    } catch (error) {
       res.status(500).send({msg:"could not show contact list"})
    }
 }


exports.AddContact= async (req,res)=>{
    const {name,email,age}=req.body 
 
    
    
     try {
 
       const found= await Contact.findOne({email})
       if (found){ return  res.status(400).send({msg:'Contact already exist'})}
    
    
 
        const AddContact=  new Contact(req.body)
        await AddContact.save()
        res.status(200).send({msg:'added',AddContact})
        
         
     } catch (error) {
         res.status(500).send({msg:"contact not added"})
         
     }
  }

exports.DeleteContact= async (req,res)=>{
    const {ID}=req.params
    try {
      
       const deleted= await Contact.findByIdAndDelete(ID)
       res.status(200).send({msg:'contact deleted'})
 
    } catch (error) {
       res.status(500).send({msg:"could not deleted contact"})
       
    }
 }

exports.UpdateContact =async (req,res)=>{
    const {ID}=req.params
    try {
       
       const updated= await Contact.findByIdAndUpdate(ID,{ $set: {... req.body}} )
       res.status(200).send({msg:'contact updated',updated})
 
 
    } catch (error) {
       res.status(500).send({msg:"could not update contact"})
       
    }
 }

exports.ShowOneContact=async (req,res)=>{
    const {ID}=req.params
    try {
       const getOne= await Contact.findById(ID)
       res.status(200).send({msg:'show one contact',getOne})
    } catch (error) {
       res.status(500).send({msg:"could not show contact"})
       
    }
 } 