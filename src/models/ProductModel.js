import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import CategorieModel from './CategoryModel';

const ProductModel = sequelize.define(
  'products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(300),
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

ProductModel.belongsTo(CategorieModel, {
  as: 'User',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_category',
    name: 'idCategory',
    allowNull: false,
  },
});

export default ProductModel;
