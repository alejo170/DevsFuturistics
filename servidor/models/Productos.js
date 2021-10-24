module.exports = (sequelize, DataTypes) => {
    const Productos = sequelize.define("Productos", {

      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      codigobarras: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      valor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      
    },
    {timestamps: false,}
    
    );
    
    Productos.associate = (models) => {
       Productos.belongsToMany(models.Ventas, {
        through: 'detalle_venta',
        timestamps: false,
        foreignkey: {name: 'id', allowNull: false}
       });
     };
    return Productos;
  };