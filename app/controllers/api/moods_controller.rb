class Api::MoodsController < ApplicationController
    def index
        @moods = Mood.all
        render json: @moods
    end

    def show
        @mood = Mood.find(params[:id])
        render json: @mood
    end
end
