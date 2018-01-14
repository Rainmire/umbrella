class CreateCalendarEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :calendar_events do |t|
      t.string :date, null: false
      t.string :start_time, null: false
      t.string :end_time, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end
