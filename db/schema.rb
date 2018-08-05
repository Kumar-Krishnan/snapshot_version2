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

ActiveRecord::Schema.define(version: 2018_07_29_211813) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "moods", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "moods_snaps", id: false, force: :cascade do |t|
    t.bigint "mood_id"
    t.bigint "snap_id"
    t.index ["mood_id"], name: "index_moods_snaps_on_mood_id"
    t.index ["snap_id"], name: "index_moods_snaps_on_snap_id"
  end

  create_table "snaps", force: :cascade do |t|
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_snaps_on_user_id"
  end

  create_table "test_scores", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "snap_id"
    t.bigint "mood_id"
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mood_id"], name: "index_test_scores_on_mood_id"
    t.index ["snap_id"], name: "index_test_scores_on_snap_id"
    t.index ["user_id"], name: "index_test_scores_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "gender"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "moods_snaps", "moods"
  add_foreign_key "moods_snaps", "snaps"
  add_foreign_key "snaps", "users"
  add_foreign_key "test_scores", "moods"
  add_foreign_key "test_scores", "snaps"
  add_foreign_key "test_scores", "users"
end
