class Api::UsersController < ApplicationController

  def show
    @user = current_user
    if @user
      # @moments = @user.moments.order(:created_at)
      if @user.teacher_class
        other_users = @user.parents
        @children = @user.students
        @moments = @user.authored_moments
      else
        other_users = @user.teachers.distinct
        @children = @user.children
        @moments = @user.children.first.moments
      end
      @users = other_users.to_a.push(@user)
      render 'api/users/show'
    else
      render json: ["Not logged in"], status: 404
    end
  end

end
