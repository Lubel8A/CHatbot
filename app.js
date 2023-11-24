const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MongoAdapter = require('@bot-whatsapp/database/mongo')

/**
 * Declaramos las conexiones de Mongo
 */
const MONGO_DB_URI = 'mongodb+srv://Lubel:Lubel123@cluster0.1xuhzpe.mongodb.net/'
const MONGO_DB_NAME = 'db_bot'
/**
 * Aqui declaramos los flujos hijos, los flujos se declaran de atras para adelante, es decir que si tienes un flujo de este tipo:
 *
 *          Menu Principal
 *           - SubMenu 1
 *             - Submenu 1.1
 *           - Submenu 2
 *             - Submenu 2.1
 *
 * Primero declaras los submenus 1.1 y 2.1, luego el 1 y 2 y al final el principal.
 */
const flow34 = addKeyword(['Si', 'si', 'No', 'no'])
  .addAnswer(
    [
      '¿Tuvo pensamientos de quitarse la vida en los últimos 30 días? \n Solo responder con Si/No',
    ],
    null,
    null,
    [/* otros flujos aquí, si es necesario */]
  );
const flow33 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Alguna vez usted ha intentado o ha amenazado con quitarse la vida?  \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow34]
    )
const flow32 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Él la llama insistentamente,deja mensajes en su teléfono o en redes sociales o destruye sus cosas (celular, ropa u otro)?. \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow33]
    )
const flow31 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Cree que él es capaz de matarla? \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow32]
    )
const flow30 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Él la ha amenazado con hacerle daño a sus hijos?  \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow31]
    )
const flow29 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Alguna vez él ha amenazado o ha intentado suicidarse? \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow30]
    )
const flow28 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Cuándo usted estuvo embarazada, alguna vez él la golpeó? \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow29]
    )
const flow27 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Él se pone celoso de forma constante y violenta? Por ejemplo, le dice: “si no eres mía, no serás denadie” u otras similares. \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow28]
    )
const flow26 = addKeyword(['1'])
.addAnswer(
    [
        'Si ha intentado controlarla pero no se ha dejado escriba 1',
    ],
    null,
    null,
    [flow27]
    )
const flow25 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Le controla la mayoría o todas sus actividades diarias? Por ejemplo, no deja que vea a sus familiares o amistades,cuánto dinero puede gastar, etc.\n Solo responder con Si/No',
    ],
    null,
    null,
    [flow26]
    )
const flow24 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Él es alcohólico o tiene problemas con el alcohol (trago o licor)? \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow25]
    )
const flow23 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Él consume drogas? Por ejemplo, como la marihuana, pasta básica, cocaína u otras \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow24]
    )
const flow22 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Él ha intentado ahorcarla? \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow23]
    )
const flow21 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Él la ha obligado alguna vez a tener relaciones sexuales? \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow22]
    )
const flow20 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Alguna vez usted lo denunció por violencia familiar (porque él le pegó) ante la comisaría, fiscalía, juzgado o ante alguna autoridad comunal? \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow21]
    )
const flow19 = addKeyword(['Si', 'si', 'No', 'no','No se'])
.addAnswer(
    [
        '¿La ha amenazado con matarla? \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow20]
    )
const flow18 = addKeyword(['Pistola', 'Cuchillo', 'pistola', 'cuchillo','No','no'])
.addAnswer(
    [
        'Si su respuesta fue “SI”, ¿fue con una pistola o cuchillo? \n En caso de que haya sido No responder con No',
    ],
    null,
    null,
    [flow19]
    )
const flow17 = addKeyword(['Si', 'si', 'No', 'no','No se'])
.addAnswer(
    [
        '¿Alguna vez él ha usado o la ha amenazado con un arma (pistola, cuchillo, machete u otros)? \n Solo responder con Si/No',
    ],
    null,
    null,
    [flow18]
    )
const flow16 = addKeyword(['Si', 'si', 'No', 'no'])
    .addAnswer(
      [
        '¿Actualmente, él tiene trabajo estable? \n Responder "No se" en caso de no saber:',
      ],
      null,
      null,
      [/* otros flujos aquí, si es necesario */]
    );
const flow15 = addKeyword(['Si', 'si', 'No', 'no','No se','Nose'])
.addAnswer(
    [
        '¿Actualmente, él tiene trabajo estable? \n Responder "No se" en caso de no saber:',
    ],
    null,
    null,
    [flow16]
    )
    const flow14 = addKeyword(['Si', 'si', 'No', 'no'])
    .addAnswer(
      [
        'Si respondió con Sí a la pregunta anterior, ¿Siguen viviendo juntos o lo ha dejado? \n Solo responder con Si/No',
      ],
      null,
      null,
      [flow15]
    );
  
  const flow13 = addKeyword(['Si', 'si', 'No', 'no'])
    .addAnswer(
      [
        '¿Han vivido juntos durante el último año? \n Solo responder con Si/No:',
      ],
      null,
      null,
      [flow14]
    );
  
  const flow12 = addKeyword(['Si', 'si', 'No', 'no'])
    .addAnswer(
      [
        '¿Él tiene algún arma o podría conseguir un arma con facilidad? (pistola, cuchillo, machete, u otros)  \n Solo responder con Si/No',
      ],
      null,
      null,
      [flow13]
    );
  
  const flowFichaRiesgo = addKeyword(['Si', 'si', 'No', 'no'])
    .addAnswer(
      [
        '¿En el último año, la violencia física contra usted ha aumentado en gravedad o frecuencia?  \n Solo responder con Si/No',
      ],
      null,
      null,
      [flow12]
    );
  
  const flowAgresiones2 = addKeyword(['1', '2', '3', '4', '5', '6', '7'])
    .addAnswer(
      'Ingrese de entre las siguientes opciones el tipo de discapacidad \n Solo responder con el número designado:'
    )
    .addAnswer(
      [
        '*1.* Cachetadas, empujones, jalones de pelo o sin lesiones ni dolor prolongado',
        '*2.* Puñetazos, patadas, moretones, cortes y/o dolor prolongado',
        '*3.* Golpiza, golpes muy fuertes, quemaduras o huesos rotos',
        '*4.* Amenaza de usar un arma, lesiones en la cabeza, lesiones internas, o lesiones permanentes',
        '*5.* Uso de arma, heridas por arma (pistola, cuchillo u otros)',
      ],
      null,
      null,
      [flowFichaRiesgo]
    );
const regex9 = `\b(?:\w+\s)?(?:\d{1,2}[-/]\d{1,2}|[Ee]n\s\w+\s\d{1,2})\s(?:[Dd]e\s\w+)?(?:\s(?:[Dd]e)?\s\d{2,4})?\b`;
const flowAgresiones = addKeyword(regex9, {regex: true}).addAnswer(
    [
        'Ingrese los dias y meses en los que ha sido agredida en el ultimo año',
    ],
    null,
    null,
    [flowAgresiones2]
    )
const regex8 = `^[a-zA-Z\s]+$`;
const flow11 = addKeyword(regex8, {regex: true}).addAnswer(
    [
        'Ingrese su Identidad Étnica',
    ],
    null,
    null,
    [flowAgresiones]
    )
const flow10 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Emplea lenguaje de señas? \n Solo responder con Si/No:',
    ],
    null,
    null,
    [flow11]
    )
