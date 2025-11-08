const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Obtener lista de usuarios
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
