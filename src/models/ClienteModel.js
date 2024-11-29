import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pessoa from './PessoaModel';

const Cliente = sequelize.define(
  'cliente',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rg: {
      field: 'rg',
      type: DataTypes.STRING(12),
    },
    dataNascimento: {
      field: 'data_nascimento',
      type: DataTypes.DATE,
    },
    cidadeResidencia: {
      field: 'cidade_residencia',
      type: DataTypes.STRING(100),
    },
    uf: {
      field: 'uf',
      type: DataTypes.STRING(2),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Cliente.belongsTo(Pessoa, {
  as: 'pessoa',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'cpfPessoa',
    allowNull: false,
    field: 'cpf_pessoa',
  },
});

export default Cliente;
