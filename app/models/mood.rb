class Mood < ApplicationRecord
    has_and_belongs_to_many :snaps
    has_many :test_scores, dependent: :destroy
end
