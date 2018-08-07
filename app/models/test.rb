class Test < ApplicationRecord
    has_and_belongs_to_many :snaps
    has_many :questions
end
