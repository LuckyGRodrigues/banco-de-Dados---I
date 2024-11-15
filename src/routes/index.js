import pedidoRoute from './pedidoRoute';
import usuarioRoute from './usuarioRoute';
import servicoRoute from './servicoRoute';
import produtoRoute from './produtoRoute';

function Routes(app) {
  usuarioRoute(app);
  pedidoRoute(app);
  servicoRoute(app);
  produtoRoute(app);
}

export default Routes;
