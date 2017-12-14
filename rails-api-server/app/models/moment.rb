class Moment < ApplicationRecord
  validates :body, :author_id, :child_id, presence: true

  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id

  belongs_to :child

end
