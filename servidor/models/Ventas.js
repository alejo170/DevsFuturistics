module.exports = (sequelize, DataTypes) => {
    const Ventas = sequelize.define("Ventas", {

      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }, 

    },
    {timestamps: false,}
    
    );
    
    Ventas.associate = (models) => {
        Ventas.belongsToMany(models.Productos, {
         through: 'detalle_venta',
         timestamps: false,
         foreignkey: {name: 'id', allowNull: false}
        });
      };

    return Ventas;
  };