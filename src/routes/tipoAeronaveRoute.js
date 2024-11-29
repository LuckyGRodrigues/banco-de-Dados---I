import controller from '../controllers/tipoAeronaveController';

export default (app) => {
  app.get('/tipo-aeronave', controller.get);
  app.get('/tipo-aeronave/:id', controller.get);
  app.post('/tipo-aeronave/create', controller.create);
  app.patch('/tipo-aeronave/update/:id', controller.update);
  app.delete('/tipo-aeronave/delete/:id', controller.destroy);
};
