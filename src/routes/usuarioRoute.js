import controller from '../controllers/usuarioController';

export default (app) => {
  app.get('/usuario', controller.get);
  app.get('/usuario/:cpf', controller.get);
  app.post('/usuario/create', controller.create);
  app.patch('/usuario/update/:cpf', controller.update);
  app.delete('/usuario/delete/:cpf', controller.destroy);
};
