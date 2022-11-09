const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
username:{
type: String},
email:{
    type: String},
password:{
    type: String},
    }, {timestamps:true})
    
    
    UserSchema.virtual('confirm password')
    .get(()=>this._confirmPassword)
    .set(value=>this._confirmPassword =value)
    
    // UserSchema.pre('validate', function(next){
    // if(this.password!== this.confirmPassword){
    // this.invalidate('confirmPassword', 'Pass match')}
    // next()
    // })
    
    // UserSchema.pre('save', async function(next){
    // try{
    // const hashedPassword = await bcrypt.hash(this.password,10)
    // console.log('hashed Password', hashedPassword)
    // this.password = hashedPassword
    // next()} catch{
    // Console.log('error', error)}
    // })
    
    module.exports = mongoose.model('User',UserSchema)
    