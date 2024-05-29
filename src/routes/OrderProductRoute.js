import OrderProductController from '../controllers/OrderProductController';

export default (app) => {
  app.get('/order-product', OrderProductController.get);
  app.get('/order-product/:id', OrderProductController.get);
  app.post('/order-product', OrderProductController.create);
  app.patch('/order-product/:id', OrderProductController.update);
  app.delete('/order-product/:id', OrderProductController.destroy);
};
