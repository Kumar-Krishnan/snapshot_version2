class AddMaxScoreToTests < ActiveRecord::Migration[5.2]
  def change
    add_column :tests, :max_score, :integer
  end
end
