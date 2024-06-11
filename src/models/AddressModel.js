import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import UserModel from './UserModel';

const Address = sequelize.define(
  'addresses',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    zipCode: {
      field: 'zip_code',
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    numberForget: {
      field: 'number_forget',
      type: DataTypes.STRING(255),
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

Address.belongsTo(UserModel, {
  as: 'User',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user',
    name: 'idUser',
    allowNull: false,
  },
});

export default Address;
