//Requiereds


const fs = require('fs');
const colors = require('colors');
//const arvg = require('./config/yargs').argv;

let listartabla = ( base, limite = 10 ) => {
  console.log(`=============================`);
  console.log(`======Table de ${base}=======`);
  console.log(`=============================`);   
  for (let x=1;x<=limite;x++) {
          console.log(`${base} * ${x} = ${x*base}\n`);
      }
      
      //fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        //if (err)
        //    reject(err)
        //else 
        //resolve(data);
//});
}


let CrearArchivo = ( base, limite ) => {
    return new Promise( (resolve, reject) => {
       if (!Number(base)) {
         reject(`${base} no es un numero`);
         return;
       }
      let data = '';
          
    for (let x=1;x<=limite;x++) {
        data +=(`${base} * ${x} = ${x*base}\n`);
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
          if (err)
              reject(err)
          else 
          resolve(`tabla-${base}-al-${limite}.txt`);
  });

});
}




module.exports = {
                  argv
                  }