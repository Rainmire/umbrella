# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180114193426) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calendar_events", force: :cascade do |t|
    t.string "date", null: false
    t.string "start_time", null: false
    t.string "end_time", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "child_moment_memberships", force: :cascade do |t|
    t.integer "child_id", null: false
    t.integer "moment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["child_id"], name: "index_child_moment_memberships_on_child_id"
    t.index ["moment_id"], name: "index_child_moment_memberships_on_moment_id"
  end

  create_table "children", force: :cascade do |t|
    t.string "name", null: false
    t.integer "teacher_id", null: false
    t.integer "parent_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_pic"
    t.index ["name"], name: "index_children_on_name"
    t.index ["parent_id"], name: "index_children_on_parent_id"
    t.index ["teacher_id"], name: "index_children_on_teacher_id"
  end

  create_table "moments", force: :cascade do |t|
    t.text "body", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_public", null: false
    t.string "image_url"
    t.index ["author_id"], name: "index_moments_on_author_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider"
    t.string "uid"
    t.string "name"
    t.string "oauth_token"
    t.datetime "oauth_expires_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.string "teacher_class"
    t.string "contact"
    t.string "profile_pic"
    t.boolean "logged_in", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
