/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('request_class', {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        availability: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        class_type: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        bls_interested: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        heartsaver_aed_interested: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        heartsaver_firstaid_interested: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        created: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated: {
          type: DataTypes.DATE,
          allowNull: false
        }
    }, {
        tableName: 'request_class',
        timestamps: true,
        createdAt: 'created',
        updatedAt: 'updated',
        freezeTableName: true
    });
};
