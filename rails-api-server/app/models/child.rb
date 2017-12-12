class Child < ApplicationRecord
  validates :name, :teacher_id, :parent_id

  belongs_to :parent,
  class_name: "User",
  primary_key: :id,
  foreign_key: :parent_id
end
