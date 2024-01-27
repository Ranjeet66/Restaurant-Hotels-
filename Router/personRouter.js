const express = require('express');
const router = express.Router();
const Person = require('./../models/person');
const { findById } = require('../models/MenuItem');


router.post('/',async(req,res)=>{
    try {
    const data = req.body;
    const newPerson = new Person(data);
    const respone =  await newPerson.save();
    console.log('data saved');
    res.status(200).json(respone);
          
       }catch (err) {
         console.log(err); 
         res.status(500).json({error:'Interal Server error'});
    
       }
   });

   router.get('/',async(req,res)=>{
    try {
      const data =  await Person.find(); 
      console.log(' fetch the data');
      res.status(200).json(data);
    } catch (error) {
        console.log(err); 
        res.status(500).json({error:'Interal Server error'});  
    }
});

router.get('/:workType',async(req,res)=>{
    try {
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter' ){
     const respone = await Person.find({work:workType});
     console.log('response Fetch');
     res.status(200).json(respone);   
    }else{
        res.status(404).json({error:'Invalid Work Type'})
    }
    } catch (err) {
        console.log(err); 
        res.status(500).json({error:'Interal Server error'});  
    }
});


router.put('/:id',async(req,res)=>{
    try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const respone = await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true,
        runValidators:true,
    });
    if(!respone){
        return res.status(404).json({error:'Person Not Found'});
    }
    console.log('data Updated');
    res.status(200).json(respone);
    } catch (err) {
        console.log(err); 
        res.status(500).json({error:'Interal Server error'});    
    }
});

router.delete('/:id',async(req,res)=>{
    try {
        const personId = req.params.id;
        const respone = await Person.findByIdAndDelete(personId)
        if(!respone){
            return res.status(404).json({error:'Person Not Found'});
        }
        console.log('data delete');
        res.status(200).json({message:'Person Deleted Successfully'});
    } catch (err) {
        console.log(err); 
        res.status(500).json({error:'Interal Server error'}); 
    }
});

module.exports = router;
