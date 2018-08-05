class Api::TestScoresController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @depression = Mood.find_by_name("Depression")
        @anxiety = Mood.find_by_name("Anxiety")
        @scores = @user.test_scores
        @dep_scores = @scores.where(mood_id: @depression.id)
        @anx_scores = @scores.where(mood_id: @anxiety.id)
        render json: @dep
    end

    def get_all_test_scores_for_snap
        @snap = Snap.find(params[:snap_id])
        @depression = Mood.find_by_name("Depression")
        @anxiety = Mood.find_by_name("Anxiety")
        @scores = @snap.test_scores
        @dep_score = @scores.where(mood_id: @depression.id)
        @anx_score = @scores.where(mood_id: @anxiety.id)
    end

    def get_by_snap_and_mood
        @snap = Snap.find(params[:snap_id])
        @mood = Mood.find(params[:mood_id])
        @test_score = @snap.test_scores.where(mood_id: @mood.id)
        @fail = {
            name: "fail"
        }
        if @test_score != []
            render json: @test_score
        else
            render json: @fail
        end
    end

    def save_user_submitted_score
        @snap = Snap.find(params[:snap_id])
        @mood = Mood.find(params[:mood_id])
        @userScore = params[:test_score]
        @new_test_score = TestScore.new
        @new_test_score.score = @userScore
        @new_test_score.snap_id = @snap.id
        @new_test_score.mood_id = @mood.id
        @new_test_score.user_id = @snap.user_id
        @new_test_score.save

        @response = {
            message: "All Systems Go"
        }
        render json: @response
    end

    def get_all_test_scores_for_user
        @user = User.find(params[:user_id])
        @mood = Mood.find(params[:mood_id])
        @requested_scores = @user.test_scores.where(mood_id: @mood.id)
        render json: @requested_scores
    end
    
end
