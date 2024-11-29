import controller from '../controllers/clienteController';

export default (app) => {
  app.get('/cliente', controller.get);
  app.get('/cliente/:id', controller.get);
  app.post('/cliente/create', controller.create);
  app.patch('/cliente/update/:id', controller.update);
  app.delete('/cliente/delete/:id', controller.destroy);
};
