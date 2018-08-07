class AddAnswerValueToAnswer < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :answer_value, :integer
  end
end
