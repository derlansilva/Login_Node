const express = require("express");
const User = require("../models/User");

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
        try {
            const { email , password} =  req.body 

            const user = await User.findByCredentials(email , password);
            if(!user){
                return res.status(401).send({ error : 'Login failed ! Check authentication credentials'})
                
            }
            const token = await user.generateAuthToken()

            res.send({user, token})
        } catch (error) {
            res.status(400).send(error)
        }
    }
}