import CupomController from '../controllers/CupomController';

export default (app) => {
  app.get('/cupom', CupomController.get);
  app.get('/cupom/:id', CupomController.get);
  app.post('/cupom/persist', CupomController.create);
  app.patch('/cupom/persist/:id', CupomController.update);
  app.delete('/cupom/delete/:id', CupomController.destroy);
};
