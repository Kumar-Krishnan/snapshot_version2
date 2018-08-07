class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :question_text
      t.references :test, foreign_key: true

      t.timestamps
    end
  end
end
