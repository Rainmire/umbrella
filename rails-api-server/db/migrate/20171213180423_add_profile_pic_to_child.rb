class AddProfilePicToChild < ActiveRecord::Migration[5.1]
  def change
    add_column :children, :profile_pic, :string
  end
end
