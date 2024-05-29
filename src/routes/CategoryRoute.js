import CategoryController from '../controllers/CategoryController';

export default (app) => {
  app.get('/category', CategoryController.get);
  app.get('/category/:id', CategoryController.get);
  app.post('/category', CategoryController.create);
  app.patch('/category/:id', CategoryController.update);
  app.delete('/category/:id', CategoryController.destroy);
};
