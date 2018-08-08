class Api::QuestionsController < ApplicationController
    def index
        @test = Test.find(params[:test_id])
        @questions = Question.where(test_id: @test.id)
        render json: @questions
    end
end
