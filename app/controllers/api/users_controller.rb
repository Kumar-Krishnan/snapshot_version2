class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        # @users2 = User.includes(:snaps)
        # @user3 = @users2.each do |user|
        #     user.snaps.id
        # end
        # @user4 = Question.joins(:answers).merge(Answer.)
        # snaps_with_this_user = Snap.includes(:snaps)
        # tests = Test.all
        # @user6 = tests.each do |test|
        #     test.snap
        # end
        # @user7 = Answer.joins(:question).where(question_id)
        render json: @user
    end

    def create
        @user = User.create(user_params)
        render json: @user
    end

    def update
        @user = User.find(params[:id])
        @user.update!(user_params)
    
        render json: @user
    end
    
      def destroy
        @user = User.find(params[:id]).delete
    
        render status: :ok
      end

    private
    def user_params
        params.require(:user).permit(:name, :age, :gender)
    end
end
