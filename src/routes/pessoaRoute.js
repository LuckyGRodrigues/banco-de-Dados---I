import controller from '../controllers/pessoaController';

export default (app) => {
  app.get('/pessoa', controller.get);
  app.get('/pessoa/:cpf', controller.get);
  app.post('/pessoa/create', controller.create);
  app.patch('/pessoa/update/:cpf', controller.update);
  app.delete('/pessoa/delete/:cpf', controller.destroy);
};
