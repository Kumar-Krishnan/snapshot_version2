class Test < ApplicationRecord
    has_and_belongs_to_many :snaps
    has_many :questions, dependent: :destroy
    has_many :test_scores
end
