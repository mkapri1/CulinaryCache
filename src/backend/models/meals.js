module.exports = (sequelize, DataTypes) => {
    const meals = sequelize.define("meals", {
        restaurantName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isVegan: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        allergies: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        priceRange: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        collectTime: {
            type: DataTypes.INTEGER,
            allowNull: true,
            
        }   
    });
    return meals
}