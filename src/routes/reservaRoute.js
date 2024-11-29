import controller from '../controllers/reservaController';

export default (app) => {
  app.get('/reserva', controller.get);
  app.get('/reserva/:id', controller.get);
  app.post('/reserva/create', controller.create);
  app.patch('/reserva/update/:id', controller.update);
  app.delete('/reserva/delete/:id', controller.destroy);
};
