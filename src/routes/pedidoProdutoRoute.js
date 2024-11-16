import controller from '../controllers/pedidoProdutoController';

export default (app) => {
  app.get('/pedido-produto', controller.get);
  app.get('/pedido-produto/:idPedido/:idProduto', controller.get);
  app.post('/pedido-produto/create', controller.create);
  app.patch('/pedido-produto/update/:idPedido/:idProduto', controller.update);
  app.delete('/pedido-produto/delete/:idPedido/:idProduto', controller.destroy);
};
