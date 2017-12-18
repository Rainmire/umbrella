class Api::UsersController < ApplicationController

  before_action :authenticate_request!

  def show
    user = @current_user

    if user.teacher_class
      other_users = user.parents
      @children = user.students
      @moments = user.authored_moments
    else
      other_users = user.teachers.distinct
      @children = user.children
      @moments = user.children.first.moments
    end
    @users = other_users.to_a.push(user)
    render 'api/users/show'
  end
end


# def login
#   user = User.find_by(email: params[:email].to_s.downcase)
#
#   if user && user.authenticate(params[:password])
#       auth_token = JsonWebToken.encode({oauth_token: user.oauth_token})
#       render json: {auth_token: auth_token}, status: :ok
#   else
#     render json: {error: 'Invalid username / password'}, status: :unauthorized
#   end
# end
