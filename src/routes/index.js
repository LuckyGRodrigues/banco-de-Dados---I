import pedidoRoute from './pedidoRoute';
import usuarioRoute from './usuarioRoute';
import servicoRoute from './servicoRoute';
import produtoRoute from './produtoRoute';
import pedidoServicoRoute from './pedidoServicoRoute';

function Routes(app) {
  usuarioRoute(app);
  pedidoRoute(app);
  servicoRoute(app);
  produtoRoute(app);
  pedidoServicoRoute(app);
}

export default Routes;
