const mongoose = require('mongoose')

const TravelSchema = mongoose.Schema({
    title:{
        required:[true, 'Title is required'],
        // maxLength:[4, "Must be at least 4 characters"],
        // minLength:[3, 'must be at leas 3 characters'],
        type:String
      
    },
    message:{
        type:String,
        required:[true, 'Message is required'],
        minLength:[20, 'Must be more than 5 words'],
        
    },
    // tag:{
    //     type:String
    // },
    // creater:{
    //     type:String
    // },
    tags:[String],
    image:{
        type: String,
        required:[true, 'Image address is required'],
        
    },
    // likeCount:{
    //     type: Number,
    //     default: 0
    // }

}, {timestamps:true})

// AuthorSchema.path('name').validate(async(name)=>{
//     const nameCount = await mongoose.models.Author.countDocuments({name})
//     return !nameCount
// }, 'Author already exists')

const Travel = mongoose.model('Travel', TravelSchema)

module.exports= Travel