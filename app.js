//Requiereds
const argv = require ('./config/yargs').argv;

const { CrearArchivo, listartabla } = require ('./multiplicar/multiplicar');

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
let comando = argv._[0];
switch ( comando ) {
    case  'listar':
        listartabla(argv.base, argv.limite);
            break;
    case  'crear':
        CrearArchivo(argv.base, argv.limite)
            .then (archivo => console.log(`Archivo Creado:${archivo}`))
            .catch(err => {console.log(err)});
            break;
    default :
    console.log('Comando no reconocido');
}

//console.log('limite',argv.limite);
//console.log(argv2);
//CrearArchivo(base)
//.then (archivo => console.log(`Archivo Creado:${archivo}`))
//.catch(err => {console.log(err)});