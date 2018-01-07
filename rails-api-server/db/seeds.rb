# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  { name: 'Lily', email: 'zq.yang.lily@gmail.com', contact: '111-111-1111', logged_in: false, profile_pic: 'https://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog1_lymttu.jpg' },
  { name: 'Guy', email: 'ggwass@gmail.com', contact: '222-222-2222', logged_in: false, profile_pic: 'https://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog2_rz2qbr.jpg' },
  { name: 'Mitch', email: 'melancholycomedy@gmail.com', contact: '333-333-3333', logged_in: false, profile_pic: 'https://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog3_a25vcc.jpg' },
  { name: 'Miss Melissa', email: 'teacher1@gmail.com', teacher_class: 'Class A', contact: '444-444-4444', logged_in: false, profile_pic: 'https://res.cloudinary.com/dreamhousesf/image/upload/v1511993218/dane-deaner-327695_xbkbyl.jpg' },
  { name: 'Miss Lisa', email: 'teacher2@gmail.com', teacher_class: 'Class B', contact: '555-555-5555', logged_in: false, profile_pic: 'https://res.cloudinary.com/rainmire/image/upload/c_lfill,h_300,w_300/v1513199891/dog1_lymttu.jpg' },
  ])

Child.create([
  { name: 'Lucas', teacher_id: 4, parent_id: 1, profile_pic: 'https://res.cloudinary.com/dreamhousesf/image/upload/v1513807652/IMG_0936_ebxblo.jpg' },
  { name: 'Michael', teacher_id: 5, parent_id: 3, profile_pic: 'https://res.cloudinary.com/dreamhousesf/image/upload/v1513807652/IMG_4684_xnhzs9.jpg' },
  { name: 'Ethan', teacher_id: 5, parent_id: 1, profile_pic: 'https://res.cloudinary.com/dreamhousesf/image/upload/v1513807652/IMG_5142_2_yfvsji.jpg' },
  { name: 'James', teacher_id: 4, parent_id: 2, profile_pic: 'https://res.cloudinary.com/dreamhousesf/image/upload/v1513807652/FullSizeRender_5_smr5gm.jpg' },
  { name: 'Emily', teacher_id: 4, parent_id: 3, profile_pic: 'https://res.cloudinary.com/dreamhousesf/image/upload/v1513807653/FullSizeRender_7_gxq6bf.jpg' },
  { name: 'Coco', teacher_id: 5, parent_id: 2, profile_pic: 'https://res.cloudinary.com/dreamhousesf/image/upload/v1513807793/FullSizeRender_8_n9v6xk.jpg' },
  ])

moments = Moment.create([
  #morning:
  #1,2
  { body: 'Morning Snack', author_id: 4, is_public: true },
  { body: 'Morning Snack', author_id: 5, is_public: true },
  #3
  { body: "We read 'Share My Cookie' and sing sharing song this morning for Circle Time", author_id: 4, is_public: true },
  #4
  { body: "We read 'I Love my Mommy' this morning for Circle Time", author_id: 5, is_public: true },
  #5 Moments for child 1,lucas lily
  { body: 'Potty Time: Pee', author_id: 4, is_public: false },
  #6,7
  { body: 'Sensitive Play: We made colored cookie for the holiday', author_id: 4, is_public: true },
  { body: "Sensitive Play: We used sparkling fragment to make the ice cubes", author_id: 5, is_public: true },
  #8
  { body: 'Learning: ABAB Pattern was introduced to the class this afternoon, we used lego and cars to do the practice', author_id: 4, is_public: true },

  #9 10 11Moments for child 4,James Guy
  { body: 'Band-aid Report: James was tripped on the playground with minor scratch on the face ', author_id: 4, is_public: false },
  { body: 'Potty Time: Pee', author_id: 4, is_public: false },
  { body: 'Nap Time: 1:00-2:58pm', author_id: 4, is_public: false },
  #12 13 14 15 Moments for child 3, Ethan Lily
  { body: 'Diaper : Wet', author_id: 5, is_public: false },
  { body: "Band-aid Report: Ethan got scratched when grabbing another kid's toy", author_id: 5, is_public: false },
  { body: 'Nap Time: 1:00- 3:00pm', author_id: 5, is_public: false },
  { body: 'Diaper : Wet', author_id: 5, is_public: false },
  #16 17 18 Moments for child 6,coco Guy
  { body: 'Diaper : Wet', author_id: 5, is_public: false },
  { body: "Band-aid Report: Coco got tripped on the stairs", author_id: 5, is_public: false },
  { body: 'Nap Time: Restless', author_id: 5, is_public: false },
  #afternoon
  #19,20,21,22,23,24
  { body: 'Afternoon Play outside', author_id: 4, is_public: true },
  { body: 'Afternoon Story time', author_id: 4, is_public: true },
  { body: 'Afternoon Snack time', author_id: 4, is_public: true },
  { body: 'Afternoon Play outside', author_id: 5, is_public: true },
  { body: 'Story time: Leaves', author_id: 5, is_public: true },
  { body: 'Afternoon Snack time', author_id: 5, is_public: true },

  { body: 'Moment balala', author_id: 5, is_public: false },
  { body: 'Moment long time ago', author_id: 5, is_public: false },
  { body: 'Moment long time', author_id: 4, is_public: false },
  { body: 'Moment not oldest', author_id: 4, is_public: false },
  { body: 'Moment older', author_id: 4, is_public: false },
  { body: 'Moment new', author_id: 4, is_public: false },
  { body: 'Moment im the latest one', author_id: 4, is_public: false },

  ])

