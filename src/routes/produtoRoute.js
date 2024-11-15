import controller from '../controllers/produtoController';

export default (app) => {
  app.get('/produto', controller.get);
  app.get('/produto/:cpf', controller.get);
  app.post('/produto/create', controller.create);
  app.patch('/produto/update/:cpf', controller.update);
  app.delete('/produto/delete/:cpf', controller.destroy);
};
