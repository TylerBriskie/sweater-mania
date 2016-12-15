
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('users').del()
  return knex.raw('DELETE FROM users; ALTER SEQUENCE users_id_seq RESTART WITH 4')
    .then(function () {
      const users = [
        {
          id:1,
          name: "Tyler Briskie",
          email:"tylerbriskie@gmail.com",
          password:"kittens"
        },
        {
          id:2,
          name:"Ikechukwu Obidike",
          email:"ikobidike@gmail.com",
          password:"goose"
        },
        {
          id:3,
          name:"Chana Reynolds",
          email:"chanareynolds@yahoo.com",
          password:"cashmere"
        }
      ]
      return knex('users').insert(users)
    });
};
