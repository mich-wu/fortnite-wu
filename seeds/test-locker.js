/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('locker').del()
  await knex('locker').insert([
    {
      id: 0,
      url: 'https://tinyurl.com/mr4dm7t5',
      name: 'Red Jade',
      rarity: 'Uncommon',
      vbucks: 800,
    },
    {
      id: 1,
      url: 'https://tinyurl.com/bddu4r26',
      name: 'Jolly Jammer',
      rarity: 'Uncommon',
      vbucks: 800,
    },
    {
      id: 2,
      url: 'https://tinyurl.com/3vxuev79',
      name: 'Megumi',
      rarity: 'Rare',
      vbucks: 2200,
    },
    {
      id: 3,
      url: 'https://tinyurl.com/bdcmbj49',
      name: 'Ariana Grande',
      rarity: 'Icon Series',
      vbucks: 2000,
    },
  ])
}
