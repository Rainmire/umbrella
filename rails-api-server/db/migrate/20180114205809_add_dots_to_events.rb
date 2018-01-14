class AddDotsToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :calendar_events, :key, :string
    add_column :calendar_events, :color, :string

    remove_column :calendar_events, :date
  end
end
