import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Usuario from './UsuarioModel';

const Consumidor = sequelize.define(
  'consumidor',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    dataCadastro: {
      field: 'data_cadastro',
      type: DataTypes.STRING(11),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Consumidor.belongsTo(Usuario, {
  as: 'pedido',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'cpfUsuario',
    allowNull: false,
    field: 'cpf_usuario',
  },
});

export default Consumidor;
