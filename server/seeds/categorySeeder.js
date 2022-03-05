const Category = require('../models/category.model');

const categories = [
  {
    name: 'Handyman',
    subcategories: [
      {
        name: 'Plumber',
      },
      {
        name: 'Electrician',
      },
      {
        name: 'Carpenter',
      },
      {
        name: 'Maid',
      },
      {
        name: 'Cook',
      },
      {
        name: 'Janitor',
      },
      {
        name: 'Locksmith',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Beautician',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
    ],
  },
  {
    name: 'Moving Services',
    subcategories: [
      {
        name: 'Plumber',
      },
      {
        name: 'Electrician',
      },
      {
        name: 'Carpenter',
      },
      {
        name: 'Maid',
      },
      {
        name: 'Cook',
      },
      {
        name: 'Janitor',
      },
      {
        name: 'Locksmith',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Beautician',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
    ],
  },
  {
    name: 'Furniture Assembly',
    subcategories: [
      {
        name: 'Plumber',
      },
      {
        name: 'Electrician',
      },
      {
        name: 'Carpenter',
      },
      {
        name: 'Maid',
      },
      {
        name: 'Cook',
      },
      {
        name: 'Janitor',
      },
      {
        name: 'Locksmith',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Beautician',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
    ],
  },
  {
    name: 'Yardwork and Removal',
    subcategories: [
      {
        name: 'Plumber',
      },
      {
        name: 'Electrician',
      },
      {
        name: 'Carpenter',
      },
      {
        name: 'Maid',
      },
      {
        name: 'Cook',
      },
      {
        name: 'Janitor',
      },
      {
        name: 'Locksmith',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Beautician',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
      {
        name: 'Tutor',
      },
    ],
  },
];

const categorySeeder = async () => {
  await Category.deleteMany({});
  await Category.create(categories);

  console.log('Category Seeder: Categories created');
};

module.exports = categorySeeder;
