import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Aeronave from './AeronaveModel';
import Cliente from './ClienteModel';
import Piloto from './PilotoModel';

const Voo = sequelize.define(
  'voo',
  {
    id: {
      field: 'codigo_voo',
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    origem: {
      field: 'origem',
      type: DataTypes.STRING(100),
    },
    destino: {
      field: 'destino',
      type: DataTypes.STRING(100),
    },
    dataSaida: {
      field: 'data_saida',
      type: DataTypes.DATE,
    },
    dataChegada: {
      field: 'data_chegada',
      type: DataTypes.DATE,
    },
    horarioSaida: {
      field: 'horario_saida',
      type: DataTypes.TIME,
    },
    horarioChegada: {
      field: 'horario_chegada',
      type: DataTypes.TIME,
    },
    quilometragem: {
      field: 'quilometragem',
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Voo.belongsTo(Aeronave, {
  as: 'aeronave',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idAeronave',
    allowNull: false,
    field: 'id_aeronave',
  },
});

Voo.belongsTo(Cliente, {
  as: 'cliente',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idCliente',
    allowNull: false,
    field: 'id_cliente',
  },
});

Voo.belongsTo(Piloto, {
  as: 'piloto',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idPiloto',
    allowNull: false,
    field: 'id_piloto',
  },
});

export default Voo;
