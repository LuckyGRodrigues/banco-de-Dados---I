import UserController from '../controllers/UserController';
import verifyAdemiro from '../middleware/verifyAdemiro';

export default (app) => {
  app.get('/user', UserController.get);
  app.get('/user/:id', UserController.get);
  app.post('/user/register', UserController.register);
  app.post('/user/login/', UserController.loginFunction);
  app.post('/user/persist', UserController.create);
  app.patch('/user/persist/:id', UserController.update);
  app.delete('/user/delete/:id', UserController.destroy);
};
