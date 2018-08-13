class Api::TestsController < ApplicationController
  def index
    @tests = Test.all
    render json: @tests
  end

  def show
    @test = Test.find(params[:id])
    render json: @test
  end

  def total_questions
    @test = Test.find(params[:test_id])
    @questions = @test.questions
    questionLength = @questions.length
    render json: questionLength
  end
end
