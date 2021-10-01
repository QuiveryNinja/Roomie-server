module.exports = (sequelize, DataTypes) =>{
    const Entries = sequelize.define("Entries",{
        Country:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        houseName:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        
        UniName: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        City: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
    });

    return Entries
}