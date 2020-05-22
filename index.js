const { app } = require('./app');
const { env } = process;

app.listen(env.PORT || 8000);
