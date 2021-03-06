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

ActiveRecord::Schema.define(version: 2018_08_13_223240) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string "answer_text"
    t.bigint "question_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "answer_value"
    t.index ["question_id"], name: "index_answers_on_question_id"
  end

  create_table "answers_snaps", id: false, force: :cascade do |t|
    t.bigint "answer_id"
    t.bigint "snap_id"
    t.index ["answer_id"], name: "index_answers_snaps_on_answer_id"
    t.index ["snap_id"], name: "index_answers_snaps_on_snap_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "question_text"
    t.bigint "test_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["test_id"], name: "index_questions_on_test_id"
  end

  create_table "snaps", force: :cascade do |t|
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_snaps_on_user_id"
  end

  create_table "snaps_tests", id: false, force: :cascade do |t|
    t.bigint "snap_id"
    t.bigint "test_id"
    t.index ["snap_id"], name: "index_snaps_tests_on_snap_id"
    t.index ["test_id"], name: "index_snaps_tests_on_test_id"
  end

  create_table "test_scores", force: :cascade do |t|
    t.integer "score_total"
    t.bigint "snap_id"
    t.bigint "test_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["snap_id"], name: "index_test_scores_on_snap_id"
    t.index ["test_id"], name: "index_test_scores_on_test_id"
    t.index ["user_id"], name: "index_test_scores_on_user_id"
  end

  create_table "tests", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "max_score"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "gender"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "answers", "questions"
  add_foreign_key "answers_snaps", "answers"
  add_foreign_key "answers_snaps", "snaps"
  add_foreign_key "questions", "tests"
  add_foreign_key "snaps", "users"
  add_foreign_key "snaps_tests", "snaps"
  add_foreign_key "snaps_tests", "tests"
  add_foreign_key "test_scores", "snaps"
  add_foreign_key "test_scores", "tests"
  add_foreign_key "test_scores", "users"
end
