'use strict';

import { Model, UUIDV4 } from 'sequelize';

interface ResidentsAttributes {
  id: string;
  nome: string;
  telefone: string;
  modelo_carro: string;
  cor_carro: string;
  placa: string;
  bloco_apto: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Residents extends Model<ResidentsAttributes> implements ResidentsAttributes {
    id!: string;
    nome!: string;
    telefone!: string;
    modelo_carro!: string;
    cor_carro!: string;
    placa!: string;
    bloco_apto!: string;

    static associate(models: any) {
      // Residents.belongsToOne(models.Cars), {
      //   through: 'CarAssignment'
      // }
    }
  }
  Residents.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    modelo_carro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cor_carro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bloco_apto: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Residents',
  });
  return Residents;
};