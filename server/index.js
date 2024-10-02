const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const studiantRoutes = require('./src/routes/studentRoutes');
const teacherRoutes = require('./src/routes/teacherRoutes');

const allowedOrigins = [
'https://sos-six-phi.vercel.app/',
    'http://localhost:3000', // Para el desarrollo local
];

app.use(cors({
    origin: allowedOrigins,
}));

const port = process.env.APP_PORT || 3000
app.get('/', (req, res) => {
    res.send('Bonjour a tous ! test api pour vercel')
})

app.use('/student', studiantRoutes);
app.use('/teacher', teacherRoutes);

app.listen(port, () =>{
    console.log(`server port: http://localhost:${port}`)
});
