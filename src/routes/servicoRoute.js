import controller from '../controllers/servicoController';

export default (app) => {
  app.get('/servico', controller.get);
  app.get('/servico/:cpf', controller.get);
  app.post('/servico/create', controller.create);
  app.patch('/servico/update/:cpf', controller.update);
  app.delete('/servico/delete/:cpf', controller.destroy);
};
