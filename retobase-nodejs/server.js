const _express = require('express');
const _server = _express();

var ibm_sum = require('./src/Models/ibm_sum');

const _port = 5000;

_server.get('/retoibm/sumar/:sumando01/:sumando02', function(request, response) {
  try{
    var _sumando01 = new Number(request.params.sumando01);
    var _sumando02 = new Number(request.params.sumando02);
    var _resultado = _sumando01 + _sumando02;

    
    if (typeof _resultado !== "undefined" && _resultado!==null && !isNaN(_resultado)){    
      ibm_sum.model.create({
        addend1:_sumando01,
        addend2:_sumando02,
        sum: _resultado
      });
      return response.status(200).json({resultado : _resultado});
    }else{
      return response.status(400).json({resultado : "Bad Request"});
    }
  }
  catch(e){
    return response.status(500).json({resultado : e});
  }
});


_server.listen(_port, () => {
   console.log(`Server listening at ${_port}`);
});
