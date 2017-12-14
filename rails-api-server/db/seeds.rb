# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { name: 'Lily', email: 'zq.yang.lily@gmail.com', contact: '111-111-1111', profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog1_lymttu.jpg' },
  { name: 'Guy', email: 'ggwass@gmail.com', teacher_class: 'Class A', contact: '222-222-2222', profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog2_rz2qbr.jpg' },
  { name: 'Mitch', email: 'melancholycomedy@gmail.com', contact: '333-333-3333', profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog3_a25vcc.jpg' },
  ])

children = Child.create([
  { name: 'Child1', teacher_id: 2, parent_id: 1, profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513188522/cat1_cok5bz.jpg' },
  { name: 'Child2', teacher_id: 2, parent_id: 1, profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513188939/cats2_u6iwaq.jpg' },
  { name: 'Child3', teacher_id: 2, parent_id: 3, profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513189131/cat3_wx4tns.jpg' },
  ])

moments = Moment.create([
  { body: 'Moment1', author_id: 2, child_id: 1 },
  { body: 'Moment2', author_id: 2, child_id: 1 },
  { body: 'Moment3', author_id: 2, child_id: 2 },
  { body: 'Moment4', author_id: 2, child_id: 3 },
  ])

moments.each.with_index do |moment, idx|
  moment.update_attribute :created_at, (moments.length-idx).minutes.ago
end
