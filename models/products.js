import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
title:{type: String, required:true},
desc:{type: String, required:true},
category:{type: String, required:true},
brand:{type: String, required:true},
image:{type: String, required:true},
price:{type: Number, required:true},
quantity:{type: Number, required:true},

}, {timestamps:true});


mongoose.models={}


export default mongoose.model("Product",ProductSchema)