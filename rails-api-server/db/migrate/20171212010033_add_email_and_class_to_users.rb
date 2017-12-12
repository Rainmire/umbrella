class AddEmailAndClassToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :email, :string, null: false
    add_index :users, :email, unique: true
    add_column :users, :teacher_class, :string
    add_column :users, :type, :string
  end
end
