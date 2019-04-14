var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmpleoSchema = new Schema({

    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required:true
    },
    empresa: {
      type: String,
      required:true
    },
    website: {
      type: String,

    },
    comoaplicar: {
      type: String,
      required:true
    },
    tipoempleo:{
      type: String,
      required:true
    },
    imagePath:{
      type: String,

    },
    lugar:{
      type: String,
      required: true
    }
    ,

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('empleo', EmpleoSchema);
