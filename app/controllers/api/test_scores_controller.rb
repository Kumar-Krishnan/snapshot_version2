class Api::TestScoresController < ApplicationController
    def snap_test_score
        @snap = Snap.find(params[:snap_id])
        @test = Test.find(params[:test_id])
        @test_score = TestScore.where(test_id: @test.id, snap_id: @snap.id)
        render json: @test_score
    end

    def post_new_score
        newScore = TestScore.new
        newScore.score_total = params[:test_score_total]
        newScore.snap_id = params[:snap_id]
        newScore.user_id = params[:user_id]
        newScore.test_id = params[:test_id]
        newScore.save
    end
end
