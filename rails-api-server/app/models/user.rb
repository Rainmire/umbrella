class User < ApplicationRecord
  validates :name, presence: true
  validates :email, uniqueness: true

  has_many :children,
  class_name: :Child,
  primary_key: :id,
  foreign_key: :parent_id

  has_many :students,
  class_name: :Child,
  foreign_key: :teacher_id

  has_many :moments,
  foreign_key: :author_id

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.email = auth.info.email
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      return user
    end
  end
end
