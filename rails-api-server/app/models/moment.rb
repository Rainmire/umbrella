class Moment < ApplicationRecord
  validates :body, :author_id, :is_public, presence: true

  after_initialize :set_private

  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id

  has_many :child_moment_memberships

  has_many :children,
  through: :child_moment_memberships

  def set_private
    self.is_public = false unless self.is_public
  end

end
