import UserController from '../controllers/UserController';

export default (app) => {
  app.get('/user', UserController.get);
  app.get('/user/:id', UserController.get);
  // app.post('/user/register', UserController.register);
  // app.post('/user/login', UserController.loginFunciton);
  app.post('/user', UserController.create);
  app.patch('/user/:id', UserController.update);
  app.delete('/user/:id', UserController.destroy);
};
