var verificarBoleto = require('../utils/boletos');

exports.get = (req, res, next) => {
     const codigo = req.params.codigo;
     
     try{
          const resultado =  verificarBoleto.boleto(codigo);
          console.log(codigo)
          resultado.then((dados)=>{
               res.status(200).json(dados);
          }).catch((error)=>{
               res.status(400).json(error);
          })
     }catch(error){
          res.status(400).json(error);
     }
  
};





