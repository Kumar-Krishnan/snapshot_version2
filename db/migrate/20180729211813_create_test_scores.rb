class CreateTestScores < ActiveRecord::Migration[5.2]
  def change
    create_table :test_scores do |t|
      t.references :user, foreign_key: true
      t.references :snap, foreign_key: true
      t.references :mood, foreign_key: true
      t.integer :score

      t.timestamps
    end
  end
end
