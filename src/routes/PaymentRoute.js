import PaymentController from '../controllers/PaymentController';

export default (app) => {
  app.get('/payment', PaymentController.get);
  app.get('/payment/:id', PaymentController.get);
  app.post('/payment', PaymentController.create);
  app.patch('/payment/:id', PaymentController.update);
  app.delete('/payment/:id', PaymentController.destroy);
};
