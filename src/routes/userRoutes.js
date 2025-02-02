const express = require('express');
   const { registerUser } = require('../controllers/userController');
   const router = express.Router();

   router.post('/register', registerUser);
   // Add more routes for login, etc.

   module.exports = router;