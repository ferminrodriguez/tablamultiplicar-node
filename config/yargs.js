//const { CrearArchivo, listartabla } = require('./multiplicar/multiplicar');
const opts = {base : {
                     demand: true,
                     alias: 'b'},
             limite: {
                     alias: 'l',
                     default: 10 }
                    }

const argv = require('yargs')
                            .command('listar','imprime por consola la table de multiplicar',opts)
                            .command('crear','crear la tabla en un archivo de texto',opts)
                            .help()
                            .argv;

module.exports={argv
                }