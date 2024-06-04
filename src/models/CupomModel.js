import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const CupomModel = sequelize.define(
  'cupoms',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(255),
      defaultValue: 'percent',
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    use: {
      field: 'uses',
      type: DataTypes.STRING(255),
      defaultValue: 999,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default CupomModel;
