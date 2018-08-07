class CreateAnswersSnaps < ActiveRecord::Migration[5.2]
  def change
    create_table :answers_snaps, id: false do |t|
      t.references :answer, foreign_key: true
      t.references :snap, foreign_key: true
    end
  end
end
