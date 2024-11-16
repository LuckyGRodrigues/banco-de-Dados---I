import pedidoRoute from './pedidoRoute';
import usuarioRoute from './usuarioRoute';
import servicoRoute from './servicoRoute';
import produtoRoute from './produtoRoute';
import pedidoServicoRoute from './pedidoServicoRoute';
import pedidoProdutoRoute from './pedidoProdutoRoute';
import consumidorRoute from './consumidorRoute';
import comandaRoute from './comandaRoute';
import funcionarioRoute from './funcionarioRoute';
import historicoComprasRoute from './historicoComprasRoute';

function Routes(app) {
  usuarioRoute(app);
  pedidoRoute(app);
  servicoRoute(app);
  produtoRoute(app);
  pedidoServicoRoute(app);
  pedidoProdutoRoute(app);
  consumidorRoute(app);
  comandaRoute(app);
  funcionarioRoute(app);
  historicoComprasRoute(app);
}

export default Routes;
