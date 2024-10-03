const express = require('express');
const router = express.Router();

// Ejemplo de una ruta GET
router.get('/test', (req, res) => {
    res.json({ msg: 'Esto es un test' });
});

// Asegúrate de exportar el router
module.exports = router;
