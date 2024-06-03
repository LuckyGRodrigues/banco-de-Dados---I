import ProductController from '../controllers/ProductController';

export default (app) => {
  app.get('/product', ProductController.get);
  app.get('/product/:id', ProductController.get);
  app.post('/product/persist', ProductController.create);
  app.patch('/product/persist/:id', ProductController.update);
  app.delete('/product/delete/:id', ProductController.destroy);
};
