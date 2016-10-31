var api = require('./routes/api');
var router = require('./routes/web');

app.use('/api', api);
app.use('/', router);
