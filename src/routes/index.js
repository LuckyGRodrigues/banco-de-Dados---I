import pessoaRoute from './pessoaRoute';
import tipoAeronaveRoute from './tipoAeronaveRoute';

function Routes(app) {
  pessoaRoute(app);
  tipoAeronaveRoute(app);
}

export default Routes;
