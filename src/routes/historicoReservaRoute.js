import controller from '../controllers/historicoReservaController';

export default (app) => {
  app.get('/historico-reserva', controller.get);
  app.get('/historico-reserva/:id', controller.get);
  app.post('/historico-reserva/create', controller.create);
  app.patch('/historico-reserva/update/:id', controller.update);
  app.delete('/historico-reserva/delete/:id', controller.destroy);
};
