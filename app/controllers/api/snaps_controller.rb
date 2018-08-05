class Api::SnapsController < ApplicationController
    def index
        @snaps = User.find(params[:user_id]).snaps
        render json: @snaps
    end

    def show
        @snap = Snap.find(params[:id])
        render json: @snap
    end

    def create
        @user = User.find(params[:user_id])
        @snap = @user.snaps.create()
        render json: @snap
    end

    def get_snaps_and_tests
        @snaps = User.find(params[:user_id]).snaps
        @snap = @snaps.first
    end
    # def update
    #     @post = Post.find(params[:id])
    #     @post.update(post_params)
    #     render json: @post
    # end

    def destroy
        @snap = Snap.find(params[:id]).destroy
        render status: :ok
    end
end
