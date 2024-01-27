const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');


router.post('/',async(req,res)=>{
    try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const respone =  await newMenu.save();
    console.log('data saved');
    res.status(200).json(respone);
          
       }catch (err) {
         console.log(err); 
         res.status(500).json({error:'Interal Server error'});
    
       }
    
//   const data = req.body;
//   const newPerson = new Person(data);
// //   newPerson.name =  data.name;
//   newPerson.age =  data.age;
//   newPerson.work =  data.work;
//   newPerson.mobile =  data.mobile;
//   newPerson.email =  data.email;
//   newPerson.address =  data.address;
//   newPerson.salary =  data.salary;
// newPerson.save((error,savedPerson)=>{
//     if (error) {
    
//         console.log('Error saving person',error);
//         res.status(500).json({error:'Interal Server error'});
//     }else{
//         console.log('data saved successfully');
//         res.status(200).json(savedPerson)
//     }
});

router.get('/',async(req,res)=>{
try {
  const data =  await MenuItem.find(); 
  console.log(' fetch the data');
  res.status(200).json(data);
} catch (error) {
    console.log(err); 
    res.status(500).json({error:'Interal Server error'});  
}
});


module.exports = router;
