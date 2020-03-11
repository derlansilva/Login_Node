
const mongoose = require("mongoose");

const RespostaSchema = new mongoose.Schema({
    description:{
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require: true
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Perguntas",
        require: true
    },
    date: {
        type: Date,
        default: Date.now,
        require: true
    }
})

const Resposta = mongoose.model("Respostas" , RespostaSchema);

module.exports = Resposta;