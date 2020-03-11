const express = require("express");
const User = require("../models/User");
const bcript = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../../config/auth")


module.exports={

    async listar(req , res){
        const user = await User.find();

        return res.json(user)
    },

    async create(req , res ){
       const user = await User.create(req.body)

        return res.json(user)
    },

    async login(req , res){
        const { email , password } = req.body;
        
        const user = await User.findOne({ email}).select('+password');

        if(!user)
            return res.status(400).send({error : "User not found"});

        if(!await bcript.compare(password , user.password))
            return res.status(400).send({error : "Invalid password"});


        user.password = undefined;

        const token = jwt.sign({ id : user.id } , auth.secret , {
            expiresIn : 86400
        })

        res.send({
            user , 
            token
        });
    },

    async toke(req , res){
        res.send({ok : true , user : req.userId})
    },

}