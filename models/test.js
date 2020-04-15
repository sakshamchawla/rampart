/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('test', {
        name: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'test',
        timestamps: false,
    });
};
