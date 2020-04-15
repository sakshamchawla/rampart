/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('request_coverage', {
    org_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contact_email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contact_phone: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    secondary_contact_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    secondary_contact_phone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    secondary_contact_email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    event_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    event_location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    arrival_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    event_type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expected_outcome: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expected_duration: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tier: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    more_info:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'request_coverage',
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated',
    freezeTableName: true
  });
};
