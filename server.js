const express = require('express');
const indexRoutes = require('./routes/indexRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
