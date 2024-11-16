import controller from '../controllers/historicoComprasController';

export default (app) => {
  app.get('/historico-compras', controller.get);
  app.get('/historico-compras/:id', controller.get);
  app.post('/historico-compras/create', controller.create);
  app.patch('/historico-compras/update/:id', controller.update);
  app.delete('/historico-compras/delete/:id', controller.destroy);
};
