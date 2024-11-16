import controller from '../controllers/funcionarioController';

export default (app) => {
  app.get('/funcionario', controller.get);
  app.get('/funcionario/:id', controller.get);
  app.post('/funcionario/create', controller.create);
  app.patch('/funcionario/update/:id', controller.update);
  app.delete('/funcionario/delete/:id', controller.destroy);
};
