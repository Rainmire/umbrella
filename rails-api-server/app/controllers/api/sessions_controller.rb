class Api::SessionsController < ApplicationController
  def create
    # user = User.from_omniauth(env["omniauth.auth"])
    user = User.from_omniauth(request.env["omniauth.auth"])
    @user = User.find_by(email: user.email)

    if @user
      token = user.oauth_token
      @user.oauth_token = user.oauth_token
      login(@user)
    else
      token = ''
    end
    redirect_to 'umbrella://' + token
    # redirect_to 'umbrella://', session_token: user.oauth_token

  end

  def destroy
    current_user.oauth_token = nil
    current_user.provider = nil
    session[:oauth_token] = nil
    @current_user = nil
  end
end
