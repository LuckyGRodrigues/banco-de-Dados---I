import controller from '../controllers/aeronaveController';

export default (app) => {
  app.get('/aeronave', controller.get);
  app.get('/aeronave/:id', controller.get);
  app.post('/aeronave/create', controller.create);
  app.patch('/aeronave/update/:id', controller.update);
  app.delete('/aeronave/delete/:id', controller.destroy);
};
