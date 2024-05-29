import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import UserModel from './UserModel';
import Addressmodel from './AddressModel';
import PaymentModel from './PaymentModel';
import CupomModel from './CupomModel';

const OrderModel = sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING(255),
      defaultValue: 'criado',
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalDiscount: {
      field: 'total_discount',
      type: DataTypes.FLOAT,
      defaultValue: 0,
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

OrderModel.belongsTo(UserModel, {
  as: 'userCostumer',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user_costumer',
    name: 'idUserCostumer',
    allowNull: false,
  },
});

OrderModel.belongsTo(UserModel, {
  as: 'userDeliver',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user_deliver',
    name: 'idUserDeliver',
    allowNull: true,
  },
});

OrderModel.belongsTo(Addressmodel, {
  as: 'address',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_adress',
    name: 'idAddress',
    allowNull: false,
  },
});

OrderModel.belongsTo(PaymentModel, {
  as: 'payments',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_payment',
    name: 'idPayment',
    allowNull: false,
  },
});

OrderModel.belongsTo(CupomModel, {
  as: 'cupoms',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_cupom',
    name: 'idCupom',
    allowNull: false,
  },
});

export default OrderModel;
