const knex = require('./knex.js');

module.exports = {
  getOne: function(id){
    return knex('users').where('id',id).first();
  }
}
