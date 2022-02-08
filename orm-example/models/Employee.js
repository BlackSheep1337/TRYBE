module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamp: false,
    tableName: 'Employees',
    underscore: true,
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Address, {
      foreignKey: 'employee_id', as: 'addresses'
    });
  }

  return Employee;
}