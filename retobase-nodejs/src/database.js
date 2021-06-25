const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
                                process.env.DB_USER || 'postgres',
                                process.env.DB_PASSWORD || 'postgres',
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                    port: process.env.DB_PORT || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });
const ibm_sum = sequelize.define('ibm_sum', {
    addend1: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    addend2: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    sum: {
      type: Sequelize.DOUBLE,
      allowNull: false
  },
    
});
module.exports = {
    sequelize: sequelize,
    ibm_sum: ibm_sum
};