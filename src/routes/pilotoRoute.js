import controller from '../controllers/pilotoController';

export default (app) => {
  app.get('/piloto', controller.get);
  app.get('/piloto/:id', controller.get);
  app.post('/piloto/create', controller.create);
  app.patch('/piloto/update/:id', controller.update);
  app.delete('/piloto/delete/:id', controller.destroy);
};
