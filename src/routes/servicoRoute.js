import controller from '../controllers/servicoController';

export default (app) => {
  app.get('/servico', controller.get);
  app.get('/servico/:id', controller.get);
  app.post('/servico/create', controller.create);
  app.patch('/servico/update/:id', controller.update);
  app.delete('/servico/delete/:id', controller.destroy);
};
