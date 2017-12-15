class Api::UsersController < ApplicationController

  def show
    # @user = current_user
    @user = User.first
    if @user
      @children = @user.children
      render 'api/users/show'
    else
      render json: ["Not logged in"], status: 404
    end
  end

end
