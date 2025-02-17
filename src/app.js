const express = require('express');
   const connectDB = require('./config/db');
   const userRoutes = require('./routes/userRoutes');
   const dotenv = require('dotenv');

   dotenv.config();
   const app = express();

   // Connect to the database
   connectDB();

   // Middleware
   app.use(express.json());

   // Routes
   app.use('/api/users', userRoutes);

   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
   });