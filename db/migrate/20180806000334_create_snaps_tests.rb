class CreateSnapsTests < ActiveRecord::Migration[5.2]
  def change
    create_table :snaps_tests, id: false do |t|
      t.references :snap, foreign_key: true
      t.references :test, foreign_key: true
    end
  end
end
