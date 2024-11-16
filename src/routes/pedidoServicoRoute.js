import controller from '../controllers/pedidoServicoController';

export default (app) => {
  app.get('/pedidoServico', controller.get);
  app.get('/pedidoServico/:idPedido/:idServico', controller.get);
  app.post('/pedidoServico/create', controller.create);
  app.patch('/pedidoServico/update/:idPedido/:idServico', controller.update);
  app.delete('/pedidoServico/delete/:idPedido/:idServico', controller.destroy);
};
