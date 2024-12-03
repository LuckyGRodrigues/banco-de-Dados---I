import controller from '../controllers/vooController';

export default (app) => {
  app.get('/voo', controller.get);
  app.get('/voo/:id', controller.get);
  app.post('/voo/create', controller.create);
  app.patch('/voo/update/:id', controller.update);
  app.delete('/voo/delete/:id', controller.destroy);
};
