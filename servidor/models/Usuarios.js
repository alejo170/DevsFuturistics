module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define("Usuarios", {

      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      identificador: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      
      rol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    {timestamps: false,}
    
    );
      
      
     Usuarios.associate = (models) => {
       Usuarios.hasMany(models.Ventas, {
         onDelete: "cascade",
       });
     };
    return Usuarios;
  };