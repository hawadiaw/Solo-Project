const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/traveldb',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('connected to Travel DB')
}).catch((err)=>{
    console.log(err)
})