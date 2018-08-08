class Api::TestScoresController < ApplicationController
    def snap_test_score
        @snap = Snap.find(params[:snap_id])
        @test = Test.find(params[:test_id])
        @test_score = TestScore.where(test_id: @test.id, snap_id: @snap.id)
        render json: @test_score
    end
end
