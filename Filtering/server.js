// const express=require("express")
// import express from "express"

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    console.log("Connected Successfully...!");
}).catch((err) => {
    console.log(err);
})

//nodesession --> animal{name, color} --> doc1,doc2..

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true // makes the search faster
    },
    age: {
        type: Number,
        default: 1,
        min: 0, //max
        // validate: value<10,
        required: true
    },
    color: {
        type: String,
        lowercase: true, //uppercase
        minlength: 5, //maxlength
        immutable: true
    },
    type: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    }
})

// Animal 
const animalModel = mongoose.model("animal", animalSchema)

// animalModel.create({
//     name: "Spike",
//     age: 10,
//     color: "White",
//     type: "Dog",
//     gender:"male"
// }).then(() => {
//     console.log("added...!");
// }).catch((err) => {
//     console.log(err);
// })

// animalModel.find({name:{$regex:"bi",$options:"i"}}).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

//age>3

// animalModel.findOne({name:{$regex:"i",$options:"i"}}).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// animalModel.findOne({name:{$regex:"i",$options:"i"}}).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// animalModel.updateMany({name:{$regex:"i",$options:"i"}},{
//     $inc:{age:1}
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

