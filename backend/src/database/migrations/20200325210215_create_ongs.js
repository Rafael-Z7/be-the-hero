
exports.up = function(knex) { // responsavel pela criaçao da tabela
  return knex.schema.createTable('ongs',function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf').notNullable();
  });
}; 

exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
};
