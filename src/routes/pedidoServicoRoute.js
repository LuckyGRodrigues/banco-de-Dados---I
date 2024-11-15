import controller from '../controllers/pedidoServicoController';

export default (app) => {
  app.get('/pedidoServico', controller.get);
  app.get('/pedidoServico/:cpf', controller.get);
  app.post('/pedidoServico/create', controller.create);
  app.patch('/pedidoServico/update/:cpf', controller.update);
  app.delete('/pedidoServico/delete/:cpf', controller.destroy);
};
