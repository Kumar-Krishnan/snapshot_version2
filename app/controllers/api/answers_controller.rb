class Api::AnswersController < ApplicationController
    def index
        @question = Question.find(params[:question_id])
        @answers = Answer.where(question_id: @question.id)
        render json: @answers
    end

    def chosen_answer_for_snap
        @snap = Snap.find(params[:snap_id])
        @question = Question.find(params[:question_id])
        @answer = @snap.answers.where(question_id: @question.id)
        render json: @answer
    end
end

