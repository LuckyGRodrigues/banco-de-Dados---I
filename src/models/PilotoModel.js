import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pessoa from './PessoaModel';

const Piloto = sequelize.define(
  'piloto',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    numeroBreve: {
      field: 'numero_breve',
      type: DataTypes.STRING(20),
    },
    celular: {
      field: 'celular',
      type: DataTypes.STRING(15),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Piloto.belongsTo(Pessoa, {
  as: 'pessoa',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'cpfPessoa',
    allowNull: false,
    field: 'cpf_pessoa',
  },
});

export default Piloto;
