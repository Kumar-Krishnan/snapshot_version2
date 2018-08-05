class CreateMoodsSnaps < ActiveRecord::Migration[5.2]
  def change
    create_table :moods_snaps, id: false do |t|
      t.references :mood, foreign_key: true
      t.references :snap, foreign_key: true
    end
  end
end
