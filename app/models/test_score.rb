class TestScore < ApplicationRecord
  belongs_to :user
  belongs_to :snap
  belongs_to :mood
  # validates :score, numericality: {less_than_or_equal_to: 10, :greater_than_or_equal_to: 0}
end
