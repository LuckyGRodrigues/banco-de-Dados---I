import controller from '../controllers/pagamentoController';

export default (app) => {
  app.get('/pagamento', controller.get);
  app.get('/pagamento/:id', controller.get);
  app.post('/pagamento/create', controller.create);
  app.patch('/pagamento/update/:id', controller.update);
  app.delete('/pagamento/delete/:id', controller.destroy);
};
