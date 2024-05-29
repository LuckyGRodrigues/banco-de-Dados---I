import CupomController from '../controllers/CupomController';

export default (app) => {
  app.get('/cupom', CupomController.get);
  app.get('/cupom/:id', CupomController.get);
  app.post('/cupom', CupomController.create);
  app.patch('/cupom/:id', CupomController.update);
  app.delete('/cupom/:id', CupomController.destroy);
};
