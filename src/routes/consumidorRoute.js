import controller from '../controllers/consumidorController';

export default (app) => {
  app.get('/consumidor', controller.get);
  app.get('/consumidor/:id', controller.get);
  app.post('/consumidor/create', controller.create);
  app.patch('/consumidor/update/:id', controller.update);
  app.delete('/consumidor/delete/:id', controller.destroy);
};
