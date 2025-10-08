const express = require('express');
const router = express.Router();
const penjualanController = require('../app_server/controller/penjualanController');

// ROUTES
router.get('/', penjualanController.getAll);
router.get('/:id', penjualanController.getById);
router.post('/', penjualanController.create);
router.put('/:id', penjualanController.update);
router.delete('/:id', penjualanController.delete);

module.exports = router;