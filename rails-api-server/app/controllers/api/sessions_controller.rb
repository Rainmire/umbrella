class Api::SessionsController < ApplicationController
  def create
    # user = User.from_omniauth(env["omniauth.auth"])
    user = User.from_omniauth(request.env["omniauth.auth"])
    @user = User.find_by(email: user.email)

    if @user
      @user.oauth_token = user.oauth_token
      login(@user)
    end
    redirect_to 'umbrella://' + user.oauth_token
  end

  def destroy
    session[:oauth_token] = nil

  end
end
