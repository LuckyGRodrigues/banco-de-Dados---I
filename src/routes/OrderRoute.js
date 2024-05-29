import OrderController from '../controllers/OrderController';

export default (app) => {
  app.get('/address', OrderController.get);
  app.get('/address/:id', OrderController.get);
  app.post('/address', OrderController.create);
  app.patch('/address/:id', OrderController.update);
  app.delete('/address/:id', OrderController.destroy);
};
