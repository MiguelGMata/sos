const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const studiantRoutes = require('./src/routes/studentRoutes');
const teacherRoutes = require('./src/routes/teacherRoutes');

const cors = require('cors');
app.use(cors({
    origin: 'https://sos-six-phi.vercel.app/',
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
