class Child < ApplicationRecord
  validates :name, :teacher_id, :parent_id, presence: true

  belongs_to :parent,
  class_name: "User",
  primary_key: :id,
  foreign_key: :parent_id

  belongs_to :teacher,
  class_name: "User",
  primary_key: :id,
  foreign_key: :teacher_id
end
