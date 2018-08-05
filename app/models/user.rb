class User < ApplicationRecord
    has_many :snaps, dependent: :destroy
    has_many :test_scores, dependent: :destroy
    validates :name, presence: true
    validates :name, uniqueness: true
end
