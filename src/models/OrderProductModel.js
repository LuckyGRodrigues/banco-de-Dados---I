import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import ProductModel from './ProductModel';
import OrderModel from './OrderModel';

const OrderProductModel = sequelize.define(
  'order_products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    priceProduct: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    quantity: {
      field: 'price_products',
      type: DataTypes.STRING(255),
      defaultValue: 1,
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

OrderProductModel.belongsTo(OrderModel, {
  as: 'order',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_user',
    name: 'idUser',
    allowNull: false,
  },
});

OrderProductModel.belongsTo(ProductModel, {
  as: 'product',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_product',
    name: 'idProduct',
    allowNull: false,
  },
});

export default OrderProductModel;
