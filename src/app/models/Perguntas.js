const mongoose = require("mongoose");

const PerguntasSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },

    description: {
        type: String,
        require: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require : true,
    },  
    date: {
        type : Date,
        default :Date.now,
        required : true,
    },
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Respostas',
    }],
})

const Perguntas= mongoose.model("Perguntas" , PerguntasSchema);

module.exports = Perguntas;