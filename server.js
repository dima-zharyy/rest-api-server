const app = require('./app');
const mongoose = require('mongoose');
const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database is connected');

    app.listen(PORT, () => {
      console.log('Server running. Use our API on port: 3000');
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

// d1mka;
// gOXi92BwOi0HAJdY;
