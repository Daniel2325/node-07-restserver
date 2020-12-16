require('./server/config')

const express = require('express')
const app = express();
const bodyParser = require('body-parser');

//parse application 
app.use(bodyParser.urlencoded({extended:false}))

//pars aplication/json
app.use(bodyParser.json())

app.get('/usuario', function(req,res) { // GET ME SIRVE PARA CONSULTAR
    res.json("get Usuario")
});

app.post('/usuario', function(req,res) { //*POST PARA CREAR
    let body =req.body;
    if (body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: "eL NOMBRE DE USUAARIO ES REQUERIDO "
        });
        
    }else {
        res.json({
            body
        }); 
    }
    
});
app.put('/usuario/:id', function(req,res) { //MODIFICAR
    let id = req.params.id;
    res.json({
        id
    });
});
app.delete('/usuario', function(req,res) { //ELIMINAR
    res.json("delete Usuario")
});
app.listen(process.env.PORT,() =>{
    console.log("Escuchando en el puerto:",PORT);
});


