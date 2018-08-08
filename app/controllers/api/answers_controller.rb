class Api::AnswersController < ApplicationController
    def index
        @question = Question.find(params[:question_id])
        @answers = Answer.where(question_id: @question.id)
        render json: @answers
    end
end

