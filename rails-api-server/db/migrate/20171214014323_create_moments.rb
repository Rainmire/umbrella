class CreateMoments < ActiveRecord::Migration[5.1]
  def change
    create_table :moments do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :child_id, null: false

      t.timestamps
    end
    add_index :moments, :author_id
    add_index :moments, :child_id
  end
end
