const express = require("express");
const Resposta = require("../models/Respostas");

module.exports = {
    async create(req , res){
        try {
            const resposta = await Resposta.create({...req.body , user : req.userId});

            return res.json(resposta);
        } catch (error) {
            return  res.status(400).send({ error :"Error creating"})
        }
    },

    async index (req , res){
        const resposta = await Resposta.find().populate('user');

        return res.json(resposta);
    },

}