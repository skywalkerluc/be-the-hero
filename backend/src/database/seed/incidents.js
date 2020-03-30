exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('incidents')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('incidents').insert([
        {
          title: 'Caso 1',
          description: 'Detalhes do caso',
          value: 120,
          ong_id: 'apad1'
        },
        {
          title: 'Caso 2',
          description: 'Detalhes do caso',
          value: 150,
          ong_id: 'apad2'
        }
      ]);
    });
};
