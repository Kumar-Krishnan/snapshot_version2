class User < ApplicationRecord
    has_many :snaps, dependent: :destroy
    has_many :test_scores
    validates :name, presence: true
    validates :name, uniqueness: true
end
