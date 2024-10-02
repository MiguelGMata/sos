const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config();
const studiantRoutes = require('./src/routes/studentRoutes');
const teacherRoutes = require('./src/routes/teacherRoutes');


// Configuración de CORS para permitir solo tu frontend
const corsOptions = {
    origin: 'https://sos-six-phi.vercel.app/', // Cambia esto a la URL de tu frontend en Vercel
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true // Si necesitas manejar credenciales (opcional)
};

// Usa la configuración de CORS
app.use(cors(corsOptions));
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const port = process.env.APP_PORT || 3000
app.get('/', (req, res) => {
    res.send('Bonjour a tous ! test api pour vercel')
})

app.use('/student', studiantRoutes);
app.use('/teacher', teacherRoutes);

app.listen(port, () =>{
    console.log(`server port: http://localhost:${port}`)
});
