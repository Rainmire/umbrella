class SessionsController < ApplicationController
  def create
    # user = User.from_omniauth(env["omniauth.auth"])
    user = User.from_omniauth(request.env["omniauth.auth"])
    @user = User.find_by(email: user.email)

    if @user
      login(@user)
    end

    redirect_to 'umbrella://' + user.oauth_token.to_json
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end