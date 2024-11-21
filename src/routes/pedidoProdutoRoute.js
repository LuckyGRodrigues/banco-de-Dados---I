import controller from '../controllers/pedidoProdutoController';

export default (app) => {
  app.get('/pedido-produto', controller.get);
  app.get('/pedido-produto/:idProduto/:idPedido', controller.get);
  app.post('/pedido-produto/create', controller.create);
  app.patch('/pedido-produto/update/:idProduto/:idPedido', controller.update);
  app.delete('/pedido-produto/delete/:idProduto/:idPedido', controller.destroy);
};
