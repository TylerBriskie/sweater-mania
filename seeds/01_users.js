
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('users').del()
  return knex.raw('DELETE FROM users; ALTER SEQUENCE users_id_seq RESTART WITH 4')
    .then(function () {
      const users = [
        {
          name: "Tyler Briskie",
          email:"tylerbriskie@gmail.com",
          password:"kittens"
        },
        {
          name:"Ikechukwu Obidike",
          email:"ikobidike@gmail.com",
          password:"goose"
        },
        {
          name:"Chana Reynolds",
          email:"chanareynolds@yahoo.com",
          password:"cashmere"
        }
      ]
      return knex('users').insert(users)
    });
};
