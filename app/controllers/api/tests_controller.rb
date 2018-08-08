class Api::TestsController < ApplicationController
  def index
    @tests = Test.all
    render json: @tests
  end

  def show
  end
end
