import aeronaveRoute from './aeronaveRoute';
import clienteRoute from './clienteRoute';
import pagamentoRoute from './pagamentoRoute';
import pessoaRoute from './pessoaRoute';
import reservaRoute from './reservaRoute';
import tipoAeronaveRoute from './tipoAeronaveRoute';

function Routes(app) {
  pessoaRoute(app);
  tipoAeronaveRoute(app);
  clienteRoute(app);
  aeronaveRoute(app);
  reservaRoute(app);
  pagamentoRoute(app);
}

export default Routes;
