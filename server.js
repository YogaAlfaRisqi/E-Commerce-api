require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const sequelize = require('./config/database');
const config = require('./config/config');
// const { router } = require('./routes');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
const routes = require('./routes');
app.use('/api', routes);
app.get('/', (req, res) => {
    res.redirect('/api');
    
  });

// Include routes later

const PORT = config.port || 8000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
// Connect to DB & Start Server
// sequelize.authenticate()
//   .then(() => {
//     console.log('✅ PostgreSQL Connected!');
//     return sequelize.sync();
//   })
//   .then(() => {
//     const PORT = config.port || 8000;
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch(err => console.error('❌ DB Error:', err));
