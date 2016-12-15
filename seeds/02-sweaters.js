
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  return knex.raw('DELETE FROM sweaters; ALTER SEQUENCE sweaters_id_seq RESTART WITH 1')
    .then(function () {
      const sweaters = [
        {
          material: 'cashmere',
          style: 'pullover',
          color: 'white',
          users_id:3
        },
        {
          material: 'wool',
          style: 'turtleneck',
          color: 'navy blue',
          users_id:2
        },
        {
          material: 'cotton',
          style: 'hoodie',
          color: 'heather grey',
          users_id:1
        },
        {
          material: 'cashmere',
          style: 'mock turtleneck',
          color: 'tan',
          users_id:3
        },
        {
          material: 'cotton',
          style: 'zip up',
          color: 'black',
          users_id:2
        },
        {
          material: 'wool',
          style: 'track jacket',
          color: 'red',
          users_id:1
        }
      ]
      return knex('sweaters').insert(sweaters)
    });
};
