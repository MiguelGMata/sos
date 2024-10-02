const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config();
const studiantRoutes = require('./src/routes/studentRoutes');
const teacherRoutes = require('./src/routes/teacherRoutes');


app.use(cors())
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
