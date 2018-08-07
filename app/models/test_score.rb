class TestScore < ApplicationRecord
  belongs_to :snap
  belongs_to :test
  belongs_to :user
end
