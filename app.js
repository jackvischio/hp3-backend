require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./db/connect');

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use(express.json());

// Swagger
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// routes by Model
app.use('', require('./routes/campionati'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening on port ${port}!`))