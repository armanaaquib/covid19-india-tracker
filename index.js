const { app } = require('./app');
const { env, stdout } = process;

const main = () => {
  const port = env.PORT || 8000;
  app.listen(port);
  stdout.write(`Listening at port: ${port}\n`);
};

main();
