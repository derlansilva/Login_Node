const express = require("express");
const Perguntas = require("../models/Perguntas");
const authMiddleware = require("../middleware/auth");
const User = require("../controllers/UserControllers")


module.exports = {
    async index (req , res){
        const pergunta = await Perguntas.find().populate('user');

        return res.json(pergunta);
    },


    async create(req , res ){

        const user = User;
        try {
            const pergunta = await Perguntas.create({ ...req.body , user: req.userId});

            return res.json(pergunta);
        } catch (error) {
            return  res.status(400).send({ error :"Error creating"})
        }
    }

}