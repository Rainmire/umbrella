class AddIsPrivateToMoments < ActiveRecord::Migration[5.1]
  def change
    add_column :moments, :is_public, :boolean, null: false
  end
end
