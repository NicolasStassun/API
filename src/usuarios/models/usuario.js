const { DataTypes, Model } = require('sequelize')
const connection = require('../../database/connection')

class Usuario extends Model {}

Usuario.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cardPermissions: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('cardPermissions'));
        },
        set(value) {
          this.setDataValue('cardPermissions', JSON.stringify(value));
        }
      },
      propertiesPermissions: {
        type: DataTypes.STRING,
        get() {
          return JSON.parse(this.getDataValue('propertiesPermissions'));
        },
        set(value) {
          this.setDataValue('propertiesPermissions', JSON.stringify(value));
        }
      }
      
}, {
    sequelize: connection,
    modelName: 'users'
});

Usuario.sync({force: true}).then(() => {console.log('Usuario sincronizado')}).catch((e) => {console.log('Usuario nao sincronizado')})

module.exports = Usuario;