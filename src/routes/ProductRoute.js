import ProductController from '../controllers/ProductController';

export default (app) => {
  app.get('/product', ProductController.get);
  app.get('/product/:id', ProductController.get);
  app.post('/product', ProductController.create);
  app.patch('/product/:id', ProductController.update);
  app.delete('/product/:id', ProductController.destroy);
};
