import AddressController from '../controllers/AddressController';

export default (app) => {
  app.get('/address', AddressController.get);
  app.get('/address/:id', AddressController.get);
  app.post('/address', AddressController.create);
  app.patch('/address/:id', AddressController.update);
  app.delete('/address/:id', AddressController.destroy);
};
