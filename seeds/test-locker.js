/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('locker').del()
  await knex('locker').insert([
    { id: 0, name: 'Red Jade', rarity: 'Uncommon', vbucks: 800 },
    { id: 1, name: 'Jolly Jammer', rarity: 'Uncommon', vbucks: 800 },
    { id: 2, name: 'Megumi', rarity: 'Rare', vbucks: 2200 },
    { id: 3, name: 'Ariana Grande', rarity: 'Icon Series', vbucks: 2000 },
  ])
}
