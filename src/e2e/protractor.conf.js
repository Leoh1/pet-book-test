// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

const
    { ArtifactArchiver } = require('@serenity-js/core'),
    { ConsoleReporter } = require('@serenity-js/console-reporter'),
    { Photographer, TakePhotosOfInteractions } = require('@serenity-js/protractor'),
    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd')

/**
 * @type { import("protractor").Config }
 */

exports.config = {
  
  /* En esta variable le estamos indicando la URL de nuestras pruebas, 
  esto nos permite tener una variable global de la URL*/
    baseUrl: 'http://localhost:4200/',
    
  
  /* En esta variable le estamos indicando donde el ChromeDriver que en este 
  caso es la ruta de el paquete "chromedriver" descargado anteriormente. */
    chromeDriver: require(`chromedriver/lib/chromedriver`).path,

  /* Aquí le estamos indicando que se comunique directamente con los 
  controladores de Chrome.*/
    directConnect: true,

  /* Tiempo para esperar a que la página se sincronice. Puede encontrar más 
  información sobre los tiempos de espera en la wiki de Protractor.*/
    allScriptsTimeout: 110000,

  /* Le indicamos a protractor que use el adaptador de protractor de 
  Serenity/JS. */
    framework:      'custom',
    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),
  
  /* En esta variable le indicamos la ruta donde se encuentran nuestros Test.*/
    specs: [ './stepdefinitions/*.spec.ts', ],

  /* Dentro de esta vamos a realizar la configuración de Serenity utilizando las
  clases definidas al inicio del archivo.*/
    serenity: {
      
      /* Aquí le vamos a especificar que marco de prueba utilizar en este caso 
      seria Jasmine. */
        runner: 'jasmine',
        
      /* Aqui realizaremos las configuraciones con as clases definidas al incio
      del archivo */
        crew: [
          
          /* Esta clase nos permite definirle la ruta donde se generara el 
          reporte de ejecucion*/
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            
          /* Esta clase nos permite mostrar la informacion del estado de
          ejecucion de nuestras pruebas en la terminal*/
            ConsoleReporter.forDarkTerminals(),
            
          /* Esta clase es la que realizara los pantallazos en el trascurso de
          ejecucion de nuestras pruebas, indicandole cuando queremos que tome
          estos pantallozos como por ejemplo en esta caso le estamos indicando
          que tome pantallazos en cada interaccion*/
            Photographer.whoWill(TakePhotosOfInteractions),
            
          /* Esta calse es la que se encarga de generar el reporte de ejecucion 
          de nuestras pruebas */
            new SerenityBDDReporter(),
        ]
    },
    /* Configuracion basicas de Jasmine*/
    jasmineNodeOpts: {
        requires: [ 'ts-node/register' ],
    },
    
    /* Capabilities del navegador con las opciones que utilizaremos para nuestra
    ejecucion */
    capabilities: {
        browserName: 'chrome',

        loggingPrefs: {
            browser: 'INFO'
        },

        chromeOptions: {
            args: [
                '-lang=es',
                '--disable-popup-blocking',
                '--disable-download-notification',
                '--start-maximized',
                '--ignore-certificate-errors',
                '--allow-running-insecure-content',
                '--disable-translate',
                '--always-authorize-plugins',
                '--disable-extensions'
            ]
        }
    }
};