class AddImagesToMoments < ActiveRecord::Migration[5.1]
  def change
    add_column :moments, :image_url, :string
  end
end
