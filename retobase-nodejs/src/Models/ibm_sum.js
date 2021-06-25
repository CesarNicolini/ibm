var db = require('../database');

const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

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
  model: ibm_sum
};