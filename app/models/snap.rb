class Snap < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :moods
  has_many :test_scores, dependent: :destroy
end
