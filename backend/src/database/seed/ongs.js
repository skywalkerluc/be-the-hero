exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ongs')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ongs').insert([
        {
          id: 'apad1',
          name: 'APAD1',
          email: 'contato@hotmail.com',
          whatsapp: '81 996936933',
          city: 'Recife',
          uf: 'PE'
        },
        {
          id: 'apad2',
          name: 'APAD2',
          email: 'contato@hotmail.com',
          whatsapp: '81 996936933',
          city: 'Recife',
          uf: 'PE'
        }
      ]);
    });
};
