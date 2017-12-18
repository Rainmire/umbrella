class RemoveChildIdFromMoments < ActiveRecord::Migration[5.1]
  def change
    remove_column :moments, :child_id
  end
end
