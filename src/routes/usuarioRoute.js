import controller from '../controllers/usuarioController';

export default (app) => {
  app.get('/usuario', controller.get);
  app.get('/usuario/:cpf', controller.get);
  app.post('/create', controller.create);
  app.patch('/update/:cpf', controller.update);
  app.delete('/delete/:cpf', controller.destroy);
};
