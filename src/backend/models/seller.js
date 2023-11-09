module.exports = (sequelize, DataTypes) => {
    const seller = sequelize.define("Sellers", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        restaurantName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        restaurantAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return seller
}