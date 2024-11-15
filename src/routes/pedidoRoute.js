import controller from '../controllers/pedidoController';

export default (app) => {
  app.get('/pedido', controller.get);
  app.get('/pedido/:cpf', controller.get);
  app.post('/pedido/create', controller.create);
  app.patch('/pedido/update/:cpf', controller.update);
  app.delete('/pedido/delete/:cpf', controller.destroy);
};
