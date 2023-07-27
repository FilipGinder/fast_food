const express = require('express');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');



const app = express();
const cors = require("cors");
app.use(cors({origin: 'http://localhost:3000' }));





/*deo samo za swagger*/
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
    },
    servers: [{url: 'http://localhost:7000'}],
  },
  apis: ['./ff/routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(specs));
/*deo samo za swagger*/




const memorija = require('./ff/routes/ff.routes');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', memorija);
app.listen(7000, () => {
  console.log("SERVER RADI");
});
