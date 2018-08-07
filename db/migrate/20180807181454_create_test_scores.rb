class CreateTestScores < ActiveRecord::Migration[5.2]
  def change
    create_table :test_scores do |t|
      t.integer :score_total
      t.references :snap, foreign_key: true
      t.references :test, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