const regex7 = `^[a-zA-Z\s]+$`;
const flow9 = addKeyword(regex7, {regex: true}).addAnswer(
    [
        'Ingrese su lengua materna',
    ],
    null,
    null,
    [flow10]
    )
const flow8 = addKeyword(['1', '2', '3', '4','5','6','7'])
    .addAnswer('Ingrese de entre las siguientes opciones el tipo de discapacidad \n Solo responder con Si/No:')
    .addAnswer(
        [
            '*1.* FISICA',
            '*2.* VISUAL',
            '*3.* AUDITIVA',
            '*4.* MUDO/A',
            '*5.* PSICOSOCIAL',
            '*6.* INTELECTUAL',
            '*7.* SORDO/A-CIEGO/A',

        ],
        null,
        null,
        [flow9]
        )
const flow7 = addKeyword(['Si', 'si', 'No', 'no'])
.addAnswer(
    [
        '¿Cuenta con alguna discapacidad? \n Solo responder con Si/No:',
    ],
    null,
    null,
    [flow8]
    )
const regex6 = `^(?:[a-zA-Z\s]+|No tengo una ocupación)$`;
const flow6 = addKeyword(regex6, {regex: true}).addAnswer(
    [
        'Escriba su ocupación',
    ],
    null,
    null,
    [flow7]
    )
const regex5 = `^(0?[1-9]|[1-9][0-9])$`;
const flow5 = addKeyword(regex5, {regex: true}).addAnswer(
    [
        'Escriba el número de hijos menores que tiene',
    ],
    null,
    null,
    [flow6]
    )
const regex4 = `^(0?[1-9]|[1-9][0-9])$`; /*Consideramos hasta 99 años */
const flow4 = addKeyword(regex4, {regex: true}).addAnswer(
    [
        'Escriba su edad',
    ],
    null,
    null,
    [flow5]
    )
const regex3 = `^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+(?:\s[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+){0,2}(?:\s[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+){0,2}$`;
const flow3 = addKeyword(regex3, {regex: true}).addAnswer(
    [
        'Escriba sus nombres y apellidos',
    ],
    null,
    null,
    [flow4]
    )
const regex2 = `^(?=.*[0-9])[a-zA-Z0-9]{8,12}$`;
const flow2 = addKeyword(regex2, {regex: true}).addAnswer(
    [
        'Escriba el número de su documento de identidad',
    ],
    null,
    null,
    [flow3]
    )

const flowFicha = addKeyword(['1', '2', '3', 'DNI','dni','Carne de extranjería','Carne de extranjeria', 'CARNE DE EXTRANJERÍA', 'Otro','OTRO'])
    .addAnswer('Elija su documento de identidad entre las siguientes opciones:')
    .addAnswer(
        [
            '*1.* DNI',
            '*2.* CARNE DE EXTRANJERÍA',
            '*3.* OTRO',
        ],
        null,
        null,
        [flow2]
    )

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer('Bienvenido al asistente para víctimas de violencia de pareja. \n Elija una opción:')
    .addAnswer(
        [
            '*1.* Rellenar ficha de valoración de riesgo',
        ],
        null,
        null,
        [flowFicha]
    )

const main = async () => {
    const adapterDB = new MongoAdapter({
        dbUri: MONGO_DB_URI,
        dbName: MONGO_DB_NAME,
    })
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    QRPortalWeb()
}

main()
