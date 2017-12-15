class Moment < ApplicationRecord
  validates :body, :author_id, :child_id, :is_public, presence: true

  after_initialize :set_private

  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id

  belongs_to :child

  def set_private
    self.is_public = false unless self.is_public
  end

end
