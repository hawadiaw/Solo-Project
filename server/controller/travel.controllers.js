const Travel = require('../models/travel.models')

module.exports ={
    getAllMemories:(req,res)=>{
        Travel.find().then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    getOneMemory:(req,res)=>{
        Travel.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    addMemory:(req,res)=>{
        Travel.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    updateMemory:(req,res)=>{
        Travel.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
           res.status(400).json(err)
        })

    },
    deleteMemory:(req,res)=>{
        Travel.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    }

}