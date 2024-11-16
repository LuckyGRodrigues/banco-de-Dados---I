import controller from '../controllers/pedidoServicoController';

export default (app) => {
  app.get('/pedido-servico', controller.get);
  app.get('/pedido-servico/:idPedido/:idServico', controller.get);
  app.post('/pedido-servico/create', controller.create);
  app.patch('/pedido-servico/update/:idPedido/:idServico', controller.update);
  app.delete('/pedido-servico/delete/:idPedido/:idServico', controller.destroy);
};
