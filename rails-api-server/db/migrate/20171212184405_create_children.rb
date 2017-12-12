class CreateChildren < ActiveRecord::Migration[5.1]
  def change
    create_table :children do |t|
      t.string :name, null: false
      t.integer :teacher_id, null: false
      t.integer :parent_id, null: false
      t.timestamps
    end

    add_index :children, :name
    add_index :children, :teacher_id
    add_index :children, :parent_id
  end
end
