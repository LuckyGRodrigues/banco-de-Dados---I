import aeronaveRoute from './aeronaveRoute';
import cartaoRoute from './cartaoRoute';
import clienteRoute from './clienteRoute';
import historicoReservaRoute from './historicoReservaRoute';
import pagamentoRoute from './pagamentoRoute';
import pessoaRoute from './pessoaRoute';
import pilotoRoute from './pilotoRoute';
import reservaRoute from './reservaRoute';
import tipoAeronaveRoute from './tipoAeronaveRoute';
import vooRoute from './vooRoute';

function Routes(app) {
  pessoaRoute(app);
  tipoAeronaveRoute(app);
  clienteRoute(app);
  aeronaveRoute(app);
  reservaRoute(app);
  pagamentoRoute(app);
  pilotoRoute(app);
  cartaoRoute(app);
  historicoReservaRoute(app);
  vooRoute(app);
}

export default Routes;
