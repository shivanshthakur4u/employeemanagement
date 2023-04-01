// controller

import { resolve } from 'styled-jsx/css'
import User from '../model/user'


//get

export async function getUsers(req,res){

    try{
        const users= await User.find({})

        if(!users) return res.status(404).json({error:"Data not found"})

      else{
        res.status(200).json({users})
      }
    }

    catch(error){
         res.status(404).json({error:"Error while fetching Data"})
    }

}

// post

export async function postUsers(req,res){
try{

    const formData =req.body;

    if(!formData) return res.status(404).json({error:"Form data not provided...!"});

else{
    const user = new User(formData)
    user.save().then(()=>{
        res.status(201).json({
            message: 'User added successfully!'
          });
        
    })
}

    

}
catch(error){
    res.status(404).json({error:"Error while Posting Data"})
}
}

//put

export async function UpdateUsers(req,res){
    try{
        const {userid} = req.query;
        const formData =req.body;
    
        if(userid && formData){
            await User.findByIdAndUpdate(userid,formData);
            res.status(200).json(formData)
        }

        res.status(404).json({error:"User not selected"})
      
    }
    catch(error){
        res.status(404).json({error:"Error while Updating Data"})
    }
    }


export async function DeleteUsers(req,res){
        try{
            const {userid} = req.query;
         
        
            if(userid){
                await User.findByIdAndRemove(userid)
                res.status(200).json({deleted:userid})
            }
    
            res.status(404).json({error:"User not selected"})
          
        }
        catch(error){
            res.status(404).json({error:"Error while Deleting Data"})
        }
        }

