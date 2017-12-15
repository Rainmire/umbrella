class Api::UsersController < ApplicationController

  def show
    @user = current_user
    # @user = User.first
    if @user
      if @user.teacher_class
        @children = @user.students
      else
        @children = @user.children
      end
      render 'api/users/show'
    else
      render json: ["Not logged in"], status: 404
    end
  end

end