moments.each.with_index do |moment, idx|
  moment.update_attribute :id, idx + 101
end

moments.each.with_index do |moment, idx|
  moment.update_attribute :id, idx + 1
  moment.update_attribute :created_at, (moments.length - idx).minutes.ago
end

ChildMomentMembership.create([
  { child_id: 1, moment_id: 1 },
  { child_id: 4, moment_id: 1 },
  { child_id: 5, moment_id: 1 },
  { child_id: 2, moment_id: 2 },
  { child_id: 3, moment_id: 2 },
  { child_id: 6, moment_id: 2 },
  { child_id: 1, moment_id: 3 },
  { child_id: 4, moment_id: 3 },
  { child_id: 5, moment_id: 3 },
  { child_id: 2, moment_id: 4 },
  { child_id: 3, moment_id: 4 },
  { child_id: 6, moment_id: 4 },

  { child_id: 3, moment_id: 5 },
  { child_id: 6, moment_id: 5 },
  { child_id: 2, moment_id: 5 },
  { child_id: 1, moment_id: 6 },
  { child_id: 4, moment_id: 6 },
  { child_id: 5, moment_id: 6 },
  { child_id: 2, moment_id: 7 },
  { child_id: 3, moment_id: 7 },
  { child_id: 6, moment_id: 7 },
  { child_id: 1, moment_id: 8 },
  { child_id: 4, moment_id: 8 },
  { child_id: 5, moment_id: 8 },

  { child_id: 4, moment_id: 9 },
  { child_id: 4, moment_id: 10 },
  { child_id: 4, moment_id: 11 },

  { child_id: 3, moment_id: 12 },
  { child_id: 3, moment_id: 13 },
  { child_id: 3, moment_id: 14 },
  { child_id: 3, moment_id: 15 },

  { child_id: 6, moment_id: 16 },
  { child_id: 6, moment_id: 17 },
  { child_id: 6, moment_id: 18 },

  { child_id: 1, moment_id: 19 },
  { child_id: 4, moment_id: 19 },
  { child_id: 5, moment_id: 19 },
  { child_id: 1, moment_id: 20 },
  { child_id: 4, moment_id: 20 },
  { child_id: 5, moment_id: 20 },
  { child_id: 1, moment_id: 21 },
  { child_id: 4, moment_id: 21 },
  { child_id: 5, moment_id: 21 },
  { child_id: 2, moment_id: 22 },
  { child_id: 3, moment_id: 22 },
  { child_id: 6, moment_id: 22 },
  { child_id: 2, moment_id: 23 },
  { child_id: 3, moment_id: 23 },
  { child_id: 6, moment_id: 23 },
  { child_id: 2, moment_id: 24 },
  { child_id: 3, moment_id: 24 },
  { child_id: 6, moment_id: 24 },

  { child_id: 3, moment_id: 25 },
  { child_id: 3, moment_id: 26 },
  { child_id: 1, moment_id: 27 },
  { child_id: 1, moment_id: 28 },
  { child_id: 1, moment_id: 29 },
  { child_id: 1, moment_id: 30 },
  { child_id: 1, moment_id: 31 },



  ])

  # ChildMomentMembership.create([
  #   { child_id: 1, moment_id: 101 },
  #   { child_id: 4, moment_id: 101 },
  #   { child_id: 5, moment_id: 101 },
  #   { child_id: 2, moment_id: 102 },
  #   { child_id: 3, moment_id: 102 },
  #   { child_id: 6, moment_id: 102 },
  #   { child_id: 1, moment_id: 103 },
  #   { child_id: 4, moment_id: 103 },
  #   { child_id: 5, moment_id: 103 },
  #   { child_id: 2, moment_id: 104 },
  #   { child_id: 3, moment_id: 104 },
  #   { child_id: 6, moment_id: 104 },
  #
  #   { child_id: 1, moment_id: 105 },
  #
  #   { child_id: 3, moment_id: 105 },
  #   { child_id: 6, moment_id: 105 },
  #
  #   #child 3 extras
  #   { child_id: 1, moment_id: 106 },
  #   { child_id: 4, moment_id: 106 },
  #   { child_id: 5, moment_id: 106 },
  #   { child_id: 2, moment_id: 107 },
  #   { child_id: 3, moment_id: 107 },
  #   { child_id: 6, moment_id: 107 },
  #   { child_id: 1, moment_id: 108 },
  #   { child_id: 4, moment_id: 108 },
  #   { child_id: 5, moment_id: 108 },
  #
  #   { child_id: 4, moment_id: 109 },
  #   { child_id: 4, moment_id: 110 },
  #   { child_id: 4, moment_id: 111 },
  #
  #   { child_id: 3, moment_id: 112 },
  #   { child_id: 3, moment_id: 113 },
  #   { child_id: 3, moment_id: 114 },
  #
  #   { child_id: 6, moment_id: 115 },
  #   { child_id: 6, moment_id: 116 },
  #   { child_id: 6, moment_id: 117 },
  #
  #   { child_id: 1, moment_id: 118 },
  #   { child_id: 4, moment_id: 118 },
  #   { child_id: 5, moment_id: 118 },
  #   { child_id: 1, moment_id: 119 },
  #   { child_id: 4, moment_id: 119 },
  #   { child_id: 5, moment_id: 119 },
  #   { child_id: 1, moment_id: 120 },
  #   { child_id: 4, moment_id: 120 },
  #   { child_id: 5, moment_id: 120 },
  #   { child_id: 2, moment_id: 121 },
  #   { child_id: 3, moment_id: 121 },
  #   { child_id: 6, moment_id: 121 },
  #   { child_id: 2, moment_id: 122 },
  #   { child_id: 3, moment_id: 122 },
  #   { child_id: 6, moment_id: 122 },
  #   { child_id: 2, moment_id: 123 },
  #   { child_id: 3, moment_id: 123 },
  #   { child_id: 6, moment_id: 123 },
  #
  #   { child_id: 6, moment_id: 124 },
  #   { child_id: 6, moment_id: 125 },
  #   { child_id: 6, moment_id: 126 },
  #   { child_id: 6, moment_id: 127 },
  #   { child_id: 6, moment_id: 128 },
  #   { child_id: 6, moment_id: 129 },
  #   { child_id: 6, moment_id: 130 },
  #
  #   { child_id: 3, moment_id: 124 },
  #   { child_id: 3, moment_id: 125 },
  #   { child_id: 3, moment_id: 126 },
  #   { child_id: 3, moment_id: 127 },
  #   { child_id: 3, moment_id: 128 },
  #   { child_id: 3, moment_id: 129 },
  #   { child_id: 3, moment_id: 130 },
  #
  #   ])
