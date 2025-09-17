const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "user_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "users_model"
      }
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "project_id",
      autoIncrement: false,
      references: {
        key: "id",
        model: "projects_model"
      }
    },
    role: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: "member",
      comment: null,
      primaryKey: false,
      field: "role",
      autoIncrement: false
    },
    joined_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "joined_at",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "user_projects",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const UserProjectsModel = sequelize.define("user_projects_model", attributes, options);
  return UserProjectsModel;
};