class CreateChildMomentMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :child_moment_memberships do |t|
      t.integer :child_id, null: false
      t.integer :moment_id, null: false

      t.timestamps
    end
    add_index :child_moment_memberships, :child_id
    add_index :child_moment_memberships, :moment_id
  end
end
