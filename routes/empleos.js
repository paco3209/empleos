var express = require('express');
var router = express.Router();
const Empleo = require('../models/empleo')
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

/* GET users listing. */
router.post('/nuevoEmpleo',upload.single('productImage'), (req, res,next) => {
  var nuevoEmpleo = new Empleo({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    email: req.body.email,
    empresa: req.body.empresa,
    website: req.body.website,
    comoaplicar: req.body.comoaplicar,
    tipoempleo: req.body.tipoempleo,
    imagePath: req.file.path

  })

  nuevoEmpleo.save().then((newPost) => {
    return res.status(200).json({
      success: true,
      date: newPost
    })

  }).catch((err) => {
    return res.status(500).json({
      message: err
    })
  });


});

module.exports = router;
