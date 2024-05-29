import AddressRoute from './AddressRoute';
import CategoryRoute from './CategoryRoute';
import CupomRoute from './CupomRoute';
import OrderProductRoute from './OrderProductRoute';
import OrderRoute from './OrderRoute';
import PaymentRoute from './PaymentRoute';
import ProductRoute from './ProductRoute';
import UserRoute from './UserRoute';

function Routes(app) {
  AddressRoute(app);
  CategoryRoute(app);
  CupomRoute(app);
  UserRoute(app);
  OrderProductRoute(app);
  OrderRoute(app);
  PaymentRoute(app);
  ProductRoute(app);
}

export default Routes;
