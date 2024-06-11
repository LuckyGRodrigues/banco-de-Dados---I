import PaymentController from '../controllers/PaymentController';

export default (app) => {
  app.get('/payment', PaymentController.get);
  app.get('/payment/:id', PaymentController.get);
  app.post('/payment/persist', PaymentController.create);
  app.patch('/payment/persist/:id', PaymentController.update);
  app.delete('/payment/delete/:id', PaymentController.destroy);
};
