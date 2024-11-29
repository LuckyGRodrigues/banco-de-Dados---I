import controller from '../controllers/cartaoController';

export default (app) => {
  app.get('/cartao', controller.get);
  app.get('/cartao/:id', controller.get);
  app.post('/cartao/create', controller.create);
  app.patch('/cartao/update/:id', controller.update);
  app.delete('/cartao/delete/:id', controller.destroy);
};
