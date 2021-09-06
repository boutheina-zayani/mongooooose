const express=require("express")
const {AddContact,ShowAllContact, DeleteContact, UpdateContact,ShowOneContact} = require("../controllers/contact")
const Contact = require("../models/Contact")
 const route=express.Router()


 // method post : add contact 
 // req.body
 route.post("/",AddContact)


// show all contacts
route.get('/',ShowAllContact)


//delete contact 
//req.params
route.delete('/:ID',DeleteContact)


// update contact
 // req.body req.params
route.put('/:ID',UpdateContact)



// show one contact 
route.get('/:ID', ShowOneContact)

 module.exports=route