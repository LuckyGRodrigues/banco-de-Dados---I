import UserController from '../controllers/UserController';

export default (app) => {
  app.get('/user', UserController.get);
  app.get('/user/:id', UserController.get);
  // app.post('/user/register', UserController.register);
  // app.post('/user/login', UserController.loginFunciton);
  app.post('/user/persist', UserController.create);
  app.patch('/user/persist/:id', UserController.update);
  app.delete('/user/delete/:id', UserController.destroy);
};
