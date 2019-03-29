# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Cleaning database...'
Person.destroy_all

puts 'Creating gente...'
persons_attributes = [
  {
    name:         'Phil',
    money:        5
  },
  {
    name:         'Donny',
    money:        2
  },
  {
    name:         'Will',
    money:        5
  },
  {
    name:         'Kevin',
    money:        5
  },
  {
    name:         'Craig',
    money:        4
  }
]
Person.create!(persons_attributes)
puts 'Finished!'
