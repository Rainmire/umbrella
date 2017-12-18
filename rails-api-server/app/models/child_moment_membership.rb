class ChildMomentMembership < ApplicationRecord
  validates :child_id, :moment_id, presence: true

  belongs_to :child
  belongs_to :moment
end
