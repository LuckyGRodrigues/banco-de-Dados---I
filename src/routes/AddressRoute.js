import AddressController from '../controllers/AddressController';

export default (app) => {
  app.get('/address', AddressController.get);
  app.get('/address/:id', AddressController.get);
  app.post('/address/persist', AddressController.create);
  app.patch('/address/persist/:id', AddressController.update);
  app.delete('/address/delete/:id', AddressController.destroy);
};
