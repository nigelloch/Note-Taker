const express = require('express');

const PORT = process.env.PORT || 3002;
const app = express();
const indexRoutes = require('./routes/indexRoutes');
const notesRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', notesRoutes);
app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
