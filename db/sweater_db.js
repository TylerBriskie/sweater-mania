const knex = require('./knex.js');

module.exports = {
  getByUsers: function(id){
    return knex('sweaters').where('users_id',id);
  }

}
