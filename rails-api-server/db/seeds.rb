# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { name: 'Lily', email: 'zq.yang.lily@gmail.com' },
  { name: 'Guy', email: 'ggwass@gmail.com', teacher_class: 'Class A' },
  { name: 'Mitch', email: 'melancholycomedy@gmail.com' },
  ])

children = Child.create([
  { name: 'Child1', teacher_id: 2, parent_id: 1, profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513188522/cat1_cok5bz.jpg' },
  { name: 'Child2', teacher_id: 2, parent_id: 1, profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513188939/cats2_u6iwaq.jpg' },
  { name: 'Child3', teacher_id: 2, parent_id: 3, profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513189131/cat3_wx4tns.jpg' },
  ])
