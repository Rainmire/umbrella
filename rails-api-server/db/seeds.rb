# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { name: 'Lily', email: 'lily@gmail.com', type: 'parent' },
  { name: 'Guy', email: 'guy@gmail.com', type: 'teacher', teacher_class: 'Class A' },
  { name: 'Mitch', email: 'mitch@gmail.com', type: 'parent' },
  ])

children = Child.create([
  { name: 'Child1', teacher_id: 2, parent_id: 1 },
  { name: 'Child2', teacher_id: 2, parent_id: 1 },
  { name: 'Child3', teacher_id: 2, parent_id: 3 },
  ])
