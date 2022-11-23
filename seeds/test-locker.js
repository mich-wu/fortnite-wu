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
      url: 'https://static.wikia.nocookie.net/fortnite/images/0/0b/Red_Jade_-_Outfit_-_Fortnite.png/',
      name: 'Red Jade',
      rarity: 'Uncommon',
      vbucks: 800,
    },
    {
      id: 1,
      url: 'https://static.wikia.nocookie.net/fortnite_gamepedia/images/1/1a/Jolly_Jammer.png/',
      name: 'Jolly Jammer',
      rarity: 'Uncommon',
      vbucks: 800,
    },
    {
      id: 2,
      url: 'https://static.wikia.nocookie.net/fortnite/images/1/1f/Megumi_-_Outfit_-_Fortnite.png/',
      name: 'Megumi',
      rarity: 'Rare',
      vbucks: 2200,
    },
    {
      id: 3,
      url: 'https://static.wikia.nocookie.net/fortnite/images/2/23/Ariana_Grande_-_Outfit_-_Fortnite.png/',
      name: 'Ariana Grande',
      rarity: 'Icon Series',
      vbucks: 2000,
    },
  ])
}
