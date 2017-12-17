class AddLoggedInToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :logged_in, :boolean, null: false
  end
end
