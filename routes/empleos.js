var express = require('express');
var router = express.Router();

const Empleo = require('../models/empleo')

const multer = require('multer');
require('dotenv').config();
const nodemailer = require('nodemailer');


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

/*Guardar empleo */
router.post('/nuevoEmpleo',upload.single('imagePath'), (req, res,next) => {
  var nuevoEmpleo = new Empleo({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    email: req.body.email,
    empresa: req.body.empresa,
    website: req.body.website,
    comoaplicar: req.body.comoaplicar,
    tipoempleo: req.body.tipoempleo,
    lugar: req.body.lugar
    //imagePath: req.file.path

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

//ver
router.get('/', (req, res,next) => {
  let perPage = 5;
  let page = req.query.page || 1;
  let filtro = req.query.filtro || '.*';
  let filtroCiudad = req.query.filtroCiudad;


    let query = {"$or": [
          { titulo: { '$regex': filtro, '$options': 'i' } },
          { descripcion: { '$regex': filtro, '$options': 'i' } }
      ]}


  /*    "$and": [
                {
                  "$or": [
                        { titulo: { '$regex': filtro, '$options': 'i' } },
                        { descripcion: { '$regex': filtro, '$options': 'i' } }
                      ]
                    }
                    ,
                    {
                      lugar: { '$regex': filtroCiudad, '$options': 'i' }
                    }

      ] */




/*   */


  Empleo
    .find()
    .skip((perPage * page) - perPage )
    .limit(perPage)
    .sort({date:-1})
    .exec((err, empleos)=> {
      console.log(empleos);
     Empleo.count(query).exec((err, count)=> {
        if(err) return next(err);
        return res.json({
          empleos,
          current: parseInt(page) ,
          pages: Math.ceil(count / perPage),
          total: count
        })
      })

    })



/*  Empleo.count()
    .then(empleoCount => {
      Empleo.find().sort({date:-1})
        .then (empleos => {
          return res.json({
            empleos,
            total: empleoCount
            }
          );
        })
    })
*/


});


router.get('/empleo/:id', (req, res) => {
  var empleoId = req.params.id;
  Empleo.findById(empleoId, (err, empleo) => {
    return res.json(empleo);
  })
})

//Busqueda por palabra en titulo y descripcion
router.get('/buscarEmpleo/:palabra', (req, res, next) => {
  var palabra = req.params.palabra;
  Empleo.find({
      "$or": [
          { titulo: { '$regex': palabra, '$options': 'i' } },
          { descripcion: { '$regex': palabra, '$options': 'i' } }
      ]
  }).then((users) => {
      res.json(users);
  });


})

router.post('/contacto', (req, res) => {
  var data = req.body;

var smptTransport = nodemailer.createTransport({
  service: 'gmail',

  auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
});

var mailOptions = {
  from: data.email,
  to: 'francisco_talenti@hotmail.com',
  subject: 'Contacto Web',
  html: `<p>nombre: ${data.nombre}</p>
         <p>mail: ${data.email}</p>
          <p>mensaje: ${data.message}</p>`
};

smptTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  smtpTransport.close();
});



})



module.exports = router;
