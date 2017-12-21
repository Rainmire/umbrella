# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { name: 'Lily', email: 'zq.yang.lily@gmail.com', contact: '111-111-1111', logged_in: false, profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog1_lymttu.jpg' },
  { name: 'Guy', email: 'ggwass@gmail.com', contact: '222-222-2222', logged_in: false, profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog2_rz2qbr.jpg' },
  { name: 'Mitch', email: 'melancholycomedy@gmail.com', contact: '333-333-3333', logged_in: false, profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog3_a25vcc.jpg' },
  { name: 'Teacher1', email: 'teacher1@gmail.com', teacher_class: 'Class A', contact: '444-444-4444', logged_in: false, profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog2_rz2qbr.jpg' },
  { name: 'Teacher2', email: 'teacher2@gmail.com', teacher_class: 'Class B', contact: '555-555-5555', logged_in: false, profile_pic: 'http://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog1_lymttu.jpg' },
  ])

children = Child.create([
  { name: 'Child1', teacher_id: 4, parent_id: 1, profile_pic: 'https://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513188522/cat1_cok5bz.jpg' },
  { name: 'Child2', teacher_id: 4, parent_id: 1, profile_pic: 'https://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513188939/cats2_u6iwaq.jpg' },
  { name: 'Child3', teacher_id: 4, parent_id: 2, profile_pic: 'https://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513189131/cat3_wx4tns.jpg' },
  { name: 'Child4', teacher_id: 5, parent_id: 2, profile_pic: 'https://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513188522/cat1_cok5bz.jpg' },
  { name: 'Child5', teacher_id: 4, parent_id: 3, profile_pic: 'https://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513188939/cats2_u6iwaq.jpg' },
  { name: 'Child6', teacher_id: 4, parent_id: 3, profile_pic: 'https://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513189131/cat3_wx4tns.jpg' },
  ])

moments = Moment.create([
  { body: 'Moment1', author_id: 4, is_public: false },
  { body: 'Moment2', author_id: 4, is_public: false },
  { body: 'Moment3', author_id: 4, is_public: false },
  { body: 'Moment4', author_id: 4, is_public: false },
  { body: 'Moment5', author_id: 4, is_public: false },
  { body: 'Moment6', author_id: 4, is_public: false },

  #bunch of child 3 moments
  { body: 'Moment7', author_id: 4, is_public: false },
  { body: 'Moment8', author_id: 4, is_public: false },
  { body: 'Moment9', author_id: 4, is_public: false },
  { body: 'Moment10', author_id: 4, is_public: false },
  { body: 'Moment11', author_id: 4, is_public: false },
  { body: 'Moment12', author_id: 4, is_public: false },
  { body: 'Moment13', author_id: 4, is_public: false },
  { body: 'Moment14', author_id: 4, is_public: false },
  { body: 'Moment15', author_id: 4, is_public: false },
  { body: 'Moment16', author_id: 4, is_public: false },
  { body: 'Moment17', author_id: 4, is_public: false },
  { body: 'Moment18', author_id: 4, is_public: false },
  { body: 'Moment19', author_id: 4, is_public: false },
  { body: 'Moment20', author_id: 4, is_public: false },

  #child 4 moments
  { body: 'Moment21', author_id: 5, is_public: false },
  { body: 'Moment22', author_id: 5, is_public: false },
  { body: 'Moment23', author_id: 5, is_public: false },

  ])

moments.each.with_index do |moment, idx|
  moment.update_attribute :created_at, (moments.length-idx).minutes.ago
end

child_moment_memberships = ChildMomentMembership.create([
  { child_id: 1, moment_id: 1 },
  { child_id: 1, moment_id: 2 },
  { child_id: 2, moment_id: 3 },
  { child_id: 2, moment_id: 4 },
  { child_id: 3, moment_id: 5 },
  { child_id: 3, moment_id: 6 },

  { child_id: 4, moment_id: 21 },
  { child_id: 4, moment_id: 22 },
  { child_id: 4, moment_id: 23 },

  { child_id: 5, moment_id: 3 },
  { child_id: 5, moment_id: 4 },
  { child_id: 6, moment_id: 5 },
  { child_id: 6, moment_id: 6 },

  #child 3 extras
  { child_id: 3, moment_id: 7 },
  { child_id: 3, moment_id: 8 },
  { child_id: 3, moment_id: 9 },
  { child_id: 3, moment_id: 10 },
  { child_id: 3, moment_id: 11 },
  { child_id: 3, moment_id: 12 },
  { child_id: 3, moment_id: 13 },
  { child_id: 3, moment_id: 14 },
  { child_id: 3, moment_id: 15 },
  { child_id: 3, moment_id: 16 },
  { child_id: 3, moment_id: 17 },
  { child_id: 3, moment_id: 18 },
  { child_id: 3, moment_id: 19 },
  { child_id: 3, moment_id: 20 },

  ])
